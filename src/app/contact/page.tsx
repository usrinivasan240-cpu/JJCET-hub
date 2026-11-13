"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { PageHero, ContactBlock } from "@/components/Shared";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero crumb="Contact" title="Contact JJCET-STIF" text="Reach the JJCET-STIF team for incubation queries, partnerships and campus visits." />
        <section className="section">
          <div className="container contact-grid">
            <div>
              <div className="cta-band__actions" style={{ justifyContent: "flex-start", marginBottom: 16 }}>
                <a className="btn btn--navy" href="mailto:stif@jjcet.ac.in">Email JJCET-STIF <span className="arr" aria-hidden="true">→</span></a>
                <a className="btn btn--outline" href="tel:979066007">Call 979066007 <span className="arr" aria-hidden="true">→</span></a>
                <a className="btn btn--primary" href="/register">Register Your Interest <span className="arr" aria-hidden="true">→</span></a>
              </div>
              <ContactBlock />
              <div className="map-frame" style={{ marginTop: 14 }}>
                <iframe
                  title="JJCET location map"
                  loading="lazy"
                  src="https://www.google.com/maps?q=J.J.+College+of+Engineering+and+Technology+Ammapettai+Tiruchirappalli+620009&output=embed"
                />
              </div>
            </div>
            <div className="form-card">
              <h2 style={{ margin: "0 0 6px", color: "#071A3D" }}>Send us a message</h2>
              <p style={{ margin: "0 0 20px", color: "#5b6b84", fontSize: 14 }}>We usually respond within 2–3 working days.</p>
              {status === "done" ? (
                <div className="form-ok" role="status">Thank you — your message has been received. Our team will get back to you shortly.</div>
              ) : (
                <form onSubmit={onSubmit} aria-label="Contact form">
                  <div className="form-grid">
                    <div className="field"><label htmlFor="c-name">Name *</label><input id="c-name" required value={form.name} onChange={set("name")} autoComplete="name" /></div>
                    <div className="field"><label htmlFor="c-email">Email *</label><input id="c-email" type="email" required value={form.email} onChange={set("email")} autoComplete="email" /></div>
                    <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" /></div>
                    <div className="field"><label htmlFor="c-subject">Subject *</label><input id="c-subject" required value={form.subject} onChange={set("subject")} /></div>
                    <div className="field field--full"><label htmlFor="c-message">Message *</label><textarea id="c-message" required value={form.message} onChange={set("message")} /></div>
                  </div>
                  {status === "error" && <p className="err" role="alert">Could not send your message. Please email stif@jjcet.ac.in directly.</p>}
                  <div style={{ marginTop: 20 }}>
                    <button className="btn btn--primary" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Send Message"} <span className="arr" aria-hidden="true">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
