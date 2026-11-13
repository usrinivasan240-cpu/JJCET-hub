import Link from "next/link";
import PublicImage from "./PublicImage";
import Reveal from "./Reveal";
import { infrastructureItems } from "@/data/content";

// Reference mockup shows exactly these five facilities as equal thumbnails.
const five = infrastructureItems.slice(0, 5);

export default function Infrastructure({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="section" aria-labelledby="infra-heading">
      <div className="container">
        {showHeader && (
          <Reveal className="center">
            <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Infrastructure</span></div>
            <h2 className="h2" id="infra-heading">State-of-the-Art <span className="accent">Infrastructure</span></h2>
            <p className="lead">Coworking spaces, fabrication labs and research centres — all on the JJCET campus.</p>
          </Reveal>
        )}
        <div className="infra5" style={{ marginTop: showHeader ? 36 : 0 }}>
          {five.map((f, i) => (
            <Reveal key={f.title} delay={(i % 5) * 60}>
              <Link href="/about#infrastructure" className="infra5__item" aria-label={`View infrastructure: ${f.title}`}>
                <span className="infra5__img">
                  <PublicImage src={f.image} alt={f.alt} label={f.title} />
                </span>
                <b>{f.title}</b>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
