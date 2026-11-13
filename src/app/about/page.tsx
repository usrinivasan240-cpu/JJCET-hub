import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ValueProposition from "@/components/ValueProposition";
import FocusSectors from "@/components/FocusSectors";
import Infrastructure from "@/components/Infrastructure";
import InterestCTA from "@/components/InterestCTA";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/Shared";

export const metadata = { title: "About Us | JJCET-STIF" };

export default function AboutPage() {
  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero crumb="About Us" title="About JJCET-STIF" text="A Section 8 company and Pre-Incubation Centre sanctioned by StartupTN — hosted at J.J. College of Engineering and Technology, Tiruchirappalli." />
        <AboutSection showApprovedExtra />
        <ValueProposition />

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="two-col">
                <div>
                  <span className="pill">Our Mandate</span>
                  <h2 className="h2">Pre-Incubation, <span className="accent">Done Right</span></h2>
                  <p className="lead">We empower early-stage entrepreneurs by transforming innovative ideas into scalable, market-ready ventures through structured support, world-class infrastructure, and expert mentorship.</p>
                </div>
                <div>
                  <ul className="prose-list">
                    <li><b>Structured mentorship programs</b> — from idea validation to prototype and pitch.</li>
                    <li><b>Prototype development support</b> — Maker Space and Design to Product Centre.</li>
                    <li><b>Access to infrastructure</b> — labs and collaboration spaces on campus.</li>
                    <li><b>Networking &amp; investor connect</b> — ecosystem access via StartupTN and industry.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Focus Areas — lives inside About Us (no separate page) */}
        <div id="focus-areas" style={{ scrollMarginTop: 80 }}>
          <FocusSectors />
        </div>

        {/* Infrastructure — lives inside About Us (no separate page) */}
        <div id="infrastructure" style={{ scrollMarginTop: 80 }}>
          <Infrastructure />
        </div>

        <InterestCTA />
      </main>
      <Footer />
    </>
  );
}
