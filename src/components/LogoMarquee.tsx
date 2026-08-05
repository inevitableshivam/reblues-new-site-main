const clientLogos = [
  { src: "/logos/openfort.png", alt: "Openfort" },
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
  { src: "/logos/median.png", alt: "Median" },
  { src: "/logos/opsvara.png", alt: "Opsvara" },
  { src: "/logos/farao.png", alt: "Farao" },
  { src: "/logos/10x.png", alt: "10x" },
];

const LogoMarquee = () => {
  return (
    <section className="bg-background overflow-hidden pt-4 pb-16 md:pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative">
        <p className="text-left text-[14px] font-semibold text-muted-foreground mb-4">
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
              <div key={i} className="flex-shrink-0 flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="h-6 md:h-8 w-auto object-contain max-w-[120px]" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
