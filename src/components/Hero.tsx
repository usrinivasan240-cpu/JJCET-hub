import Link from "next/link";
import PublicImage from "./PublicImage";
import { heroContent } from "@/data/content";
import { imageSources } from "@/config/imageSources";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true">
        <PublicImage src={imageSources.heroCampus} alt="" eager label="JJCET campus photograph" />
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__inner">
        <div>
          <span className="hero__eyebrow">{heroContent.eyebrow}</span>
          <h2>
            {heroContent.titleA}<br />
            <span className="accent">{heroContent.titleAccent}</span> {heroContent.titleB}
          </h2>
          <p className="hero__sub">{heroContent.sub}</p>
          <p className="hero__text">{heroContent.text}</p>
          <div className="hero__btns">
            <Link href="/register" className="btn btn--primary">
              Register Your Interest <span className="arr" aria-hidden="true">→</span>
            </Link>
            <Link href="/about#infrastructure" className="btn btn--ghost">
              Explore Infrastructure <span className="arr" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero__meta" aria-label="Affiliation">
            <span><i>◆</i> Section 8 Company</span>
            <span><i>◆</i> Sanctioned by StartupTN</span>
            <span><i>◆</i> J.J. College of Engineering and Technology</span>
          </div>
        </div>
        <aside className="hero__side" aria-label="Our promise">
          {heroContent.sideWords.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </aside>
      </div>
    </section>
  );
}
