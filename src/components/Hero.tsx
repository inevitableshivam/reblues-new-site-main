import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const h1Line1Ref = useRef<HTMLDivElement>(null);
  const h1Line2Ref = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.5 }, 0.3)
        .from(h1Line1Ref.current, { yPercent: 105, opacity: 0, duration: 0.7 }, 0.5)
        .from(h1Line2Ref.current, { yPercent: 105, opacity: 0, duration: 0.7 }, 0.7)
        .from(subheadRef.current, { y: 24, opacity: 0, duration: 0.6 }, 1.0)
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.5 }, 1.2)
        .from(trustRef.current, { y: 20, opacity: 0, duration: 0.5 }, 1.4);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex flex-col justify-center pt-32 md:pt-40 lg:pt-48 pb-0 bg-background overflow-hidden"
    >
      <div className="absolute top-0 -left-64 w-[60%] h-[60%] pointer-events-none opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(254,107,0,0.15) 0%, transparent 60%)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col items-start text-left">
        <span ref={eyebrowRef} className="mb-6 block">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-bold tracking-[0.1em] text-orange-950 rounded-none bg-orange-50 border border-orange-200/50 shadow-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 text-orange-600">
              <path d="M7 0L8.8 5.2L14 7L8.8 8.8L7 14L5.2 8.8L0 7L5.2 5.2L7 0Z" fill="currentColor" />
            </svg>
            <span className="opacity-90">PRODUCT ADOPTION CONTENT ENGINE</span>
          </span>
        </span>

        <div className="overflow-hidden mb-2">
          <div ref={h1Line1Ref} className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-foreground leading-[1.1]">
            Turn Your Product
          </div>
        </div>
        <div className="overflow-hidden mb-8">
          <div ref={h1Line2Ref} className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.1]"
               style={{ background: "linear-gradient(135deg, #FE6B00, #F4A216)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Into Content That Drives Growth
          </div>
        </div>

        <p ref={subheadRef} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-medium tracking-tight leading-relaxed">
          From explainers to product education and short-form distribution —<br className="hidden sm:block" />
          we help SaaS companies turn product complexity into user understanding.
        </p>

        <div ref={ctaRef} className="flex items-center gap-4 mb-12 flex-wrap">
          <a href="#pricing"
            className="font-display font-semibold text-white px-8 py-4 text-base rounded-none shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/30 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #FE6B00, #F4A216)" }}>
            Book a Demo
          </a>
          <a href="#how-it-works"
            className="font-display font-semibold text-foreground px-8 py-4 rounded-none border border-border bg-white shadow-sm hover:bg-muted/50 transition-all duration-300 hover:-translate-y-0.5">
            See How It Works
          </a>
        </div>

        <div ref={trustRef} className="hidden"></div>
      </div>
    </section>
  );
};

export default Hero;
