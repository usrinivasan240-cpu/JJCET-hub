"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const STATUSES = ["New", "Under Review", "Contacted", "Shortlisted", "Rejected", "Converted"];

export default function RegistrationDetail({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/admin/registrations/${params.id}`).then(async (res) => {
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      if (!res.ok) { setMsg("Record not found."); return; }
      const json = await res.json();
      setData(json.registration);
      setStatus(json.registration.status);
      setNotes(json.registration.adminNotes || "");
    });
  }, [params.id]);

  async function save() {
    const res = await fetch(`/api/admin/registrations/${params.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, adminNotes: notes }),
    });
    setMsg(res.ok ? "Saved successfully." : "Failed to save.");
  }

  async function remove() {
    if (!confirm("Delete this registration permanently?")) return;
    const res = await fetch(`/api/admin/registrations/${params.id}`, { method: "DELETE" });
    if (res.ok) router.push("/admin/registrations");
    else setMsg("Delete failed.");
  }

  if (!data && !msg) return <div className="admin-shell"><div className="container" style={{ padding: 60 }}>Loading…</div></div>;
  if (!data) return <div className="admin-shell"><div className="container" style={{ padding: 60 }}><p>{msg}</p><Link href="/admin/registrations">← Back</Link></div></div>;

  const str = (k: string) => String(data[k] ?? "-");
  const list = (k: string) => {
    const v = data[k];
    return Array.isArray(v) && v.length > 0 ? v.join(", ") : "-";
  };

  const fields: Array<[string, string]> = [
    ["Full Name", str("fullName")], ["Email", str("email")], ["Phone", str("phone")],
    ["College / Organisation", str("college")], ["Applicant Type", str("applicantType")],
    ["Department", str("department")], ["Year of Study", str("year")],
    ["Field of Interest", str("field")], ["Startup / Innovative Project", str("startupName")],
    ["Team Size", str("teamSize")], ["Current Status", str("prototypeStatus")],
    ["LinkedIn", str("linkedin")], ["GitHub / Project Link", str("github")],
    ["Submitted", new Date(str("createdAt")).toLocaleString("en-IN")],
  ];

  return (
    <div className="admin-shell">
      <div className="admin-top">
        <div className="container admin-top__inner">
          <div><b>JJCET-STIF Admin</b> <small>· {str("registrationId")}</small></div>
          <Link className="admin-btn" href="/admin/registrations">← All Registrations</Link>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: 60, marginTop: 28 }}>
        <h1 style={{ color: "#071A3D" }}>{str("fullName")}</h1>
        <div className="detail-grid">
          {fields.map(([k, v]) => <div className="detail" key={k}><small>{k}</small><p>{v}</p></div>)}
          <div className="detail full"><small>Project / Idea Description</small><p style={{ whiteSpace: "pre-wrap" }}>{str("ideaDescription")}</p></div>
          <div className="detail full"><small>Interested Support</small><p>{list("supportInterests")}</p></div>
          <div className="detail full"><small>Additional Message</small><p style={{ whiteSpace: "pre-wrap" }}>{str("message")}</p></div>
        </div>
        <div className="form-card" style={{ marginTop: 20 }}>
          <h2 style={{ marginTop: 0, color: "#071A3D" }}>Admin Actions</h2>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="d-status">Change Status</label>
              <select id="d-status" value={status} onChange={(e) => setStatus(e.target.value)}>
                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Contact</label>
              <div style={{ display: "flex", gap: 8 }}>
                <a className="admin-btn" style={{ color: "#071A3D", borderColor: "#e3eaf3" }} href={`mailto:${str("email")}`}>Email</a>
                <a className="admin-btn" style={{ color: "#071A3D", borderColor: "#e3eaf3" }} href={`tel:${str("phone")}`}>Call</a>
              </div>
            </div>
            <div className="field field--full">
              <label htmlFor="d-notes">Admin Notes (private)</label>
              <textarea id="d-notes" value={notes} onChange={(e) => setNotes(e.target.value)} style={{ minHeight: 100 }} />
            </div>
          </div>
          {msg && <p role="status" style={{ color: "#15803d", fontWeight: 700 }}>{msg}</p>}
          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <button className="btn btn--primary" onClick={save}>Save Changes</button>
            <button className="btn btn--outline" onClick={remove}>Delete Record</button>
          </div>
        </div>
      </div>
    </div>
  );
}
