import Link from "next/link";
import Reveal from "./Reveal";
import { startups } from "@/data/content";

export default function StartupsSection({ preview = false }: { preview?: boolean }) {
  const isEmpty = startups.length === 0;

  return (
    <section className="section" aria-labelledby="startups-heading">
      <div className="container">
        <Reveal className="center">
          <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Ventures</span></div>
          <h2 className="h2" id="startups-heading">Startups &amp; <span className="accent">Ventures</span></h2>
          <p className="lead">Explore the innovative ventures emerging through JJCET-STIF.</p>
        </Reveal>

        {isEmpty ? (
          <div style={{ marginTop: 34 }}>
            <div className="empty">
              <h3>Details will be announced soon.</h3>
              <p>Details of ventures supported by JJCET-STIF will be published here.</p>
              <Link href="/register" className="btn btn--navy">Register Your Interest <span className="arr" aria-hidden="true">→</span></Link>
            </div>
          </div>
        ) : (
          <div className="startup-grid" style={{ marginTop: 36 }}>
            {startups.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 70}>
                <article className="startup-card">
                  <div className="startup-card__mark" aria-hidden="true">{s.initial}</div>
                  <span className="startup-card__sector">{s.sector}</span>
                  <h3>{s.name}</h3>
                  <p>{s.tagline}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}
        {preview && !isEmpty && (
          <div className="center" style={{ marginTop: 26 }}>
            <Link href="/startups" className="btn btn--navy">Meet the Startups <span className="arr" aria-hidden="true">→</span></Link>
          </div>
        )}
      </div>
    </section>
  );
}
