import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ProblemSection from "@/components/ProblemSection";
import ManifestoSection from "@/components/ManifestoSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesGrid from "@/components/ServicesGrid";
import WhoIsItFor from "@/components/WhoIsItFor";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <ProblemSection />
      <ManifestoSection />
      <HowItWorks />
      <ServicesGrid />
      <WhoIsItFor />
      <ComparisonSection />
      <PricingSection />
      <TestimonialSection />
      <FooterCTA />
      <Footer />
    </>
  );
};

export default Index;
