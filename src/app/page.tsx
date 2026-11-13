import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HighlightsStrip from "@/components/HighlightsStrip";
import AboutSection from "@/components/AboutSection";
import ValueProposition from "@/components/ValueProposition";
import FocusSectors from "@/components/FocusSectors";
import CentresOfExcellence from "@/components/CentresOfExcellence";
import Infrastructure from "@/components/Infrastructure";
import InterestCTA from "@/components/InterestCTA";
import Reveal from "@/components/Reveal";
import EventsSection from "@/components/EventsSection";
import StartupsSection from "@/components/StartupsSection";
import PublicImage from "@/components/PublicImage";
import Link from "next/link";
import { galleryItems } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <BrandHeader />
      <MainNavigation />
      <main>
        <Hero />
        <HighlightsStrip />
        <AboutSection />
        <ValueProposition />
        <FocusSectors />
        <CentresOfExcellence />
        <Infrastructure />
        <InterestCTA />

        <StartupsSection preview />
        <EventsSection preview />

        {/* Gallery preview */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="gallery-preview">
          <div className="container">
            <Reveal className="center">
              <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Glimpses</span></div>
              <h2 className="h2" id="gallery-preview">Campus &amp; <span className="accent">Innovation</span> in Frames</h2>
            </Reveal>
            <div className="g-grid" style={{ marginTop: 30 }}>
              {galleryItems.slice(0, 6).map((g) => (
                <figure className="g-item" key={g.src + g.alt}>
                  <PublicImage src={g.src} alt={g.alt} label={g.alt} />
                  <figcaption>{g.alt}</figcaption>
                </figure>
              ))}
            </div>
            <div className="center" style={{ marginTop: 26 }}>
              <Link href="/gallery" className="btn btn--outline">View Full Gallery <span className="arr" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
