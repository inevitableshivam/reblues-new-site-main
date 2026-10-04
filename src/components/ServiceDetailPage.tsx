import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Eye, Play } from "lucide-react";
import AsciiDockingStationLeft from "./AsciiDockingStationLeft";
import AsciiSpaceshipRight from "./AsciiSpaceshipRight";
import AsciiCockpitLeft from "./AsciiCockpitLeft";
import AsciiCockpitRight from "./AsciiCockpitRight";
import LaunchProcessArtwork from "./LaunchProcessArtwork";
import ProductEducationProcessArtwork from "./ProductEducationProcessArtwork";
import BookingModal from "./BookingModal";
import Footer from "./Footer";
import ServiceMenu from "./ServiceMenu";
import TopHeader from "./TopHeader";
import MobileHeroArtwork from "./MobileHeroArtwork";
import AdCampaignArtwork from "./AdCampaignArtwork";

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  accent: string;
  introduction: string;
  processTitle: string;
  steps: { title: string; description: string }[];
  launchArtwork?: boolean;
  productEducationArtwork?: boolean;
  adCampaignArtwork?: boolean;
  ctaEyebrow: string;
  ctaHeadline: string;
  ctaButtonLabel: string;
  featuredLaunchVideos?: { title: string; youtubeId: string }[];
  caseStudies?: { company: string; url: string; videoSrc: string; views: string }[];
  educationOverview?: {
    title: string;
    description: string;
    bestFor: string[];
    journey: string[];
  };
  educationFormats?: {
    label: string;
    title: string;
    description: string;
    format: string;
    bestFor: string;
    bullets: string[];
    audiences?: string[];
  }[];
  educationExamples?: {
    company: string;
    mark: string;
    accent: string;
    pattern: string;
    description: string;
  }[];
  launchFormats?: {
    label: string;
    title: string;
    description: string;
    outcome: string;
    artwork: string;
    pointers: string[];
  }[];
  adCampaignOverview?: {
    title: string;
    description: string;
    formats: {
      label: string;
      title: string;
      description: string;
      deliverables: string[];
    }[];
  };
};

const LaunchVideoPreview = ({ title, youtubeId }: { title: string; youtubeId: string }) => {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[5px] bg-neutral-950">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${title}`} className="group absolute inset-0 h-full w-full">
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            onError={() => setThumbnail(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`)}
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

const ServiceDetailPage = ({ content }: { content: ServicePageContent }) => {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
            {(content.launchArtwork || content.productEducationArtwork || content.adCampaignArtwork) && (
              <MobileHeroArtwork
                left={content.launchArtwork ? <AsciiDockingStationLeft /> : content.productEducationArtwork ? <AsciiCockpitLeft /> : <AdCampaignArtwork side="left" />}
                right={content.launchArtwork ? <AsciiSpaceshipRight /> : content.productEducationArtwork ? <AsciiCockpitRight /> : <AdCampaignArtwork side="right" />}
              />
            )}
            <div className="relative hidden overflow-hidden border-r border-neutral-200 lg:col-span-3 lg:flex">
              {content.launchArtwork ? <AsciiDockingStationLeft /> : content.productEducationArtwork ? <AsciiCockpitLeft /> : content.adCampaignArtwork ? <AdCampaignArtwork side="left" /> : null}
            </div>
            <div className="relative z-10 flex items-center justify-center px-6 py-16 text-center sm:px-10 lg:col-span-6">
              <div className="flex max-w-xl flex-col items-center">
                <p className="mb-4 text-xs font-medium text-neutral-500">{content.eyebrow}</p>
                <h1 className="text-3xl font-normal leading-[1.14] tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
                  {content.title} <span className="text-[#FE6B00]">{content.accent}</span>
                </h1>
                <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{content.introduction}</p>
                <button onClick={() => setBookingOpen(true)} className="mt-7 inline-flex h-10 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-[#FE6B00] px-6 text-sm font-medium leading-none text-white hover:bg-[#e96000]">
                  {content.ctaButtonLabel} <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
            <div className="relative hidden overflow-hidden border-l border-neutral-200 lg:col-span-3 lg:flex">
              {content.launchArtwork ? <AsciiSpaceshipRight /> : content.productEducationArtwork ? <AsciiCockpitRight /> : content.adCampaignArtwork ? <AdCampaignArtwork side="right" /> : null}
            </div>
          </div>
        </section>

        {content.educationOverview && (
          <section className="border-b border-neutral-200 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
              <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
                <div className="max-w-2xl">
                  <p className="mb-4 text-xs font-semibold text-[#FE6B00]">Why product education matters</p>
                  <h2 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">{content.educationOverview.title}</h2>
                  <p className="mt-4 max-w-xl font-body text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{content.educationOverview.description}</p>
                </div>
                <div>
                  <p className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">Best for</p>
                  <ul className="space-y-3">
                    {content.educationOverview.bestFor.map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-neutral-200 pb-3 font-body text-sm font-semibold text-neutral-800">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#FE6B00]" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-[5px] border border-neutral-200 bg-neutral-50/40">
                <div className="grid md:grid-cols-4">
                  {content.educationOverview.journey.map((stage, index) => (
                    <div key={stage} className="relative flex min-h-24 items-center justify-center border-b border-neutral-200 px-5 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                      <span className="font-body text-sm font-semibold text-neutral-800">{stage}</span>
                      {index < content.educationOverview!.journey.length - 1 && <ArrowRight aria-hidden="true" size={14} className="absolute -bottom-2 z-10 bg-white text-[#FE6B00] md:-right-2 md:bottom-auto" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {content.launchFormats && (
          <section className="border-b border-neutral-200 py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
              <div className="mb-8 max-w-3xl md:mb-10">
                <p className="mb-3 text-xs font-semibold text-[#FE6B00]">Two launch moments</p>
                <h2 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">Two ways to turn a launch into momentum.</h2>
                <p className="mt-3 max-w-2xl font-body text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">Introduce what is new—or show what a company milestone makes possible.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {content.launchFormats.map((format, index) => (
                  <article key={format.title} className="overflow-hidden rounded-[5px] border border-neutral-200 bg-white">
                    <div className="relative h-[280px] overflow-hidden border-b border-neutral-200 bg-neutral-50/40 sm:h-[340px]">
                      <pre aria-hidden="true" className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 whitespace-pre font-mono text-[1.08px] leading-[1.28px] tracking-[-0.02em] text-neutral-600/45 sm:text-[1.32px] sm:leading-[1.6px]">{format.artwork}</pre>
                    </div>
                    <div className="p-6 md:p-7">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FE6B00]">0{index + 1} · {format.label}</span>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{format.title}</h3>
                      <p className="mt-2 max-w-lg text-sm font-medium leading-relaxed text-neutral-500">{format.description}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {format.pointers.map((pointer) => (
                          <li key={pointer} className="flex items-start gap-2 text-xs font-semibold leading-relaxed text-neutral-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FE6B00]" />{pointer}</li>
                        ))}
                      </ul>
                      <dl className="mt-5 border-t border-neutral-200">
                        <div className="grid grid-cols-[68px_1fr] gap-4 pt-4 text-sm"><dt className="text-neutral-400">Outcome</dt><dd className="font-semibold text-neutral-800">{format.outcome}</dd></div>
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {content.adCampaignOverview && (
          <section className="border-b border-neutral-200 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
              <div className="mb-10 max-w-3xl md:mb-12">
                <p className="mb-3 text-xs font-semibold text-[#FE6B00]">Creative built to test</p>
                <h2 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">{content.adCampaignOverview.title}</h2>
                <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{content.adCampaignOverview.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {content.adCampaignOverview.formats.map((format, index) => (
                  <article key={format.title} className="overflow-hidden rounded-[5px] border border-neutral-200 bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-neutral-200 bg-neutral-50/60 p-6">
                      <div className={`h-full rounded-[5px] border border-neutral-200 bg-white p-5 shadow-sm ${index === 1 ? "rotate-2" : index === 2 ? "-rotate-2" : ""}`}>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#FE6B00]">Ad 0{index + 1}</span>
                        <p className="mt-5 text-xl font-semibold leading-tight tracking-tight">{index === 0 ? "Show the workflow." : index === 1 ? "Lead with the pain." : "Turn one idea into variants."}</p>
                        <div className="mt-7 h-14 rounded-[4px] bg-neutral-900 p-3"><span className="block h-1.5 w-2/3 rounded-full bg-white/70" /><span className="mt-2 block h-1.5 w-1/2 rounded-full bg-white/25" /></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#FE6B00]">{format.label}</span>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight">{format.title}</h3>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500">{format.description}</p>
                      <ul className="mt-5 space-y-2.5">{format.deliverables.map((item) => <li key={item} className="flex items-center gap-2 text-xs font-semibold text-neutral-600"><span className="h-1.5 w-1.5 bg-[#FE6B00]" />{item}</li>)}</ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {content.educationFormats && (
          <section className="border-b border-neutral-200 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
              <div className="mb-10 max-w-3xl md:mb-12">
                <p className="mb-3 text-xs font-semibold text-[#FE6B00]">Two education systems</p>
                <h2 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">
                  Teach the whole product. Then show every audience what to do with it.
                </h2>
                <p className="mt-4 max-w-2xl font-body text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
                  Some users need a clear path through the product. Others need to see how it solves the specific problems they own. We build for both.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {content.educationFormats.map((format, index) => (
                  <article key={format.title} className="overflow-hidden rounded-[5px] border border-neutral-200 bg-white">
                    <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden border-b border-neutral-200 bg-neutral-50/40 p-7">
                      {index === 0 ? (
                        <div className="w-full max-w-[340px] space-y-3">
                          {["Start here", "Core workflows", "Advanced features", "Team rollout"].map((lesson, lessonIndex) => (
                            <div key={lesson} className="flex h-11 items-center gap-4 rounded-[5px] border border-neutral-200 bg-white px-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FE6B00]/10 text-[10px] font-semibold text-[#FE6B00]">{lessonIndex + 1}</span>
                              <span className="font-body text-xs font-semibold text-neutral-700">{lesson}</span>
                              <span className="ml-auto h-1.5 w-12 rounded-full bg-neutral-100"><span className="block h-full rounded-full bg-[#FE6B00]" style={{ width: `${82 - lessonIndex * 14}%` }} /></span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex w-full max-w-[360px] items-center justify-center gap-4 sm:gap-6">
                          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[5px] border border-neutral-300 bg-white text-center font-body text-xs font-semibold text-neutral-900 shadow-sm">Your<br />product</div>
                          <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} className="shrink-0 text-[#FE6B00]" />
                          <div className="grid flex-1 gap-2.5">
                            {(format.audiences ?? []).map((audience) => (
                              <span key={audience} className="rounded-[5px] border border-neutral-200 bg-white px-3 py-2 text-center font-body text-[11px] font-semibold text-neutral-600 shadow-sm">{audience}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-7 md:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FE6B00]">0{index + 1} · {format.label}</span>
                      </div>
                      <h3 className="mt-5 font-body text-2xl font-semibold tracking-tight text-neutral-900">{format.title}</h3>
                      <p className="mt-3 font-body text-sm font-medium leading-relaxed text-neutral-500">{format.description}</p>
                      <dl className="mt-7 divide-y divide-neutral-200 border-y border-neutral-200">
                        <div className="grid grid-cols-[88px_1fr] gap-4 py-3 text-sm"><dt className="font-medium text-neutral-400">Format</dt><dd className="font-semibold text-neutral-800">{format.format}</dd></div>
                        <div className="grid grid-cols-[88px_1fr] gap-4 py-3 text-sm"><dt className="font-medium text-neutral-400">Best for</dt><dd className="font-semibold text-neutral-800">{format.bestFor}</dd></div>
                      </dl>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {format.bullets.map((item) => <li key={item} className="flex items-start gap-2.5 font-body text-xs font-semibold leading-relaxed text-neutral-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FE6B00]" />{item}</li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="mb-9 max-w-2xl">
              <p className="mb-3 text-xs font-semibold text-[#FE6B00]">How it works</p>
              <h2 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">{content.processTitle}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {content.steps.map((step, index) => (
                <article key={step.title} className={`relative overflow-hidden rounded-[5px] border border-neutral-200 p-7 md:p-8 ${content.launchArtwork || content.productEducationArtwork ? "min-h-[510px]" : "min-h-52"}`}>
                  <div className={content.launchArtwork || content.productEducationArtwork ? "flex h-full flex-col gap-5" : ""}>
                    {content.launchArtwork ? <LaunchProcessArtwork index={index} /> : content.productEducationArtwork ? <ProductEducationProcessArtwork index={index} /> : null}
                    <div>
                      <span className="text-xs font-semibold text-[#FE6B00]">0{index + 1}</span>
                      <h3 className="mt-8 text-xl font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-neutral-500">{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {content.educationExamples && (
          <section className="border-t border-neutral-200 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
              <div className="mb-9 max-w-2xl">
                <p className="mb-3 text-xs font-semibold text-[#FE6B00]">Patterns worth studying</p>
                <h2 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">Companies making user education part of the product.</h2>
                <p className="mt-4 max-w-xl font-body text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">Different products, different audiences, and one shared idea: teach users around the outcome they came for.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {content.educationExamples.map((example) => (
                  <article key={example.company} className="overflow-hidden rounded-[5px] border border-neutral-200 bg-white">
                    <div className="flex aspect-[16/9] items-center justify-center border-b border-neutral-200 bg-neutral-50/50 p-8">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-[5px] text-sm font-bold text-white" style={{ backgroundColor: example.accent }}>{example.mark}</span>
                        <span className="font-body text-xl font-semibold tracking-tight text-neutral-900">{example.company}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-[#FE6B00]">{example.pattern}</p>
                      <p className="mt-3 font-body text-sm font-medium leading-relaxed text-neutral-500">{example.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {(content.featuredLaunchVideos || content.caseStudies) && (
          <section className="border-t border-neutral-200 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
              <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-xs font-semibold text-[#FE6B00]">Selected launch work</p>
                <h2 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">Launch work, without the clutter.</h2>
              </div>
              {content.featuredLaunchVideos && (
                <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                  {content.featuredLaunchVideos.map((video) => (
                    <article key={video.youtubeId} className="min-w-0">
                      <LaunchVideoPreview title={video.title} youtubeId={video.youtubeId} />
                      <h3 className="mt-3 text-sm font-semibold text-neutral-900">{video.title}</h3>
                    </article>
                  ))}
                </div>
              )}
              {content.caseStudies && (
                <div className="mt-12 border-t border-neutral-200 pt-8">
                  <div className="mb-5 flex items-center gap-2 text-neutral-700"><Eye size={17} className="text-[#FE6B00]" /><p className="text-sm font-semibold">Launches on X</p></div>
                  <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-3">
                    {content.caseStudies.map((study) => (
                      <article key={study.url} className="min-w-0">
                        <video src={study.videoSrc} controls playsInline preload="metadata" aria-label={`${study.company} launch video`} className="aspect-video w-full rounded-[5px] bg-neutral-950 object-cover" />
                        <div className="mt-3 flex items-center justify-between gap-4 px-0.5 font-body">
                          <h3 className="text-sm font-semibold text-neutral-900">{study.company}</h3>
                          <a href={study.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-base font-bold tracking-tight text-neutral-900 transition-colors hover:text-[#FE6B00]"><Eye size={16} className="text-[#FE6B00]" />{study.views}</a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

      </main>

      <Footer onBookCall={() => setBookingOpen(true)} eyebrow={content.ctaEyebrow} headline={content.ctaHeadline} buttonLabel={content.ctaButtonLabel} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default ServiceDetailPage;
