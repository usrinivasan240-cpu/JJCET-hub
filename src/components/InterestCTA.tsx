import Link from "next/link";
import Reveal from "./Reveal";

export default function InterestCTA() {
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby="cta-heading">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div>
              <span className="pill pill--on-dark">Be a Part of JJCET-STIF</span>
              <h2 id="cta-heading" style={{ marginTop: 14 }}>Turn Your Ideas into <span>Real-World Solutions</span></h2>
              <p>Are you a student, innovator or early-stage entrepreneur? Register your interest and take the first step towards incubation.</p>
            </div>
            <div className="cta-band__actions">
              <Link href="/register" className="btn btn--primary">Register Your Interest <span className="arr" aria-hidden="true">→</span></Link>
              <Link href="/contact" className="btn btn--ghost">Talk to Us</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
