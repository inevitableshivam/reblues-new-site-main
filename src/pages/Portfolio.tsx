import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import ServiceMenu from "@/components/ServiceMenu";
import AsciiPortfolioLeft from "@/components/AsciiPortfolioLeft";
import AsciiPortfolioRight from "@/components/AsciiPortfolioRight";
import MobileHeroArtwork from "@/components/MobileHeroArtwork";
import TopHeader from "@/components/TopHeader";

type Category = "demo" | "narrative" | "explainer" | "launch";

type Project = {
  id: string;
  title: string;
  youtubeId: string;
  company: string;
  category: Category;
  logo: string;
};

const projects: Project[] = [
  { id: "1", title: "LeadCRM.io — Product Demo", youtubeId: "VJSUUDlAVBk", company: "LeadCRM.io", category: "demo", logo: "/logos/leadcrm_io.png" },
  { id: "2", title: "Lemmino — Product Demo", youtubeId: "cygElzZGQRg", company: "Lemmino", category: "demo", logo: "/logos/lemmino.png" },
  { id: "10", title: "Arqia — Product Demo", youtubeId: "KJnGpIkucdg", company: "Arqia", category: "demo", logo: "/logos/arqia.png" },
  { id: "11", title: "Opsvara — Product Demo", youtubeId: "oNX-eAd3XgE", company: "Opsvara", category: "demo", logo: "/logos/opsvara.png" },
  { id: "13", title: "Farao — Brand Narrative", youtubeId: "LI63txvflDA", company: "Farao", category: "narrative", logo: "/logos/farao.png" },
  { id: "14", title: "Farao — Brand Narrative", youtubeId: "FhLBXevzRek", company: "Farao", category: "narrative", logo: "/logos/farao.png" },
  { id: "15", title: "Orus — Brand Narrative", youtubeId: "q1t5hu7ZGhc", company: "Orus", category: "narrative", logo: "/logos/orus.png" },
  { id: "3", title: "GenLook — Animated Explainer", youtubeId: "RDSkzWi5Coo", company: "GenLook", category: "explainer", logo: "/logos/genlook.png" },
  { id: "4", title: "BuyFromChina.ca — Animated Explainer", youtubeId: "De5dFbhZf0M", company: "BuyFromChina.ca", category: "explainer", logo: "/logos/buyfromchina_ca.png" },
  { id: "5", title: "Sheen.ai — Animated Explainer", youtubeId: "F2O7FK13qWA", company: "Sheen.ai", category: "explainer", logo: "/logos/sheen_ai.png" },
  { id: "12", title: "LeadCRM.io — Animated Explainer", youtubeId: "IQSPb30-Jac", company: "LeadCRM.io", category: "explainer", logo: "/logos/leadcrm_io.png" },
  { id: "6", title: "Pillir — Product Launch", youtubeId: "CFOEUJICLes", company: "Pillir", category: "launch", logo: "/logos/pillir.png" },
  { id: "7", title: "Osource — Product Launch", youtubeId: "tQOpL-piu70", company: "Osource", category: "launch", logo: "/logos/osource.png" },
  { id: "8", title: "Magical CX — Product Launch", youtubeId: "6NP54JUHgqc", company: "Magical CX", category: "launch", logo: "/logos/magical_cx.png" },
  { id: "9", title: "Pillir — Campaign Video", youtubeId: "cxLNAHH8-K0", company: "Pillir", category: "launch", logo: "/logos/pillir.png" },
];

const categories: { id: Category; label: string }[] = [
  { id: "demo", label: "Demo Videos" },
  { id: "narrative", label: "Brand Narrative Videos" },
  { id: "explainer", label: "Explainer Videos" },
  { id: "launch", label: "Launch Videos" },
];

const VideoPreview = ({ project }: { project: Project }) => {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(`https://i.ytimg.com/vi/${project.youtubeId}/maxresdefault.jpg`);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[5px] bg-neutral-950">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={project.title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${project.title}`} className="group absolute inset-0 h-full w-full">
          <img
            src={thumbnail}
            alt={project.title}
            loading="lazy"
            onError={() => setThumbnail(`https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
          />
          <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[5px] bg-[#FE6B00] text-white transition-transform group-hover:scale-105 md:h-16 md:w-16">
            <Play size={22} fill="currentColor" className="ml-0.5" />
          </span>
        </button>
      )}
    </div>
  );
};

const ProjectItem = ({ project }: { project: Project }) => (
  <article className="min-w-0">
    <VideoPreview project={project} />
    <div className="mt-3 px-0.5">
      <h3 className="font-body text-[13px] font-semibold leading-tight tracking-tight text-neutral-900 md:text-sm">{project.company}</h3>
      <p className="mt-0.5 font-body text-xs font-medium leading-snug text-neutral-500 md:text-[13px]">
        {project.title.split(" — ")[1] ?? project.title}
      </p>
    </div>
  </article>
);

const testimonials = [
  {
    quote: "Good quality work — they completely understood our product and translated it into exceptional creative assets.",
    name: "Saya Mogra",
    role: "Founder, Sheen AI",
    image: "/testimonials/saya mogra.png",
  },
  {
    quote: "The quality of work was outstanding. Their team understood our product deeply and delivered beyond expectations.",
    name: "Vijay Raghavan",
    role: "Director of India Marketing & Operations, Pillir.io",
    image: "/testimonials/vijayraghvan.png",
  },
];

const Portfolio = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scriptId = "twitter-widgets-script";
    const loadEmbeds = () => {
      const twitter = (window as Window & { twttr?: { widgets?: { load: (element?: HTMLElement) => void } } }).twttr;
      twitter?.widgets?.load(document.querySelector("main") ?? undefined);
    };

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existingScript) {
      loadEmbeds();
      existingScript.addEventListener("load", loadEmbeds, { once: true });
      return () => existingScript.removeEventListener("load", loadEmbeds);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = loadEmbeds;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white font-body text-neutral-950 antialiased">
      <TopHeader />
      <ServiceMenu />

      <main>
        <section className="border-b border-neutral-200">
          <div className="relative mx-auto grid min-h-[calc(100svh-100px)] max-w-[1600px] grid-cols-1 sm:min-h-[calc(100svh-108px)] lg:grid-cols-12">
            <span aria-hidden="true" className="absolute left-1/4 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00] lg:block">+</span>
            <span aria-hidden="true" className="absolute left-3/4 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00] lg:block">+</span>
            <span aria-hidden="true" className="absolute bottom-0 left-1/4 z-20 hidden -translate-x-1/2 translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00] lg:block">+</span>
            <span aria-hidden="true" className="absolute bottom-0 left-3/4 z-20 hidden -translate-x-1/2 translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00] lg:block">+</span>
            <div aria-hidden="true" className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 font-body text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-300">
              Scroll <ArrowDown size={12} strokeWidth={1.5} />
            </div>
            <MobileHeroArtwork left={<AsciiPortfolioLeft />} right={<AsciiPortfolioRight />} />
            <div aria-hidden="true" className="relative hidden overflow-hidden border-r border-neutral-200 lg:col-span-3 lg:flex"><AsciiPortfolioLeft /></div>
            <div className="relative z-10 flex items-center justify-center px-6 py-16 text-center lg:col-span-6">
              <div className="flex max-w-xl flex-col items-center">
                <p className="mb-4 text-xs font-medium text-neutral-500">Selected work</p>
                <h1 className="mb-4 font-display text-3xl font-normal leading-[1.14] tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
                  Launch films, product stories and educational videos for software companies.
                </h1>
                <p className="max-w-md font-body text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
                  A focused selection of product demos, explainers, launch films and company stories.
                </p>
                <button onClick={() => setBookingOpen(true)} className="mt-7 inline-flex h-10 w-[160px] items-center justify-center gap-2 rounded-lg bg-[#FE6B00] px-5 text-sm font-medium leading-none text-white transition-colors hover:bg-[#e96000]">Start a project <ArrowUpRight size={15} /></button>
              </div>
            </div>
            <div aria-hidden="true" className="relative hidden overflow-hidden border-l border-neutral-200 lg:col-span-3 lg:flex"><AsciiPortfolioRight /></div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {categories.map((category, index) => {
            const categoryProjects = projects.filter((project) => project.category === category.id);
            return (
              <section key={category.id} className={`py-14 md:py-16 ${index < categories.length - 1 ? "border-b border-neutral-200" : ""}`}>
                <div className="relative mb-7 flex items-center gap-3 border-b border-neutral-200 pb-4">
                  <span className="font-body text-[11px] font-medium text-[#FE6B00]">0{index + 1}</span>
                  <h2 className="font-body text-xl font-semibold tracking-tight md:text-2xl">{category.label}</h2>
                  <span aria-hidden="true" className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00]">+</span>
                  <span aria-hidden="true" className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00]">+</span>
                </div>
                <div className={`grid grid-cols-1 gap-y-9 ${category.id === "narrative" ? "md:grid-cols-3 md:gap-x-7" : "md:grid-cols-2 md:gap-x-8"}`}>
                  {categoryProjects.map((project) => <ProjectItem key={project.id} project={project} />)}
                </div>
              </section>
            );
          })}
        </div>

        <section className="border-t border-neutral-200 py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="relative mb-7 flex items-center gap-3 border-b border-neutral-200 pb-4">
              <span className="font-body text-[11px] font-medium text-[#FE6B00]">05</span>
              <h2 className="font-body text-xl font-semibold tracking-tight md:text-2xl">Founder + Motion Graphics</h2>
              <span aria-hidden="true" className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00]">+</span>
              <span aria-hidden="true" className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00]">+</span>
            </div>
            <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-3 md:gap-x-7">
              {[
                { url: "https://x.com/albysjourney/status/2048809398076919849", company: "Median" },
                { url: "https://x.com/EvanYadegari/status/2053965603447173585", company: "10X" },
                { url: "https://x.com/EvanYadegari/status/2087193758433526027?s=20", company: "10X" },
              ].map((post) => (
                <article key={post.url} className="min-w-0 [&_.twitter-tweet]:!m-0 [&_.twitter-tweet]:!w-full [&_.twitter-tweet]:!max-w-full">
                  <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
                    <a href={post.url} aria-label={`${post.company} founder motion graphics post on X`} />
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50/50 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex items-center gap-3"><span className="h-2 w-2 bg-[#FE6B00]" /><p className="text-xs font-semibold tracking-wide text-neutral-600">What clients say</p></div>
            <div className="grid items-stretch gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="grid grid-rows-[190px_82px] overflow-hidden rounded-[5px] border border-neutral-200 bg-white">
                  <blockquote className="flex items-center px-8 text-lg font-medium leading-relaxed tracking-tight text-neutral-800 md:px-10 md:text-xl">“{testimonial.quote}”</blockquote>
                  <figcaption className="flex h-[82px] items-center gap-4 border-t border-neutral-200 px-8 md:px-10">
                    <img src={testimonial.image} alt="" className="h-11 w-11 shrink-0 rounded-full object-cover grayscale" />
                    <div className="min-w-0"><p className="text-sm font-semibold">{testimonial.name}</p><p className="mt-0.5 truncate text-xs font-medium text-neutral-500">{testimonial.role}</p></div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer onBookCall={() => setBookingOpen(true)} eyebrow="Seen something you like?" headline="Let’s make your next product story clear." buttonLabel="Start a project" />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default Portfolio;
