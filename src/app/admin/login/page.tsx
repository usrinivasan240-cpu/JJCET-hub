"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setBusy(false);
    if (res.ok) router.push("/admin");
    else setError("Invalid credentials. Please try again.");
  }

  return (
    <div className="admin-shell">
      <div className="admin-top"><div className="container admin-top__inner"><b>JJCET-STIF Admin</b><small>SECURE AREA</small></div></div>
      <div className="container">
        <div className="form-card login-card">
          <h1 style={{ margin: "0 0 6px", color: "#071A3D", fontSize: 24 }}>Admin Login</h1>
          <p style={{ margin: "0 0 20px", color: "#5b6b84", fontSize: 14 }}>Separate from the public website. Authorized personnel only.</p>
          <form onSubmit={onSubmit}>
            <div className="field" style={{ marginBottom: 14 }}>
              <label htmlFor="a-user">Username</label>
              <input id="a-user" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" required />
            </div>
            <div className="field" style={{ marginBottom: 14 }}>
              <label htmlFor="a-pass">Password</label>
              <input id="a-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
            </div>
            {error && <p className="err" role="alert">{error}</p>}
            <button className="btn btn--primary" disabled={busy} style={{ width: "100%", justifyContent: "center" }}>
              {busy ? "Signing in…" : "Sign In →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
