import NavBar from "@/components/NavBar";
import AboutReviewsHeroSection from "@/components/AboutReviewsHeroSection";
import AboutReviewsWidgetSection from "@/components/AboutReviewsWidgetSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Reviews | Club Nautical",
  description:
    "See why guests rate Club Nautical as a leading luxury yacht charter provider across Australia. Read real reviews or book on 0493 508 625.",
};

export default function ReviewsPage() {
  return (
    <>
      <NavBar />
      <AboutReviewsHeroSection />
      <AboutReviewsWidgetSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
