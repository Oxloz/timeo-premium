import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import BrandingGuide from "@/components/BrandingGuide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Benefits />
      <BrandingGuide />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
