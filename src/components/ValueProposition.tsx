import Reveal from "./Reveal";
import { Icon } from "./Icon";
import { valueProps } from "@/data/content";

export default function ValueProposition() {
  return (
    <section className="vp-band" aria-labelledby="vp-heading">
      <div className="container">
        <Reveal className="center">
          <div style={{ display: "flex", justifyContent: "center" }}><span className="pill pill--on-dark">Value Proposition</span></div>
          <h2 className="h2 h2--light" id="vp-heading">What We <span className="accent">Offer</span></h2>
          <p className="lead lead--light">We provide end-to-end support for student innovators and early-stage startups.</p>
        </Reveal>
        <div className="grid-3" style={{ marginTop: 36 }}>
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 80}>
              <article className="vp-card vp-card--dark">
                <div className="vp-card__icon" aria-hidden="true"><Icon name={v.icon} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
