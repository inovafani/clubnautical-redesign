import NavBar from "@/components/NavBar";
import AboutFaqHeroSection from "@/components/AboutFaqHeroSection";
import AboutFaqListSection from "@/components/AboutFaqListSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "FAQ | Club Nautical",
  description:
    "Learn how yacht charters work with Club Nautical including prices, bookings, destinations and yacht options. Speak with our team on 0493 508 625.",
};

export default function FaqPage() {
  return (
    <>
      <NavBar />
      <AboutFaqHeroSection />
      <AboutFaqListSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
