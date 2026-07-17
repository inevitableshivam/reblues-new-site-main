import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import TestimonialSection from "@/components/TestimonialSection";
import { ArrowUp, Play, Sparkles, Eye } from "lucide-react";

const getYouTubeEmbedUrl = (videoId: string) =>
  `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`;

const YouTubeEmbed = ({
  videoId,
  title,
  aspectClass = "aspect-video",
}: {
  videoId: string;
  title: string;
  aspectClass?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  if (isPlaying) {
    return (
      <div className={`relative ${aspectClass} w-full overflow-hidden bg-black`}>
        <iframe
          src={getYouTubeEmbedUrl(videoId)}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className={`relative ${aspectClass} w-full overflow-hidden bg-black cursor-pointer group/embed`}
      aria-label={`Play ${title}`}
    >
      <img
        src={thumbnailSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={() => setThumbnailSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)}
      />
      <div className="absolute inset-0 bg-black/25 group-hover/embed:bg-black/35 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover/embed:scale-110 transition-transform">
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
};

interface Project {
  id: string;
  title: string;
  youtubeId: string;
  companyName: string;
  category: "demo" | "explainer" | "launch" | "narrative";
  logoPath: string;
  videoType: string;
}

const projects: Project[] = [
  // Demo Videos
  {
    id: "1",
    title: "LeadCRM.io — Product Demo",
    youtubeId: "VJSUUDlAVBk",
    companyName: "LeadCRM.io",
    category: "demo",
    logoPath: "/logos/leadcrm_io.png",
    videoType: "Product Demo"
  },
  {
    id: "2",
    title: "Lemmino — Product Demo",
    youtubeId: "cygElzZGQRg",
    companyName: "Lemmino",
    category: "demo",
    logoPath: "/logos/lemmino.png",
    videoType: "Product Demo"
  },
  // Explainer Videos
  {
    id: "3",
    title: "GenLook — Animated Explainer",
    youtubeId: "RDSkzWi5Coo",
    companyName: "GenLook",
    category: "explainer",
    logoPath: "/logos/genlook.png",
    videoType: "Animated Explainer"
  },
  {
    id: "4",
    title: "BuyFromChina.ca — Animated Explainer",
    youtubeId: "De5dFbhZf0M",
    companyName: "BuyFromChina.ca",
    category: "explainer",
    logoPath: "/logos/buyfromchina_ca.png",
    videoType: "Animated Explainer"
  },
  {
    id: "5",
    title: "Sheen.ai — Animated Explainer",
    youtubeId: "F2O7FK13qWA",
    companyName: "Sheen.ai",
    category: "explainer",
    logoPath: "/logos/sheen_ai.png",
    videoType: "Animated Explainer"
  },
  // Launch Videos
  {
    id: "6",
    title: "Pillir — Product Launch",
    youtubeId: "CFOEUJICLes",
    companyName: "Pillir",
    category: "launch",
    logoPath: "/logos/pillir.png",
    videoType: "Product Launch"
  },
  {
    id: "7",
    title: "Osource — Product Launch",
    youtubeId: "tQOpL-piu70",
    companyName: "Osource",
    category: "launch",
    logoPath: "/logos/osource.png",
    videoType: "Product Launch"
  },
  {
    id: "8",
    title: "Magical CX — Product Launch",
    youtubeId: "6NP54JUHgqc",
    companyName: "Magical CX",
    category: "launch",
    logoPath: "/logos/magical_cx.png",
    videoType: "Product Launch"
  },
  {
    id: "9",
    title: "Pillir — Campaign Video",
    youtubeId: "cxLNAHH8-K0",
    companyName: "Pillir",
    category: "launch",
    logoPath: "/logos/pillir.png",
    videoType: "Campaign Launch"
  },
  // New Demo Videos
  {
    id: "10",
    title: "Arqia — Product Demo",
    youtubeId: "KJnGpIkucdg",
    companyName: "Arqia",
    category: "demo",
    logoPath: "/logos/arqia.png",
    videoType: "Product Demo"
  },
  {
    id: "11",
    title: "Opsvara — Product Demo",
    youtubeId: "oNX-eAd3XgE",
    companyName: "Opsvara",
    category: "demo",
    logoPath: "/logos/opsvara.png",
    videoType: "Product Demo"
  },
  // New Explainer Video
  {
    id: "12",
    title: "LeadCRM.io — Animated Explainer",
    youtubeId: "IQSPb30-Jac",
    companyName: "LeadCRM.io",
    category: "explainer",
    logoPath: "/logos/leadcrm_io.png",
    videoType: "Animated Explainer"
  },
  // Brand Narrative Videos
  {
    id: "13",
    title: "Farao — Brand Narrative",
    youtubeId: "LI63txvflDA",
    companyName: "Farao",
    category: "narrative",
    logoPath: "/logos/farao.png",
    videoType: "Brand Narrative"
  },
  {
    id: "14",
    title: "Farao — Brand Narrative",
    youtubeId: "FhLBXevzRek",
    companyName: "Farao",
    category: "narrative",
    logoPath: "/logos/farao.png",
    videoType: "Brand Narrative"
  },
  {
    id: "15",
    title: "Orus — Brand Narrative",
    youtubeId: "q1t5hu7ZGhc",
    companyName: "Orus",
    category: "narrative",
    logoPath: "/logos/orus.png",
    videoType: "Brand Narrative"
  }
];

const clientLogos: { src: string; alt: string; size?: "sm" | "lg" }[] = [
  { src: "/logos/leadcrm_io.png", alt: "LeadCRM.io" },
  { src: "/logos/lemmino.png", alt: "Lemmino" },
  { src: "/logos/genlook.png", alt: "GenLook" },
  { src: "/logos/buyfromchina_ca.png", alt: "BuyFromChina.ca" },
  { src: "/logos/sheen_ai.png", alt: "Sheen.ai" },
  { src: "/logos/pillir.png", alt: "Pillir" },
  { src: "/logos/osource.png", alt: "Osource" },
  { src: "/logos/magical_cx.png", alt: "Magical CX" },
  { src: "/logos/arqia.png", alt: "Arqia" },
  { src: "/logos/salesstack.png", alt: "SalesStack" },
  { src: "/logos/pagepilot.png", alt: "PagePilot" },
  { src: "/logos/upflow.png", alt: "Upflow" },
  { src: "/logos/prospectoo.png", alt: "Prospectoo" },
  { src: "/logos/median.png", alt: "Median", size: "sm" },
  { src: "/logos/opsvara.png", alt: "Opsvara" },
  { src: "/logos/farao.png", alt: "Farao" },
  { src: "/logos/10x.png", alt: "10x" },
  { src: "/logos/openfort.png", alt: "Openfort", size: "lg" },
];

const Portfolio = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Twitter widgets.js for X post embeds
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    script.onload = () => {
      if ((window as any).twttr) {
        (window as any).twttr.widgets.load();
      }
    };
    document.head.appendChild(script);
    return () => {
      try { document.head.removeChild(script); } catch(e) {}
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const categories = [
    { id: "demos", label: "Demo Videos" },
    { id: "narratives", label: "Brand Narrative" },
    { id: "founder-motion", label: "Founder + Motion" },
    { id: "explainers", label: "Explainers" },
    { id: "launches", label: "Launches" },
    { id: "showreel", label: "Featured Showreel" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF4] text-[#0A0A0A] antialiased font-sans transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
        {/* Glow Blobs */}
        <div 
          className="absolute top-0 -left-64 w-[60%] h-[60%] pointer-events-none opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(254,107,0,0.15) 0%, transparent 60%)" }} 
        />
        <div 
          className="absolute bottom-0 right-0 w-[50%] h-[50%] pointer-events-none opacity-30 blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(244,162,22,0.12) 0%, transparent 60%)" }} 
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-orange-950 rounded-none bg-orange-50 border border-orange-200/50 shadow-sm mb-6 uppercase">
            <Sparkles size={12} className="text-primary" />
            Selected Work
          </span>

          <h1 className="text-display-xl font-bold tracking-tight text-foreground leading-[1.05] mb-6 max-w-4xl">
            Video built for the <span className="gradient-text">products</span> behind it.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-medium tracking-tight leading-relaxed mb-8">
            A selection of demos, explainers, launches, and AI-led social content we've produced for SaaS and tech companies.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <a
              href="#portfolio-book-a-call"
              className="font-display font-semibold text-white px-8 py-4 text-base rounded-none shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #FE6B00, #F4A216)" }}
            >
              Book a Call
            </a>
            <a
              href="#demos"
              className="font-display font-semibold text-foreground px-8 py-4 rounded-none border border-border bg-white shadow-sm hover:bg-muted/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Browse Work &rarr;
            </a>
          </div>

          {/* Sub-navigation categories */}
          <div className="flex flex-wrap gap-3 border-t border-b border-[#0a0a0a]/10 py-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="font-body font-bold text-[11px] tracking-wider text-muted-foreground hover:text-primary transition-all duration-200 uppercase border border-transparent hover:border-primary/20 px-4 py-2 hover:bg-orange-50/30"
              >
                {cat.label} &rarr;
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="bg-white border-t border-b border-[#0a0a0a]/5 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-center text-[10px] tracking-[0.2em] font-semibold text-muted-foreground uppercase mb-10">
            TRUSTED BY FORWARD-THINKING SAAS TEAMS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {clientLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="w-full h-16 flex items-center justify-center p-3 bg-white border border-gray-100 hover:border-gray-200 hover:-translate-y-0.5 rounded transition-all duration-300"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={`${
                    logo.size === "sm" ? "max-h-4" : logo.size === "lg" ? "max-h-12" : "max-h-8"
                  } max-w-full object-contain filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grids */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-24">
        
        {/* CATEGORY 1: Demos */}
        <section id="demos" className="scroll-mt-24">
          <div className="flex items-baseline justify-between border-b border-[#0a0a0a]/10 pb-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="font-display font-semibold text-sm text-muted-foreground">01</span>
              <h2 className="text-display-md font-bold text-foreground">Demo Videos</h2>
            </div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              16:9 &bull; Interactive Walks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects
              .filter((p) => p.category === "demo")
              .map((project) => (
                <div key={project.id} className="group flex flex-col bg-white border border-[#0a0a0a]/10 hover:border-[#0a0a0a]/20 transition-all duration-300 overflow-hidden">
                  <YouTubeEmbed videoId={project.youtubeId} title={project.title} />
                  <div className="flex items-center gap-4 p-6 bg-white border-t border-[#0a0a0a]/5">
                    <div className="h-10 w-10 flex items-center justify-center p-1 bg-gray-50 border border-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img src={project.logoPath} alt={project.companyName} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#0A0A0A] leading-tight">
                        {project.companyName}
                      </h3>
                      <p className="font-body text-xs font-medium text-muted-foreground mt-0.5 uppercase tracking-wider">
                        {project.videoType}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* CATEGORY 2: Brand Narrative Videos */}
        <section id="narratives" className="scroll-mt-24">
          <div className="flex items-baseline justify-between border-b border-[#0a0a0a]/10 pb-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="font-display font-semibold text-sm text-muted-foreground">02</span>
              <h2 className="text-display-md font-bold text-foreground">Brand Narrative Videos</h2>
            </div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              16:9 &bull; Storytelling
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects
              .filter((p) => p.category === "narrative")
              .map((project) => (
                <div key={project.id} className="group flex flex-col bg-white border border-[#0a0a0a]/10 hover:border-[#0a0a0a]/20 transition-all duration-300 overflow-hidden">
                  <YouTubeEmbed videoId={project.youtubeId} title={project.title} />
                  <div className="flex items-center gap-4 p-6 bg-white border-t border-[#0a0a0a]/5">
                    <div className="h-10 w-10 flex items-center justify-center p-1 bg-gray-50 border border-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img src={project.logoPath} alt={project.companyName} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#0A0A0A] leading-tight">
                        {project.companyName}
                      </h3>
                      <p className="font-body text-xs font-medium text-muted-foreground mt-0.5 uppercase tracking-wider">
                        {project.videoType}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* CATEGORY 3: Founder + Motion Graphics */}
        <section id="founder-motion" className="scroll-mt-24">
          <div className="flex items-baseline justify-between border-b border-[#0a0a0a]/10 pb-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="font-display font-semibold text-sm text-muted-foreground">03</span>
              <h2 className="text-display-md font-bold text-foreground">Founder + Motion Graphics</h2>
            </div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Founder talent &bull; Motion graphics &bull; Live on X
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Median — X post embed */}
            <div className="w-full">
              <div className="w-full [&_.twitter-tweet]:!w-full [&_.twitter-tweet]:!max-w-full [&_.twitter-tweet]:!m-0 [&>iframe]:!w-full [&>iframe]:!max-w-full">
                <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
                  <a href="https://x.com/albysjourney/status/2048809398076919849"></a>
                </blockquote>
              </div>
              <div className="mt-3 flex items-center gap-2 text-gray-500 text-sm px-2">
                <Eye size={16} />
                <span className="font-semibold">82.5K views</span>
              </div>
            </div>

            {/* 10x — X post embed */}
            <div className="w-full">
              <div className="w-full [&_.twitter-tweet]:!w-full [&_.twitter-tweet]:!max-w-full [&_.twitter-tweet]:!m-0 [&>iframe]:!w-full [&>iframe]:!max-w-full">
                <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
                  <a href="https://x.com/EvanYadegari/status/2053965603447173585"></a>
                </blockquote>
              </div>
              <div className="mt-3 flex items-center gap-2 text-gray-500 text-sm px-2">
                <Eye size={16} />
                <span className="font-semibold">195.5K views</span>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY 4: Explainers */}
        <section id="explainers" className="scroll-mt-24">
          <div className="flex items-baseline justify-between border-b border-[#0a0a0a]/10 pb-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="font-display font-semibold text-sm text-muted-foreground">04</span>
              <h2 className="text-display-md font-bold text-foreground">Explainer Videos</h2>
            </div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              16:9 &bull; Animated Motion
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects
              .filter((p) => p.category === "explainer")
              .map((project) => (
                <div key={project.id} className="group flex flex-col bg-white border border-[#0a0a0a]/10 hover:border-[#0a0a0a]/20 transition-all duration-300 overflow-hidden">
                  <YouTubeEmbed videoId={project.youtubeId} title={project.title} />
                  <div className="flex items-center gap-4 p-5 bg-white border-t border-[#0a0a0a]/5">
                    <div className="h-9 w-9 flex items-center justify-center p-1 bg-gray-50 border border-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img src={project.logoPath} alt={project.companyName} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#0A0A0A] leading-tight">
                        {project.companyName}
                      </h3>
                      <p className="font-body text-[10px] font-semibold text-muted-foreground mt-0.5 uppercase tracking-wider">
                        {project.videoType}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* CATEGORY 5: Launches */}
        <section id="launches" className="scroll-mt-24">
          <div className="flex items-baseline justify-between border-b border-[#0a0a0a]/10 pb-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="font-display font-semibold text-sm text-muted-foreground">05</span>
              <h2 className="text-display-md font-bold text-foreground">Launch Videos</h2>
            </div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              16:9 &bull; Campaigns
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects
              .filter((p) => p.category === "launch")
              .map((project) => (
                <div key={project.id} className="group flex flex-col bg-white border border-[#0a0a0a]/10 hover:border-[#0a0a0a]/20 transition-all duration-300 overflow-hidden">
                  <YouTubeEmbed videoId={project.youtubeId} title={project.title} />
                  <div className="flex items-center gap-4 p-6 bg-white border-t border-[#0a0a0a]/5">
                    <div className="h-10 w-10 flex items-center justify-center p-1 bg-gray-50 border border-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img src={project.logoPath} alt={project.companyName} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#0A0A0A] leading-tight">
                        {project.companyName}
                      </h3>
                      <p className="font-body text-xs font-medium text-muted-foreground mt-0.5 uppercase tracking-wider">
                        {project.videoType}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>


        {/* CATEGORY 6: Featured Showreel */}
        <section id="showreel" className="scroll-mt-24">
          <div className="flex items-baseline justify-between border-b border-[#0a0a0a]/10 pb-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="font-display font-semibold text-sm text-muted-foreground">06</span>
              <h2 className="text-display-md font-bold text-foreground">Featured Showreel</h2>
            </div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Campaign compilation
            </span>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group flex flex-col bg-white border border-[#0a0a0a]/10 rounded overflow-hidden transition-all duration-300">
              <YouTubeEmbed videoId="vf1y7c64ccE" title="Reblues Showreel" />
              <div className="p-8 text-center bg-white border-t border-[#0a0a0a]/5">
                <h3 className="font-display font-bold text-display-sm text-[#0A0A0A] mb-3">
                  Reblues Production Compilation
                </h3>
                <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
                  A high-energy compilation showcasing explaining, demoing, and advertising product adoption features for major global SaaS companies.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Book a Call — Calendly embed */}
      <FooterCTA portfolioId="portfolio-book-a-call" />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-none shadow-lg hover:brightness-110 active:scale-95 hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;
