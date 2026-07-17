import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const outcomes = [
  {
    label: "PRODUCT EDUCATION", color: "#FE6B00",
    headline: "Users understand the product before they ask.",
    metric: "Onboarding completion · Time-to-value · Feature adoption",
    videos: [
      { name: "Feature Explainer Videos", desc: "90-second motion graphics showing exactly what a new feature does and why it matters." },
      { name: "How-To Tutorial Series", desc: "Step-by-step walkthroughs of core use cases — embedded in docs or distributed on YouTube." },
      { name: "Onboarding Walkthroughs", desc: "First-session video experience that gets users to their value moment faster." },
      { name: "Use Case Demos", desc: "One video per user persona showing their specific journey through your product." },
    ],
  },
  {
    label: "PRODUCT ADOPTION", color: "#FFD95B",
    headline: "Users activate — and keep coming back.",
    metric: "Feature adoption rate · DAU/WAU · Churn reduction",
    videos: [
      { name: "New Feature Launch Videos", desc: "Every feature release gets a dedicated video that drives immediate in-product adoption." },
      { name: "Power User Tutorials", desc: "Advanced-use content that converts casual users into high-retention power users." },
      { name: "Release Notes Visual Summaries", desc: "Changelog content in video form — distributed to existing users to drive re-engagement." },
      { name: "In-App Video Touchpoints", desc: "Short context videos at the moments users are most likely to drop off." },
    ],
  },
  {
    label: "PRODUCT AWARENESS", color: "#AE2E2E",
    headline: "The right people find you before the demo call.",
    metric: "Organic reach · Demo request rate · Brand search volume",
    videos: [
      { name: "Motion Graphic Ads", desc: "Short-form video ads for LinkedIn, YouTube, and Meta — built to convert cold audiences." },
      { name: "Social Content Videos", desc: "AI avatar or human-narrated short-form content published across all platforms monthly." },
      { name: "Product Showcase Reels", desc: "15–30 second clips showing the product in action — best-performing organic format for SaaS." },
      { name: "Thought Leadership Content", desc: "Category-positioning videos that make your brand the reference point in the space." },
    ],
  },
];

const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".outcome-block", { y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-muted section-padding border-y border-border">
      <div className="container-rb">
        <p className="text-label text-rb-orange mb-4">THE VIDEO FRAMEWORK</p>
        <h2 className="text-display-lg text-foreground mb-4 max-w-3xl text-left">Every video maps to a product growth outcome.</h2>
        <p className="text-body text-muted-foreground mb-8 max-w-2xl text-left">
          We don't make videos and hope something happens. Every piece of content maps to one of three outcomes in your PLG motion.
        </p>
        <div className="flex items-center gap-4 mb-16 flex-wrap">
          {outcomes.map((o, i) => (
            <div key={o.label} className="flex items-center gap-4">
              <span className="font-display font-bold text-sm px-4 py-2 text-foreground" style={{ background: o.color, color: o.label === "PRODUCT AWARENESS" ? "#fff" : "#000" }}>
                {o.label.split(" ")[1]}
              </span>
              {i < outcomes.length - 1 && <span className="text-rb-orange text-lg">→</span>}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="outcome-block border border-border bg-background overflow-hidden">
              <div className="px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ borderBottom: `2px solid ${outcome.color}` }}>
                <div>
                  <span className="text-label font-bold text-sm block mb-1" style={{ color: outcome.color }}>{outcome.label}</span>
                  <h3 className="text-display-sm text-foreground">{outcome.headline}</h3>
                </div>
                <span className="font-body text-xs text-muted-foreground border border-border px-3 py-1.5 shrink-0">{outcome.metric}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-border">
                {outcome.videos.map((v) => (
                  <div key={v.name} className="group relative p-8 hover:bg-muted transition-colors duration-500 overflow-hidden border-b border-r border-transparent hover:border-rb-orange cursor-default">
                    {/* CSS Burnt Gradient underlay matching the SVG colors */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
                      style={{ background: "linear-gradient(135deg, hsl(24 100% 50%) 0%, hsl(44 100% 68%) 100%)" }}
                    />
                    
                    {/* Content moving above the hover gradient */}
                    <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                      {/* Reblues Star SVG replacing the dot */}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="mb-4 transition-colors duration-500 group-hover:!text-white" style={{ color: outcome.color }}>
                        <path d="M7 0L8.8 5.2L14 7L8.8 8.8L7 14L5.2 8.8L0 7L5.2 5.2L7 0Z"/>
                      </svg>
                      <h4 className="font-display font-semibold text-foreground group-hover:text-white text-base mb-2 transition-colors duration-500">{v.name}</h4>
                      <p className="text-body-sm text-muted-foreground group-hover:text-white/95 leading-relaxed transition-colors duration-500">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesGrid;
