import Link from "next/link";
import PublicImage from "./PublicImage";
import Reveal from "./Reveal";
import { focusSectors } from "@/data/content";

export default function FocusSectors() {
  return (
    <section className="section" aria-labelledby="sectors-heading">
      <div className="container">
        <Reveal className="center">
          <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Where We Focus</span></div>
          <h2 className="h2" id="sectors-heading">Core Focus <span className="accent">Areas</span></h2>
          <p className="lead">Deep, technology-led domains anchored in JJCET&apos;s engineering strengths — <b>but not limited to</b> these areas.</p>
        </Reveal>
        <div className="sectors" style={{ marginTop: 36 }}>
          {focusSectors.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 70}>
              <Link href="/about#focus-areas" className="sector-card" aria-label={s.title}>
                <PublicImage src={s.image} alt={s.alt} label={s.title} />
                <div className="sector-card__body">
                  <span className="sector-card__tag">Focus Area</span>
                  <h3>{s.shortTitle[0]}<br />{s.shortTitle[1]}</h3>
                  <span className="sector-card__go"><i aria-hidden="true">→</i> Explore area</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="note-line center">Our doors are open to allied ideas too — <b>but not limited to</b> the sectors above. If it is innovative and buildable, talk to us.</p>
      </div>
    </section>
  );
}
