import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/Shared";

export const metadata = { title: "Resources | JJCET-STIF" };

const categories = ["Guidelines", "Forms & Downloads", "FAQs", "Announcements"];

export default function ResourcesPage() {
  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero
          crumb="Resources"
          title="Resources"
          text="Official guidelines, forms, downloads and announcements for JJCET-STIF applicants and ventures."
        />
        <section className="section">
          <div className="container">
            <Reveal className="center">
              <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Document Library</span></div>
              <h2 className="h2">Official <span className="accent">Documents</span></h2>
              <p className="lead">Only approved public documents are published here.</p>
            </Reveal>
            <div className="grid-3" style={{ marginTop: 34 }}>
              {categories.map((c, i) => (
                <Reveal key={c} delay={(i % 3) * 70}>
                  <article className="vp-card">
                    <h3>{c}</h3>
                    <p style={{ fontStyle: "italic", color: "#5b6b84" }}>Details will be announced soon.</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
