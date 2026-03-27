const clientLogos = [
  "/logos/Frame 2147258219 1.png",
  "/logos/Frame 2147258220 1.png",
  "/logos/Frame 2147258221 1.png",
  "/logos/Frame 2147258222 1.png",
  "/logos/Frame 2147258224 1.png",
  "/logos/Frame 2147258225 1.png",
  "/logos/Frame 2147258226 1.png",
  "/logos/Frame 2147258227 1.png",
  "/logos/Frame 2147258228 1.png",
  "/logos/Frame 2147258230 1.png",
  "/logos/Frame 2147258231 1.png",
  "/logos/Frame 2147258232 1.png",
  "/logos/White Alt 1.png",
  "/logos/image 2169 1.png"
];

const LogoMarquee = () => {
  return (
    <section className="bg-background overflow-hidden pt-0 pb-32 md:pb-[25vh] lg:pb-[35vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative">
        <p className="text-left text-[14px] font-semibold text-muted-foreground mb-8">
          Trusted by 32+ PLG-focused SaaS companies
        </p>
        
        <div className="relative flex overflow-hidden w-full max-w-full rounded-xl">
          <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          <div
            className="flex flex-nowrap items-center gap-12 md:gap-20 hover:[animation-play-state:paused] animate-marquee"
            style={{ width: "fit-content" }}
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0">
                <img src={logo} alt="Client Logo" className="h-6 md:h-8 w-auto object-contain max-w-[120px]" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
