import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import checkIcon from "@/assets/check-icon.svg";
gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "SIGNAL", tagline: "Start the adoption content system", price: "$3,000",
    forWho: "For SaaS teams shipping features monthly and building their first video content layer.",
    deliverables: [
      { label: "Feature Explainer Videos", value: "2 / mo", note: "Full motion graphics + scripting included" },
      { label: "Tutorial / How-To Videos", value: "5 / mo", note: "Narrated, captioned, YouTube-ready" },
      { label: "Social Content Videos", value: "10 / mo", note: "AI avatar or human, vertical format" },
    ],
    outcomes: ["Product Education", "Product Adoption"],
    includes: ["Pre-production strategy session", "Scripting and storyboarding", "Multi-platform distribution", "Dedicated project manager", "Pause or cancel any time"],
    popular: false,
  },
  {
    name: "MOMENTUM", tagline: "Scale the adoption engine", price: "$5,000",
    forWho: "For SaaS teams where video is a core growth channel and every feature release needs content.",
    deliverables: [
      { label: "Feature Explainer Videos", value: "3 / mo", note: "Full motion graphics + scripting included" },
      { label: "Tutorial / How-To Videos", value: "8 / mo", note: "Narrated, captioned, YouTube-ready" },
      { label: "Social Content Videos", value: "15 / mo", note: "AI avatar or human, vertical format" },
      { label: "Motion Graphic Ads", value: "4 / mo", note: "LinkedIn, YouTube, Meta — paid-ready" },
    ],
    outcomes: ["Product Education", "Product Adoption", "Product Awareness"],
    includes: ["Everything in Signal", "Monthly content calendar", "Platform posting and scheduling", "Ad-ready cuts of all explainers", "Localization (1 language on request)"],
    popular: true,
  },
  {
    name: "CUSTOM PLAN", tagline: "Full-stack adoption infrastructure", price: "$10,000",
    forWho: "For SaaS teams making video their primary PLG lever — every feature, every platform, every market.",
    deliverables: [
      { label: "Feature Explainer Videos", value: "Custom", note: "Full motion graphics + scripting included" },
      { label: "Tutorial / How-To Videos", value: "Custom", note: "Narrated, captioned, YouTube-ready" },
      { label: "Social Content Videos", value: "Custom", note: "AI avatar or human, vertical format" },
      { label: "Motion Graphic Ad Sets", value: "Custom", note: "Multi-variant, all platforms" },
    ],
    outcomes: ["Product Education", "Product Adoption", "Product Awareness"],
    includes: ["Everything in Momentum", "Full platform management", "Localization up to 3 languages", "Quarterly adoption strategy audit", "Priority production queue"],
    popular: false,
  },
];

const addons = [
  {
    id: "founder", name: "FOUNDER CONTENT", price: "",
    summary: "10 videos/month from a 2-hour recording session.",
    items: ["10 founder videos produced per month", "Talking-head or screen-share format", "Scripted from a single 2-hour recording session", "Distributed to LinkedIn, YouTube Shorts, TikTok, and X", "Each video repurposed into 3 additional social assets"],
    note: "Your only job: show up on camera for 2 hours a month.",
  },
  {
    id: "podcast", name: "PODCAST PRODUCTION", price: "",
    summary: "4 episodes + 12 reels per month.",
    items: ["4 full podcast episodes produced per month", "Audio editing, intro/outro, chapter markers", "3 short-form reels per episode — 12 total/month", "Captions, audiograms, and thumbnail design", "Distributed across Spotify, Apple, YouTube, and social"],
    note: "One recording session. Twelve pieces of content.",
  },
];

const allOutcomes = ["Product Education", "Product Adoption", "Product Awareness"];

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeAddon, setActiveAddon] = useState<string>("founder");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".plan-card", { y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const selectedAddon = addons.find(a => a.id === activeAddon);

  return (
    <section id="pricing" ref={sectionRef} className="bg-background section-padding">
      <div className="container-rb">
        <p className="text-label text-rb-orange mb-4">PRICING</p>
        <h2 className="text-display-lg text-foreground mb-4 text-left">Your Product Adoption Content Team</h2>
        <p className="text-body text-muted-foreground mb-16 max-w-xl text-left">
          A monthly retainer system — not a per-video agency. Pick the plan that matches your product's velocity.
        </p>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-24">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan-card relative flex flex-col border text-left overflow-hidden bg-background rounded-none ${plan.popular ? "border-rb-orange shadow-lg shadow-orange-500/10 md:-translate-y-2" : "border-border"}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 px-4 py-1.5 font-display text-[10px] sm:text-xs font-bold text-foreground text-center"
                  style={{ background: "linear-gradient(135deg, hsl(var(--rb-orange)), hsl(var(--rb-yellow)))" }}>
                  MOST POPULAR
                </div>
              )}
              <div className="p-8 flex flex-col h-full">
                <span className={`font-display text-2xl font-bold tracking-tight text-foreground mb-1 block ${plan.popular ? "pr-24" : ""}`}>{plan.name}</span>
                <span className="font-body text-sm text-muted-foreground block mb-6">{plan.tagline}</span>
                <p className="text-body-sm text-muted-foreground mb-6 pb-6 border-b border-border">{plan.forWho}</p>

                <p className="text-label text-rb-orange mb-4">MONTHLY DELIVERABLES</p>
                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  {plan.deliverables.map((d) => (
                    <div key={d.label}>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-display font-semibold text-foreground text-sm">{d.label}</span>
                        <span className="font-display font-bold text-xs px-2 py-0.5 rounded-none" style={{ background: "linear-gradient(135deg, hsl(var(--rb-orange)), hsl(var(--rb-yellow)))", color: "#000" }}>
                          {d.value}
                        </span>
                      </div>
                      <span className="font-body text-xs text-muted-foreground">{d.note}</span>
                    </div>
                  ))}
                </div>

                <p className="text-label text-muted-foreground mb-3">PLG OUTCOMES DRIVEN</p>
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-border">
                  {allOutcomes.map((o) => (
                    <span key={o} className={`font-body text-xs px-2.5 py-1 border rounded-none ${plan.outcomes.includes(o) ? "border-rb-orange text-foreground" : "border-border text-muted-foreground/40"}`}>
                      {o}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5 mb-8">
                  {plan.includes.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <img src={checkIcon} alt="" width={14} height={14} className="shrink-0 mt-1" />
                      <span className="text-body-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>

                <a href="#book-a-call"
                  className={`mt-auto block text-center font-display font-bold px-6 py-3.5 rounded-none transition-all duration-300 ${plan.popular ? "text-foreground hover:brightness-110" : "text-foreground border border-foreground hover:bg-foreground hover:text-background"}`}
                  style={plan.popular ? { background: "linear-gradient(135deg, hsl(var(--rb-orange)), hsl(var(--rb-yellow)))" } : {}}>
                  Book a Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on stacks */}
        <div className="border-t border-border pt-16">
          <p className="text-label text-rb-orange mb-4">ADD-ON STACKS</p>
          <h3 className="text-display-md text-foreground mb-4 text-left">Stack more output on your base plan.</h3>
          <p className="text-body text-muted-foreground mb-10 max-w-xl text-left">
            Both add-ons plug directly into any plan. Pause any stack independently, any time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Toggle cards */}
            <div className="space-y-4 md:col-span-1">
              {addons.map((addon) => (
                <button key={addon.id} onClick={() => setActiveAddon(addon.id)}
                  className={`w-full text-left p-6 border-2 transition-all duration-300 relative ${activeAddon === addon.id ? "border-rb-orange" : "border-border hover:border-rb-orange/50"}`}>
                  <div className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 transition-all duration-300 ${activeAddon === addon.id ? "border-rb-orange bg-rb-orange" : "border-border bg-background"}`} />
                  <div className="flex items-center justify-between mb-1 mt-1">
                    <span className="font-display font-bold text-xs tracking-wide text-rb-orange">+ {addon.name}</span>
                    <span className="font-display font-bold text-sm text-foreground">{addon.price}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground">{addon.summary}</p>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            {selectedAddon && (
              <div className="md:col-span-2 border border-border p-8 bg-muted">
                <p className="text-label text-rb-orange mb-4">{selectedAddon.name} — WHAT'S INCLUDED</p>
                <ul className="space-y-3 mb-6">
                  {selectedAddon.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-rb-orange text-sm shrink-0 mt-0.5">→</span>
                      <span className="text-body-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-rb-orange font-semibold italic">{selectedAddon.note}</p>
                <a href="#book-a-call" className="inline-block mt-6 font-display font-bold text-sm text-foreground border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300">
                  Discuss this Add-on →
                </a>
              </div>
            )}
          </div>

          <p className="text-body-sm text-muted-foreground text-center mt-8">
            Both add-ons require an active base plan · Month-to-month · Pause any stack independently
          </p>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
