import Link from "next/link";
import PublicImage from "./PublicImage";
import Reveal from "./Reveal";
import { aboutOfficialText, aboutApprovedExtra } from "@/data/content";
import { imageSources } from "@/config/imageSources";

export default function AboutSection({ compact = false, showApprovedExtra = false }: { compact?: boolean; showApprovedExtra?: boolean }) {
  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="container about">
        <Reveal>
          <div>
            <span className="pill">About Us</span>
            <h2 className="h2" id="about-heading">
              JJCET Sowdambikaa Technology<br />Incubation Foundation <span className="accent">(JJCET-STIF)</span>
            </h2>
            <p className="lead">{aboutOfficialText}</p>
            {showApprovedExtra && (
              <div style={{ marginTop: 14 }}>
                {aboutApprovedExtra.map((p) => (
                  <p key={p.slice(0, 32)} className="lead" style={{ fontSize: 15, marginBottom: 12 }}>{p}</p>
                ))}
              </div>
            )}
            {!compact && (
              <div className="about__ticks">
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M20 6 9 17l-5-5" /></svg><span>Section 8 company with a structured pre-incubation journey.</span></div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M20 6 9 17l-5-5" /></svg><span>World-class infrastructure: Maker Space, Drone CoE &amp; Design to Product Centre.</span></div>
                <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M20 6 9 17l-5-5" /></svg><span>Expert mentorship and access to the StartupTN ecosystem.</span></div>
              </div>
            )}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/about" className="btn btn--navy">Know More <span className="arr" aria-hidden="true">→</span></Link>
              <Link href="/register" className="btn btn--outline">Register Interest</Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="about__img">
            <PublicImage src={imageSources.campusGarden} alt="JJCET Sowdambikaa campus — garden and academic blocks" label="JJCET campus photograph" />
            <div className="about__badge"><b>Pre-Incubation Centre</b>Sanctioned by StartupTN</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
