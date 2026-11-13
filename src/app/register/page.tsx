import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { PageHero } from "@/components/Shared";

export const metadata = { title: "Register Your Interest | JJCET-STIF" };

export default function RegisterPage() {
  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero crumb="Register" title="Register Your Interest" text="Take the first step towards pre-incubation at JJCET-STIF. Fill in your details — our team will review and contact you." />
        <section className="section">
          <div className="container" style={{ maxWidth: 920 }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <span className="pill">Pre-Incubation Application</span>
              <h2 className="h2">Register Your <span className="accent">Interest</span></h2>
              <p className="lead" style={{ margin: "0 auto" }}>Interested in building your idea, prototype or startup with JJCET-STIF? Submit your details and our team will get in touch.</p>
            </div>
            <div className="form-card">
              <RegistrationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
