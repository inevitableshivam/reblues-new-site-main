import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const deliveries = [
  { asset: "AI Social Content Videos", time: "48 hours", width: "25%", note: "Avatar or human narration, platform-cut" },
  { asset: "Motion Graphic Ads", time: "48–72 hours", width: "35%", note: "Social-ready, multi-format" },
  { asset: "How-To & Tutorial Videos", time: "3–5 days", width: "55%", note: "Narrated, captioned, chapter-marked" },
  { asset: "Feature Explainer Videos", time: "5–7 days", width: "75%", note: "Full motion graphics, scripted" },
  { asset: "Onboarding & Product Films", time: "7–10 days", width: "90%", note: "Full production, voice, motion" },
];

const DeliveryWindows = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".delivery-bar", {
        width: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-muted section-padding border-y border-border">
      <div className="container-rb">
        <p className="text-label text-rb-orange mb-4">DELIVERY WINDOWS</p>
        <h2 className="text-display-lg text-foreground mb-4 max-w-3xl text-left">
          Defined windows. Not 'we'll try to get it to you soon.'
        </h2>
        <p className="text-body text-muted-foreground mb-16 text-left">
          Every video type has a defined first-draft delivery window. No guessing, no chasing.
        </p>

        <div className="space-y-8">
          {deliveries.map((d) => (
            <div key={d.asset}>
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <div>
                  <span className="font-display font-semibold text-foreground text-base">
                    {d.asset}
                  </span>
                  <span className="font-body text-xs text-muted-foreground ml-3">
                    {d.note}
                  </span>
                </div>
                <span className="font-body text-sm text-muted-foreground shrink-0">
                  {d.time}
                </span>
              </div>
              <div className="h-2.5 bg-background overflow-hidden border border-foreground/10">
                <div
                  className="delivery-bar h-full"
                  style={{
                    width: d.width,
                    background: "linear-gradient(135deg, #FE6B00, #FFD95B)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryWindows;
