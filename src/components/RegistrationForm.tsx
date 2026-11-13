"use client";

import { useState } from "react";
import { supportInterestOptions, fieldOfInterestOptions, applicantTypeOptions, currentStatusOptions } from "@/data/content";

type Errors = Record<string, string>;

const initial = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  applicantType: "",
  department: "",
  year: "",
  field: "",
  startupName: "",
  ideaDescription: "",
  teamSize: "",
  prototypeStatus: "",
  supportInterests: [] as string[],
  linkedin: "",
  github: "",
  message: "",
  consent: false,
};

export default function RegistrationForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ id: string } | null>(null);
  const [serverError, setServerError] = useState("");

  const isStudent = form.applicantType === "Student";

  const set = (k: keyof typeof initial, v: unknown) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => {
      const n = { ...e };
      delete n[k as string];
      return n;
    });
  };

  const toggleInterest = (opt: string) => {
    setForm((f) => ({
      ...f,
      supportInterests: f.supportInterests.includes(opt)
        ? f.supportInterests.filter((s) => s !== opt)
        : [...f.supportInterests, opt],
    }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setServerError("");
    try {
      const payload = {
        ...form,
        department: isStudent ? form.department : "",
        year: isStudent ? form.year : "",
        prototypeStatus: form.prototypeStatus || undefined,
      };
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        if (json?.errors) setErrors(json.errors);
        setServerError(json?.message || "Submission failed. Please check the form and try again.");
      } else {
        setResult({ id: json.registrationId });
        setForm(initial);
        setErrors({});
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="form-ok" role="status" aria-live="polite">
        <h3 style={{ margin: "0 0 8px" }}>Thank you for your interest in JJCET-STIF.</h3>
        <p style={{ margin: 0 }}>Your registration has been received successfully.</p>
        <p style={{ margin: "10px 0 0", fontSize: 14 }}>Registration ID:</p>
        <code>{result.id}</code>
      </div>
    );
  }

  const F = (id: string) => (errors[id] ? <span className="err" role="alert">{errors[id]}</span> : null);

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Register your interest with JJCET-STIF">
      {serverError && (
        <div className="err" role="alert" style={{ background: "#fdeaea", border: "1px solid #f3b8b8", borderRadius: 10, padding: "12px 16px", marginBottom: 18 }}>
          {serverError}
        </div>
      )}
      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Full Name <i>*</i></label>
          <input id="fullName" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} autoComplete="name" required />
          {F("fullName")}
        </div>
        <div className="field">
          <label htmlFor="email">Email Address <i>*</i></label>
          <input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" required />
          {F("email")}
        </div>
        <div className="field">
          <label htmlFor="phone">Mobile Number <i>*</i></label>
          <input id="phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" placeholder="+91 XXXXX XXXXX" required />
          {F("phone")}
        </div>
        <div className="field">
          <label htmlFor="college">College / Institution <i>*</i></label>
          <input id="college" value={form.college} onChange={(e) => set("college", e.target.value)} required />
          {F("college")}
        </div>
        <div className="field">
          <label htmlFor="applicantType">Applicant Type <i>*</i></label>
          <select id="applicantType" value={form.applicantType} onChange={(e) => set("applicantType", e.target.value)} required>
            <option value="">Select</option>
            {applicantTypeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {F("applicantType")}
        </div>

        {isStudent && (
          <>
            <div className="field">
              <label htmlFor="department">Department <i>*</i></label>
              <input id="department" value={form.department} onChange={(e) => set("department", e.target.value)} placeholder="e.g. CSE, ECE, Mechanical" required />
              {F("department")}
            </div>
            <div className="field">
              <label htmlFor="year">Year of Study <i>*</i></label>
              <select id="year" value={form.year} onChange={(e) => set("year", e.target.value)} required>
                <option value="">Select year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="PG / Research">PG / Research</option>
                <option value="Alumni / Other">Alumni / Other</option>
              </select>
              {F("year")}
            </div>
          </>
        )}

        <div className="field">
          <label htmlFor="field">Area / Field of Interest <i>*</i></label>
          <select id="field" value={form.field} onChange={(e) => set("field", e.target.value)} required>
            <option value="">Select a field</option>
            {fieldOfInterestOptions.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
          {F("field")}
        </div>
        <div className="field">
          <label htmlFor="startupName">Startup / Innovative Project Name</label>
          <input id="startupName" value={form.startupName} onChange={(e) => set("startupName", e.target.value)} />
        </div>
        <div className="field field--full">
          <label htmlFor="ideaDescription">Project / Idea Description</label>
          <textarea
            id="ideaDescription"
            value={form.ideaDescription}
            onChange={(e) => set("ideaDescription", e.target.value)}
            placeholder="What problem are you solving, and for whom?"
            aria-describedby="ideaDescriptionHint"
          />
          <span id="ideaDescriptionHint" style={{ fontSize: 12.5, color: "#5b6b84" }}>100 – 150 words recommended.</span>
          {F("ideaDescription")}
        </div>
        <div className="field">
          <label htmlFor="teamSize">Team Size</label>
          <select id="teamSize" value={form.teamSize} onChange={(e) => set("teamSize", e.target.value)}>
            <option value="">Select</option>
            <option value="1">Just me (1)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="prototypeStatus">Current Status</label>
          <select id="prototypeStatus" value={form.prototypeStatus} onChange={(e) => set("prototypeStatus", e.target.value)}>
            <option value="">Select status</option>
            {currentStatusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {F("prototypeStatus")}
        </div>
        <div className="field field--full">
          <label>Interested Support <span style={{ fontWeight: 500, color: "#5b6b84" }}>(select all that apply)</span></label>
          <div className="checks">
            {supportInterestOptions.map((opt) => (
              <label key={opt} className="check">
                <input type="checkbox" checked={form.supportInterests.includes(opt)} onChange={() => toggleInterest(opt)} /> {opt}
              </label>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="linkedin">LinkedIn Profile <span style={{ fontWeight: 500, color: "#5b6b84" }}>(optional)</span></label>
          <input id="linkedin" type="url" value={form.linkedin} onChange={(e) => set("linkedin", e.target.value)} placeholder="https://linkedin.com/in/..." />
        </div>
        <div className="field">
          <label htmlFor="github">GitHub / Project Link <span style={{ fontWeight: 500, color: "#5b6b84" }}>(optional)</span></label>
          <input id="github" type="url" value={form.github} onChange={(e) => set("github", e.target.value)} placeholder="https://..." />
        </div>
        <div className="field field--full">
          <label htmlFor="message">Additional Message <span style={{ fontWeight: 500, color: "#5b6b84" }}>(optional)</span></label>
          <textarea id="message" value={form.message} onChange={(e) => set("message", e.target.value)} maxLength={3000} style={{ minHeight: 90 }} />
        </div>
        <div className="field field--full">
          <label className="consent" htmlFor="consent">
            <input id="consent" type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} required />
            <span>I agree to the submission and processing of my information for JJCET-STIF incubation/pre-incubation purposes. <i style={{ color: "#d9341f" }}>*</i></span>
          </label>
          {F("consent")}
        </div>
      </div>
      <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button type="submit" className="btn btn--primary" disabled={submitting} aria-busy={submitting}>
          {submitting ? "Submitting…" : "Submit Interest"} <span className="arr" aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
