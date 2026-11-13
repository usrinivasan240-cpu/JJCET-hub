import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import EventsSection from "@/components/EventsSection";
import { PageHero } from "@/components/Shared";

export const metadata = { title: "Achievements & Announcements | JJCET-STIF" };

export default function AchievementsPage() {
  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero
          crumb="Achievements & Announcements"
          title="Achievements &amp; Announcements"
          text="Official achievements, announcements and programme updates from JJCET-STIF. Entries are published only after they are officially confirmed."
        />
        {/* Events feed lives here — empty until official entries are added (admin-managed later). */}
        <EventsSection />
      </main>
      <Footer />
    </>
  );
}
