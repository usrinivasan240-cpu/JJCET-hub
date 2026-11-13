import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import InterestCTA from "@/components/InterestCTA";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/Shared";

export const metadata = { title: "Pre-Incubation | JJCET-STIF" };

const SOON = "Details will be announced soon.";

const fields: Array<[string, string]> = [
  ["Programme Name", "Pre-Incubation Programme — JJCET-STIF"],
  ["Duration", SOON],
  ["Eligibility", SOON],
  ["Application Process", SOON],
  ["Application Fee", SOON],
  ["Cohort Size", SOON],
  ["Cohort Dates", SOON],
  ["Application Deadline", SOON],
  ["Selection Process", SOON],
  ["Benefits", SOON],
  ["Mentoring", SOON],
  ["Lab & Infrastructure Access", SOON],
  ["Funding Support", SOON],
  ["Application Link", SOON],
  ["Guidelines PDF", SOON],
];

export default function PreIncubationPage() {
  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero
          crumb="Pre-Incubation"
          title="Pre-Incubation Programme"
          text="JJCET-STIF is a Pre-Incubation Centre sanctioned by StartupTN. Official programme details are listed below."
        />
        <section className="section">
          <div className="container">
            <Reveal className="center">
              <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Programme Details</span></div>
              <h2 className="h2">Official <span className="accent">Programme Information</span></h2>
              <p className="lead">Only officially confirmed information is published. Anything not yet confirmed is marked accordingly.</p>
            </Reveal>
            <ul className="prose-list" style={{ marginTop: 30 }}>
              {fields.map(([label, value]) => (
                <li key={label} style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <b>{label}</b>
                  <span style={{ color: value === SOON ? "#5b6b84" : "#16233a", fontStyle: value === SOON ? "italic" : "normal" }}>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <InterestCTA />
      </main>
      <Footer />
    </>
  );
}
