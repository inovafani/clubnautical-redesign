import NavBar from "@/components/NavBar";
import AboutFleetHeroSection from "@/components/AboutFleetHeroSection";
import FleetGrid from "@/components/FleetGrid";

export const metadata = {
  title: "The Fleet | Club Nautical",
  description:
    "Browse our full fleet of luxury yachts and charter vessels across Sydney, Brisbane, Gold Coast and beyond. From intimate cruisers to large event boats.",
};

export default function TheFleetPage() {
  return (
    <main>
      <NavBar />
      <AboutFleetHeroSection />
      <FleetGrid />
    </main>
  );
}
