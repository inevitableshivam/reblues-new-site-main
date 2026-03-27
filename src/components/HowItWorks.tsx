import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    label: "STEP 01", title: "Product Deep Dive",
    body: "We learn your product roadmap, upcoming features, and which users are struggling with adoption. This context is permanent — we carry it into every piece of content forever. You explain the product once. Never again.",
    tag: "Pre-production · Strategy · Context session",
    img: "/steps/understanding .png"
  },
  {
    label: "STEP 02", title: "Monthly Content Plan",
    body: "We choose the features that need adoption content this month. We write the scripts. We build the production plan. You review and approve. No brief writing, no project management — just a 30-minute sync and you're done.",
    tag: "Content calendar · Scripting · Plan approval",
    img: "/steps/planning.png"
  },
  {
    label: "STEP 03", title: "Production",
    body: "Explainer videos, tutorials, and short-form content all go into production simultaneously. The art director reviews every deliverable before you see it. Nothing leaves without passing internal quality review first.",
    tag: "Motion graphics · Video production · QA review",
    img: "/steps/production.png"
  },
  {
    label: "STEP 04", title: "Distribution Ready",
    body: "You receive optimized content for marketing, onboarding, and social — platform-cut, captioned, and ready to post. We handle the distribution calendar and posting so your team doesn't manage a single upload.",
    tag: "Multi-platform · Posting · Analytics",
    img: "/steps/delivery.png"
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20 md:mb-32">
        <p className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-4 text-left">HOW WE WORK</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-left">
          Four steps. Zero ambiguity.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl text-left leading-relaxed">
          From product context to published content — we handle everything in between to ensure seamless delivery.
        </p>
      </div>

      {/* Reduced hold buffer so user doesn't scroll through dead space after cards stack */}
      <div className="relative w-full max-w-[85rem] mx-auto px-6 md:px-12 pb-[10vh]">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="sticky flex flex-col w-full bg-background border border-border shadow-sm rounded-none overflow-hidden"
            style={{ 
              top: `calc(10vh + ${i * 64}px)`, 
              zIndex: i + 10,
              // Magic formula: Pads the bottoms of earlier cards exactly proportionally to their top offsets.
              // This guarantees every single card shares the exact same mathematical bottom boundary in the viewport.
              paddingBottom: `${(steps.length - 1 - i) * 64}px`,
              marginBottom: '0' 
            }}
          >
            {/* Full-width Accordion Folder Tab */}
            <div className="w-full h-[64px] px-8 bg-[#f9f9f9] border-b border-border flex items-center shrink-0">
              <span className="font-bold tracking-[0.2em] text-[11px] text-foreground uppercase">{step.label}</span>
            </div>

            {/* Content Row */}
            <div className="flex flex-col md:flex-row w-full flex-1">
              {/* Text Side */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-background border-b md:border-b-0 md:border-r border-border min-h-[45vh]">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-[1.1]">{step.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium mb-10 max-w-lg">{step.body}</p>
                <div className="mt-auto pt-8">
                  <span className="inline-block font-display text-[10px] md:text-[11px] font-bold tracking-[0.1em] text-foreground border border-border px-4 py-2 uppercase bg-muted/20">
                    {step.tag}
                  </span>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 bg-[#F1F1F2] relative flex items-center justify-center p-8 md:p-16 min-h-[40vh] md:min-h-full">
                 <img src={step.img} alt={step.title} className="w-full h-auto max-h-[100%] object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HowItWorks;
