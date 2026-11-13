import Reveal from "./Reveal";
import { Icon } from "./Icon";
import { highlightCards } from "@/data/content";

export default function HighlightsStrip() {
  return (
    <div className="container strip-wrap" aria-label="JJCET-STIF at a glance">
      <div className="strip">
        {highlightCards.map((c, i) => (
          <Reveal key={c.key} delay={i * 70}>
            <article className="strip__card strip__card--stat">
              <div className="strip__icon" aria-hidden="true"><Icon name={c.icon} /></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
