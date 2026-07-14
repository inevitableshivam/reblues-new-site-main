import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ComparisonSection from "@/components/ComparisonSection";
import DeliveryWindows from "@/components/DeliveryWindows";
import TestimonialSection from "@/components/TestimonialSection";
import ManifestoSection from "@/components/ManifestoSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <ProblemSection />
      <HowItWorks />
      <ComparisonSection />
      <DeliveryWindows />
      <TestimonialSection />
      <ManifestoSection />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
