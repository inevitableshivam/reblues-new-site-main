import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ManifestoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".manifesto-line", { y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-24 relative overflow-hidden border-t border-b border-border">
      {/* Subtle background flair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-5 blur-[120px] rounded-none"
        style={{ background: "radial-gradient(circle, #FE6B00 0%, transparent 65%)" }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6 md:px-12">
        <span className="mb-8 inline-flex items-center gap-2.5 px-6 py-2 text-xs font-bold tracking-[0.15em] text-orange-600 uppercase rounded-none border border-border bg-muted/50">
           THE SOLUTION
        </span>
        
        <h2 className="manifesto-line text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-12 max-w-4xl">
          We turn your product roadmap into a{" "}
          <span className="text-orange-500">
             continuous stream of content.
          </span>
        </h2>
        
        <div className="manifesto-line w-full max-w-3xl mx-auto p-10 md:p-14 rounded-none bg-muted/20 border border-border relative overflow-hidden">
          <p className="relative z-10 text-xl md:text-3xl text-foreground font-extrabold tracking-tight leading-snug">
            One feature <span className="text-orange-500 font-black mx-3">→</span> multiple assets<br/>
            <span className="text-muted-foreground font-semibold text-lg md:text-2xl block mt-5">that drive awareness, education, and adoption.</span>
          </p>
        </div>

        <div className="manifesto-line mt-12 md:mt-16 w-full max-w-5xl aspect-video mx-auto border border-border shadow-2xl relative overflow-hidden group">
          <video
            src="/Reblues_New_VSL.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 z-20 p-2 md:p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer rounded-none"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
      </div>
    </section>
  );
};
export default ManifestoSection;
