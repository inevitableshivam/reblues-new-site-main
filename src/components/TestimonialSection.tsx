import { useEffect, useRef } from "react";
import pricingGradient from "@/assets/pricing-gradient.svg";

const testimonials = [
  {
    quote: "Reblues Media's communication is good.",
    name: "Thibault Mathian",
    role: "CEO, Genlook",
    img: "/testimonials/thibault matthew.png"
  },
  {
    quote: "Their creative team demonstrated a strong understanding of my brand and target audience.",
    name: "Amelia Wang",
    role: "Founder, BuyFromChina Inc.",
    img: "/testimonials/amelia wang.png"
  },
  {
    quote: "Quality work was delivered.",
    name: "Sayak Gupta",
    role: "Founder, SS AgriQulture Innovations Private Limited",
    img: "/testimonials/sayak gupta.png"
  },
  {
    quote: "They knew what they were doing.",
    name: "Shah Arpan",
    role: "Managing Partner, Intricare Technologies",
    img: "/testimonials/shah arpan.png"
  },
  {
    quote: "Good quality work — they completely understood our product and translated it into exceptional creative assets.",
    name: "Saya Mogra",
    role: "Founder, Sheen AI",
    img: "/testimonials/saya mogra.png"
  },
  {
    quote: "The quality of work was outstanding. Their team understood our product deeply and delivered beyond expectations.",
    name: "Vijay Raghavan",
    role: "Director of India Marketing & Operations, Pillir.io",
    img: "/testimonials/vijayraghvan.png"
  }
];

const TestimonialCard = ({ t, idx }: { t: typeof testimonials[0], idx: number }) => (
  <div className="group relative bg-background border border-border rounded-none w-[500px] md:w-[680px] h-[300px] shrink-0 overflow-hidden transition-all duration-300 hover:shadow-lg flex items-stretch">
    {/* Image section */}
    <div className="w-[40%] bg-muted relative overflow-hidden shrink-0 border-r border-border">
      <img 
        src={t.img} 
        alt={t.name} 
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105" 
        loading="lazy"
      />
      {/* Permanent faint black overlay for brutalist contrast */}
      <div className="absolute inset-0 bg-black/5"></div>
    </div>
    
    {/* Content section */}
    <div className="w-[60%] p-8 flex flex-col justify-between bg-background">
      <div className="relative z-10">
        <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
          "{t.quote}"
        </p>
      </div>
      <div className="relative z-10 bottom-0 pt-6">
        <p className="font-display text-sm md:text-base font-bold text-foreground mb-1">{t.name}</p>
        <p className="font-body text-xs md:text-sm text-muted-foreground">{t.role}</p>
      </div>
    </div>
  </div>
);

const ScrollRow = ({ items, speed }: { items: typeof testimonials; speed: number }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    let animationId: number;
    let offset = 0;
    const totalWidth = el.scrollWidth / 2;

    const animate = () => {
      offset += speed;
      if (offset >= totalWidth) offset = 0;
      el.style.transform = `translateX(-${offset}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return (
    <div className="overflow-hidden w-full relative rounded-none">
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-muted via-muted/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-muted via-muted/80 to-transparent z-10 pointer-events-none"></div>
      <div ref={rowRef} className="flex gap-8 will-change-transform pr-8">
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} idx={i} />
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="bg-muted section-padding border-y border-border relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none opacity-30">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="testimonial-glow" cx="60%" cy="50%" r="60%">
              <stop offset="0%" stopColor="hsl(24, 100%, 50%)" stopOpacity="0.4" />
              <stop offset="40%" stopColor="hsl(0, 59%, 43%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(0, 0%, 96%)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="800" fill="url(#testimonial-glow)" />
        </svg>
      </div>

      <div className="container-rb relative z-10 mb-12">
        <p className="text-label text-rb-orange mb-8">WHAT CLIENTS SAY</p>

        <div className="mb-6">
          <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 48V28.8C0 20.8 1.6 14.4 4.8 9.6C8 4.8 13.6 1.6 21.6 0L24 6.4C19.2 7.2 15.6 9.2 13.2 12.4C10.8 15.6 9.6 19.2 9.6 23.2H20V48H0ZM36 48V28.8C36 20.8 37.6 14.4 40.8 9.6C44 4.8 49.6 1.6 57.6 0L60 6.4C55.2 7.2 51.6 9.2 49.2 12.4C46.8 15.6 45.6 19.2 45.6 23.2H56V48H36Z"
              fill="hsl(var(--muted-foreground))"
              opacity="0.15"
            />
          </svg>
        </div>

        <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight mb-8 max-w-3xl">
          Don't just take our word for it. Hear from founders who ship faster with us.
        </h2>

        <div className="w-16 h-px bg-border" />
      </div>

      {/* Constrained horizontal scrolling row */}
      <div className="relative z-10 w-full mx-auto pb-12">
        <ScrollRow items={testimonials} speed={1.0} />
      </div>
    </section>
  );
};

export default TestimonialSection;
