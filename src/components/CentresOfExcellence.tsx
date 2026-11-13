import PublicImage from "./PublicImage";
import Reveal from "./Reveal";
import { Icon } from "./Icon";
import { centresOfExcellence } from "@/data/content";

export default function CentresOfExcellence() {
  return (
    <section className="section section--blue-tint" aria-labelledby="coe-heading">
      <div className="container">
        <Reveal className="center">
          <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Build &amp; Test Here</span></div>
          <h2 className="h2" id="coe-heading">World-Class Innovation <span className="accent">Infrastructure</span></h2>
          <p className="lead">Hands-on research and fabrication centres where prototypes take physical shape.</p>
        </Reveal>
        <div className="coe-grid" style={{ marginTop: 36 }}>
          {centresOfExcellence.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 80}>
              <article className="coe-card">
                <div className="coe-card__img">
                  <PublicImage src={c.image} alt={c.alt} label={c.title} />
                </div>
                <div className="coe-card__body">
                  <span className="coe-card__icon" aria-hidden="true"><Icon name={c.icon} /></span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
