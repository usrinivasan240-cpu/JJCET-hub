import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/Shared";

export const metadata = { title: "Policies | JJCET-STIF" };

const policies = [
  "Privacy Policy",
  "Terms & Conditions",
  "Pre-Incubation Policy",
  "Intellectual Property Policy",
  "Code of Conduct",
];

export default function PoliciesPage() {
  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero
          crumb="Policies"
          title="Policies"
          text="Official policies and terms governing JJCET-STIF programmes, applications and incubation support."
        />
        <section className="section">
          <div className="container">
            <Reveal className="center">
              <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Governance</span></div>
              <h2 className="h2">Official <span className="accent">Policies</span></h2>
              <p className="lead">Policy documents are published only after official approval.</p>
            </Reveal>
            <ul className="prose-list" style={{ marginTop: 30 }}>
              {policies.map((p) => (
                <li key={p} style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <b>{p}</b>
                  <span style={{ color: "#5b6b84", fontStyle: "italic" }}>Details will be announced soon.</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
