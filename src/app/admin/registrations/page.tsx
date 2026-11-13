"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

interface Reg {
  registrationId: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  applicantType: string;
  department: string;
  field: string;
  startupName: string;
  prototypeStatus?: string;
  createdAt: string;
  status: string;
}

const STATUSES = ["", "New", "Under Review", "Contacted", "Shortlisted", "Rejected", "Converted"];

export default function RegistrationsPage() {
  const [rows, setRows] = useState<Reg[]>([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  async function load() {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (status) params.set("status", status);
    const res = await fetch(`/api/admin/registrations?${params.toString()}`);
    if (res.status === 401) { window.location.href = "/admin/login"; return; }
    const json = await res.json();
    setRows(json.registrations || []);
    setPage(1);
  }

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const paged = useMemo(() => {
    const start = (page - 1) * perPage;
    return rows.slice(start, start + perPage);
  }, [rows, page]);

  function toCSV(list: Reg[]) {
    const head = ["Registration ID", "Name", "Email", "Phone", "College", "Applicant Type", "Department", "Field", "Startup", "Current Status", "Submitted", "Status"];
    const esc = (v: string | undefined) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const lines = [head.join(",")].concat(
      list.map((r) => [r.registrationId, r.fullName, r.email, r.phone, r.college, r.applicantType, r.department, r.field, r.startupName, r.prototypeStatus, r.createdAt, r.status].map(esc).join(","))
    );
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jjcet-stif-registrations-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="admin-shell">
      <div className="admin-top">
        <div className="container admin-top__inner">
          <div><b>JJCET-STIF Admin</b> <small>· REGISTRATIONS</small></div>
          <div style={{ display: "flex", gap: 10 }}>
            <Link className="admin-btn" href="/admin">Dashboard</Link>
            <Link className="admin-btn" href="/">View Site</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: 60 }}>
        <h1 style={{ color: "#071A3D" }}>Registrations <small style={{ color: "#5b6b84", fontSize: 15 }}>({rows.length})</small></h1>
        <div className="table-wrap">
          <div className="table-tools">
            <input placeholder="Search name, email, college, ID…" value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && load()} aria-label="Search registrations" style={{ minWidth: 240 }} />
            <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
              {STATUSES.map((s) => <option key={s} value={s}>{s || "All statuses"}</option>)}
            </select>
            <button className="admin-btn admin-btn--primary" onClick={load} style={{ color: "#fff", border: 0 }}>Search / Filter</button>
            <button className="admin-btn" onClick={() => toCSV(rows)} style={{ color: "#071A3D", borderColor: "#e3eaf3" }}>Export CSV</button>
          </div>
          <div className="table-scroll">
            <table className="admin-table">
              <thead><tr><th>Registration ID</th><th>Name</th><th>College</th><th>Field</th><th>Submitted</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                {paged.map((r) => (
                  <tr key={r.registrationId}>
                    <td style={{ fontSize: 12 }}>{r.registrationId}</td>
                    <td><b>{r.fullName}</b><br /><small>{r.email}<br />{r.phone}</small></td>
                    <td>{r.college}<br /><small>{r.department}</small></td>
                    <td>{r.field}</td>
                    <td>{new Date(r.createdAt).toLocaleString("en-IN")}</td>
                    <td><span className={`badge badge--${r.status.replace(/\s/g, "")}`}>{r.status}</span></td>
                    <td><div className="row-actions"><Link href={`/admin/registrations/${r.registrationId}`}>View</Link></div></td>
                  </tr>
                ))}
                {paged.length === 0 && <tr><td colSpan={7} style={{ textAlign: "center", padding: 30 }}>No registrations match.</td></tr>}
              </tbody>
            </table>
          </div>
          <div className="pager">
            <span>Page {page} of {Math.max(1, Math.ceil(rows.length / perPage))}</span>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="admin-btn" style={{ color: "#071A3D", borderColor: "#e3eaf3" }} disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>← Prev</button>
              <button className="admin-btn" style={{ color: "#071A3D", borderColor: "#e3eaf3" }} disabled={page * perPage >= rows.length} onClick={() => setPage((p) => p + 1)}>Next →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
