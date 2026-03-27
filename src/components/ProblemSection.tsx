import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pricingGradient from "@/assets/pricing-gradient.svg";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { 
    title: "Low feature adoption", 
    desc: "Users are paying for features they don't know exist. Your product evolves faster than your users' understanding of it."
  },
  { 
    title: "Confused users", 
    desc: "No video. No tutorial. No walkthrough. New users hit a wall in onboarding and churn before they reach the value moment."
  },
  { 
    title: "Churn from underutilization", 
    desc: "Users who don't use the product fully don't renew. The product is capable. The content layer is missing."
  },
  {
    title: "Invisible updates",
    desc: "Release notes get buried. In-app popups get dismissed immediately. Your hard work goes entirely unnoticed."
  }
];

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setTimeout(() => ScrollTrigger.refresh(), 100);
    const ctx = gsap.context(() => {
      gsap.fromTo(".bento-card", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] overflow-hidden py-16 md:py-24 relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-20 blur-[150px]"
        style={{ background: "radial-gradient(ellipse at top, rgba(254,107,0,0.15) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Split Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-20 md:mb-24">
          <div className="flex-1">
            <span className="mb-6 inline-flex px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase rounded-none border border-white/10 bg-white/5 backdrop-blur-md">
              The problem
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.05] max-w-2xl">
              <span className="text-white/40">Shipping features isn't the problem.</span><br />
              Adoption is.
            </h2>
          </div>
          
          <div className="md:w-[35%] flex md:justify-end md:text-right md:items-end md:mt-24">
            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium">
              You're not alone. <span className="text-white">67% of SaaS churn</span> is from poor onboarding. Your users never discover the features they need.
            </p>
          </div>
        </div>

        {/* Raw List (No graphics/cards) */}
        <div className="flex flex-col w-full border-t border-white/5 mt-16 md:mt-24">
          {problems.map((p, idx) => (
            <div key={p.title} className="bento-card group flex flex-col md:flex-row gap-8 lg:gap-16 py-12 md:py-16 xl:py-20 border-b border-white/5 relative overflow-hidden transition-all duration-700 px-6 lg:px-12 items-start md:items-center group-hover:border-white/10">
              
              {/* Burnt Gradient Overlay on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none z-0"
                style={{ backgroundImage: `url(${pricingGradient})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />

              <div className="relative z-10 text-5xl md:text-7xl lg:text-[100px] font-black leading-none text-rb-orange opacity-90 group-hover:scale-[1.15] origin-left transition-transform duration-700 shrink-0">
                0{idx + 1}
              </div>
              <div className="flex flex-col justify-center flex-1 relative z-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 lg:mb-6">{p.title}</h3>
                <p className="text-base md:text-lg lg:text-xl text-white/50 leading-relaxed font-medium max-w-2xl">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProblemSection;
