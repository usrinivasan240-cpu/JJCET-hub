import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import StartupsSection from "@/components/StartupsSection";
import InterestCTA from "@/components/InterestCTA";
import { PageHero } from "@/components/Shared";

export const metadata = { title: "Startups | JJCET-STIF" };

export default function StartupsPage() {
  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero crumb="Startups" title="Startups & Ventures" text="Explore the innovative ventures emerging through JJCET-STIF." />
        <StartupsSection />
        <InterestCTA />
      </main>
      <Footer />
    </>
  );
}
