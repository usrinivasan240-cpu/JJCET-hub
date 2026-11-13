import { redirect } from "next/navigation";
import Link from "next/link";
import { getAdminFromCookies } from "@/lib/auth";
import { readAll } from "@/lib/registrations";

export default async function AdminHome() {
  const admin = getAdminFromCookies();
  if (!admin) redirect("/admin/login");
  const rows = await readAll();
  const count = (s: string) => rows.filter((r) => r.status === s).length;

  const stats = [
    { label: "Total registrations", value: rows.length, cls: "" },
    { label: "New", value: count("New"), cls: "stat--new" },
    { label: "Under Review", value: count("Under Review"), cls: "" },
    { label: "Contacted", value: count("Contacted"), cls: "" },
    { label: "Shortlisted", value: count("Shortlisted"), cls: "" },
    { label: "Rejected", value: count("Rejected"), cls: "" },
  ];

  const latest = rows.slice(0, 8);

  return (
    <div className="admin-shell">
      <div className="admin-top">
        <div className="container admin-top__inner">
          <div><b>JJCET-STIF Admin</b> <small>· {admin.username}</small></div>
          <div style={{ display: "flex", gap: 10 }}>
            <Link className="admin-btn" href="/">View Site</Link>
            <form action="/api/admin/logout" method="post">
              <button className="admin-btn" formAction="/api/admin/logout" type="submit">Logout</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: 60 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28, flexWrap: "wrap", gap: 12 }}>
          <h1 style={{ margin: 0, color: "#071A3D" }}>Dashboard</h1>
          <Link href="/admin/registrations" className="btn btn--navy">All Registrations →</Link>
        </div>
        <div className="stat-grid">
          {stats.map((s) => (
            <div className={`stat ${s.cls}`} key={s.label}><small>{s.label}</small><b>{s.value}</b></div>
          ))}
        </div>
        <div className="table-wrap">
          <div className="table-tools"><b>Latest registrations</b></div>
          <div className="table-scroll">
            <table className="admin-table">
              <thead><tr><th>Registration ID</th><th>Name</th><th>College</th><th>Field</th><th>Submitted</th><th>Status</th></tr></thead>
              <tbody>
                {latest.map((r) => (
                  <tr key={r.registrationId}>
                    <td><Link href={`/admin/registrations/${r.registrationId}`}>{r.registrationId}</Link></td>
                    <td>{r.fullName}<br /><small>{r.email}</small></td>
                    <td>{r.college}</td>
                    <td>{r.field}</td>
                    <td>{new Date(r.createdAt).toLocaleDateString("en-IN")}</td>
                    <td><span className={`badge badge--${r.status.replace(/\s/g, "")}`}>{r.status}</span></td>
                  </tr>
                ))}
                {latest.length === 0 && <tr><td colSpan={6} style={{ textAlign: "center", padding: 30 }}>No registrations yet.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
