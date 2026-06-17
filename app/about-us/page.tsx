import NavBar from "@/components/NavBar";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutStorySection from "@/components/AboutStorySection";
import AboutWhatWeDoSection from "@/components/AboutWhatWeDoSection";
import AboutApproachSection from "@/components/AboutApproachSection";
import AboutExperiencesSection from "@/components/AboutExperiencesSection";
import AboutWhyChooseSection from "@/components/AboutWhyChooseSection";
import AboutFactsSection from "@/components/AboutFactsSection";
import AboutClosingCtaSection from "@/components/AboutClosingCtaSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "About Us | Club Nautical",
  description:
    "Club Nautical is an Australian luxury yacht charter company offering private yacht experiences across Australia. Call 0493 508 625.",
};

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutWhatWeDoSection />
      <AboutApproachSection />
      <AboutExperiencesSection />
      <AboutWhyChooseSection />
      <AboutFactsSection />
      <AboutClosingCtaSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
