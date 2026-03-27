import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const rows = [
  { label: "Pricing", a: "Per video — unpredictable", b: "Retainer + scope creep", c: "Flat monthly — one number" },
  { label: "Strategy", a: "None — you brief everything", b: "Account manager relays brief", c: "We build the content plan with you" },
  { label: "Pre-production", a: "You script, you storyboard", b: "Charged separately", c: "Included — scripting and planning" },
  { label: "Product knowledge", a: "Re-explain every time", b: "New contact every engagement", c: "Absorbed once, permanent context" },
  { label: "Distribution", a: "You manage it", b: "Not included", c: "We post and manage all platforms" },
  { label: "PLG support", a: "Not built for product teams", b: "Brand-only focus", c: "Built around adoption outcomes" },
  { label: "Output speed", a: "Varies wildly", b: "2–4 weeks minimum", c: "48 hours to 7 days by type" },
  { label: "Commitment", a: "Project by project", b: "Long contracts", c: "Monthly — pause any time" },
];

const ComparisonSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".comp-row", 
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <p className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-4 text-left">THE COMPARISON</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6 text-left">
          Not a freelancer. Not a production agency.
        </h2>
        <p className="text-base md:text-lg font-medium text-muted-foreground mb-16 text-left max-w-3xl leading-relaxed">
          Most video vendors wait for your brief and make the file. We come in before the brief and build the strategy.
        </p>

        {/* Clean, wrapped comparison table */}
        <div className="w-full border border-border bg-background overflow-x-auto shadow-sm">
          <div className="min-w-[840px]">
            {/* Header Row */}
            <div className="grid grid-cols-[160px_1fr_1fr_1.2fr] gap-6 p-6 border-b border-border bg-muted/20">
              <span />
              <span className="font-display font-bold text-muted-foreground text-xs uppercase tracking-widest">Freelancer</span>
              <span className="font-display font-bold text-muted-foreground text-xs uppercase tracking-widest">Agency</span>
              <span className="font-display font-bold text-orange-600 text-xs uppercase tracking-widest">REBLUES</span>
            </div>
            
            {/* Body Rows */}
            {rows.map((row, i) => (
              <div key={i} className="comp-row grid grid-cols-[160px_1fr_1fr_1.2fr] gap-6 p-6 md:p-8 border-b border-border border-dashed last:border-b-0 hover:bg-muted/10 transition-colors">
                <span className="font-body text-[11px] font-bold text-foreground uppercase tracking-[0.1em] self-start pt-1 md:pr-4 leading-relaxed opacity-80">{row.label}</span>
                
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5 text-red-500/60">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-muted-foreground font-medium leading-relaxed">{row.a}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5 text-red-500/60">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-muted-foreground font-medium leading-relaxed">{row.b}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 14 14" fill="currentColor" className="shrink-0 mt-1 text-orange-500">
                    <path d="M7 0L8.8 5.2L14 7L8.8 8.8L7 14L5.2 8.8L0 7L5.2 5.2L7 0Z"/>
                  </svg>
                  <span className="text-sm text-foreground font-bold leading-relaxed">{row.c}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComparisonSection;
