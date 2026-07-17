import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const profiles = [
  { tag: "PERFECT FIT", tagColor: "#FE6B00", title: "AI Tools Shipping Features Frequently", desc: "Generative AI products, LLM tools, AI-native platforms — you ship weekly and users can't keep up. Every release needs an explainer." },
  { tag: "PERFECT FIT", tagColor: "#FFD95B", title: "Developer Tools & APIs", desc: "Complex products with a steep learning curve. Tutorials and walkthroughs drive adoption better than docs alone. Your users need to see it working." },
  { tag: "PERFECT FIT", tagColor: "#FE6B00", title: "Product-Led Growth Companies", desc: "No sales team pushing feature discovery. Video does the job a rep would do — explaining value, driving activation, reducing churn." },
  { tag: "PERFECT FIT", tagColor: "#FFD95B", title: "Complex SaaS Platforms", desc: "Automation tools, data platforms, HR tech, fintech — products with 10+ features that require education before users see value." },
];

const WhoIsItFor = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".who-card", { y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-muted section-padding border-y border-border">
      <div className="container-rb">
        <p className="text-label text-rb-orange mb-4">WHO THIS IS FOR</p>
        <h2 className="text-display-lg text-foreground mb-4 max-w-3xl text-left">Built For Fast-Growing SaaS Products</h2>
        <p className="text-body text-muted-foreground mb-16 max-w-2xl text-left">
          If your product ships new features regularly and your content can't keep up — this is built for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((p) => (
            <div key={p.title} className="who-card bg-background border border-border p-10">
              <span className="inline-block font-body text-xs font-bold tracking-widest px-3 py-1 mb-4 text-foreground" style={{ background: p.tagColor, color: "#000" }}>
                {p.tag}
              </span>
              <h3 className="text-display-sm text-foreground mb-3">{p.title}</h3>
              <p className="text-body text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhoIsItFor;
