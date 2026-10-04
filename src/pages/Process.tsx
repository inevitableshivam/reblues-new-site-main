import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, CheckCircle2, ExternalLink, FileText, Film, Layers, Mic } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import ServiceMenu from "@/components/ServiceMenu";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { productionProcess as project, type ProductionFormat } from "@/data/productionProcess";
import { minaScriptShowcase } from "@/data/minaScriptShowcase";

const stages = [
  { id: "scripting", name: "Scripting", icon: FileText },
  { id: "direction", name: "Direction & voice", icon: Mic },
  { id: "storyboard", name: "Storyboard", icon: Layers },
  { id: "production", name: "Production", icon: Film },
  { id: "delivery", name: "Delivery", icon: CheckCircle2 },
];

const Stage = ({ number, title, text, children, id }: { number: number; title: string; text?: string; children: React.ReactNode; id: string }) => (
  <section id={id} className="scroll-mt-8 border-b border-neutral-300 py-16 last:border-b-0 md:py-24">
    <div className="mb-9 md:mb-12">
      <h2 className={`flex items-baseline gap-4 font-body text-3xl leading-tight tracking-tight md:text-[42px] ${number === 1 ? "font-bold text-[#FE6B00]" : "font-semibold"}`}>{title}<span className="bg-gradient-to-t from-[#f4bc94] to-[#fbe1d0] bg-clip-text text-2xl font-medium text-transparent md:text-3xl">{number}</span></h2>
      {text && <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">{text}</p>}
    </div>
    {children}
  </section>
);

const Process = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [format, setFormat] = useState<ProductionFormat>("motion");
  const voicePlayers = useRef<HTMLAudioElement[]>([]);
  const scripts = project.formats[format].scripts;

  useEffect(() => { window.scrollTo(0, 0); document.title = "Our production process | Reblues"; return () => { document.title = "Reblues"; }; }, []);

  return (
    <div className="min-h-screen bg-white font-body text-neutral-950 antialiased">
      <TopHeader /><ServiceMenu />
      <main>
        <section className="border-b border-neutral-300">
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-semibold text-[#FE6B00]">Inside the process</p>
              <h1 className="font-body text-4xl font-medium leading-[1.12] tracking-tight md:text-5xl">From the first idea<br />to the <span className="text-[#FE6B00]">final frame.</span></h1>
              <p className="mx-auto mt-5 max-w-lg text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">See how the story, voice, design and motion come together. Explore the work at each step—and the decisions behind it.</p>
              <a href="#scripting" className="mt-7 inline-flex h-11 items-center gap-3 rounded-[8px] bg-[#FE6B00] px-6 text-sm font-semibold text-white hover:bg-[#e96000]">Explore the process <ArrowDown size={15} /></a>
            </div>
            <div className="mt-14 grid overflow-hidden rounded-[5px] border border-neutral-300 md:grid-cols-5">
              {stages.map((stage, index) => <a key={stage.id} href={`#${stage.id}`} className="group flex items-center gap-4 border-b border-neutral-300 p-5 transition-colors last:border-0 hover:bg-neutral-50 md:block md:border-b-0 md:border-r md:last:border-r-0">
                <div className="flex items-center justify-between"><stage.icon size={22} strokeWidth={1.6} className="text-neutral-700 transition-colors group-hover:text-[#FE6B00]" /><span className="hidden bg-gradient-to-t from-[#f4bc94] to-transparent bg-clip-text font-body text-3xl font-medium leading-none text-transparent transition-all group-hover:from-[#FE6B00] md:block">{index + 1}</span></div>
                <p className="text-sm font-semibold md:mt-6">{stage.name}</p>
              </a>)}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex justify-center border-b border-neutral-300 py-7">
            <div role="group" aria-label="Production format" className="inline-flex gap-1 rounded-[5px] border border-neutral-300 p-1">
              {(["motion", "talking-head"] as const).map(value => <button key={value} type="button" aria-pressed={format === value} onClick={() => setFormat(value)} className={`rounded-[4px] px-4 py-2 text-xs font-semibold transition-colors ${format === value ? "bg-[#FE6B00] text-white" : "text-neutral-600 hover:bg-neutral-100"}`}>{value === "motion" ? "Motion-led" : "Talking head"}</button>)}
            </div>
          </div>
          {format === "talking-head" && <p className="border-b border-neutral-300 py-3 text-xs leading-relaxed text-neutral-500">Talking-head scripts are illustrative. The Mina storyboard and finished films shown later on this page are motion-led work.</p>}

          <Stage number={1} id="scripting" title="Scripting" text="We test different angles and refine the script before production begins.">
            <div className="grid gap-6 lg:grid-cols-3">
              {scripts.map((script, index) => {
                const panel = minaScriptShowcase[index];
                return <article key={`${format}-${script.name}`} className="min-w-0">
                  <div className="flex items-center justify-between gap-3 pb-3"><h3 className="font-body text-base font-semibold">{format === "motion" ? panel.title : script.name.replace(/^0\d \/ /, "")}</h3><span className="text-xs font-medium text-neutral-400">{index + 1} / 3</span></div>
                  <div className="h-[440px] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[5px] border border-neutral-300 bg-neutral-50/40 px-5 py-6 md:h-[520px] md:px-6">
                    {format === "motion" ? <><p className="text-sm leading-relaxed text-neutral-700">{panel.intro}</p><div className="mt-6 space-y-7">{panel.entries.map(entry => <div key={entry.label} className="border-t border-neutral-200 pt-5"><h4 className="font-body text-sm font-semibold text-neutral-950">{entry.label}</h4><p className="mt-1 text-xs leading-relaxed text-[#d65c00]">{entry.context}</p><p className="mt-3 whitespace-pre-line break-words text-sm leading-[1.75] text-neutral-700">{entry.text}</p></div>)}</div></> : <><p className="mb-6 text-xs font-semibold uppercase tracking-wide text-[#FE6B00]">Illustrative talking-head script</p>{[["Opening", script.hook], ["Story", script.body], ["Closing", script.ending]].map(([label, copy]) => <div key={label} className="border-t border-neutral-200 py-5"><h4 className="font-body text-sm font-semibold">{label}</h4><p className="mt-2 break-words text-sm leading-relaxed text-neutral-600">{copy}</p></div>)}</>}
                  </div>
                </article>;
              })}
            </div>
          </Stage>

          <Stage number={2} id="direction" title="Direction & voice" text="Compare the delivery, tone and accent before the storyboard moves forward.">
            <div className="grid gap-5 md:grid-cols-3">
              {project.voices.map((persona, index) => <article key={persona.name} className="flex min-w-0 flex-col rounded-[5px] border border-neutral-300 bg-neutral-50/40 p-6">
                <div className="flex items-center justify-between"><Mic size={20} strokeWidth={1.5} className="text-[#FE6B00]" /><span className="text-xs font-semibold text-neutral-400">{index + 1} / 3</span></div>
                <h3 className="mt-6 font-body text-2xl font-semibold">{persona.name}</h3>
                <p className="mt-1 text-xs font-semibold text-[#d65c00]">{persona.type}</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{persona.description}</p>
                <dl className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-neutral-200 pt-5 text-xs">
                  {[["Age", persona.age], ["Voice", persona.voice], ["Language", persona.language], ...(persona.accent ? [["Accent", persona.accent]] : []), ["Delivery", persona.delivery], ["Best fit", persona.fit]].map(([label, value]) => <div key={label} className="min-w-0"><dt className="text-neutral-400">{label}</dt><dd className="mt-1 font-semibold leading-snug text-neutral-800">{value}</dd></div>)}
                </dl>
                <div className="mt-auto pt-6"><p className="mb-2 text-xs font-semibold text-neutral-500">Listen to {persona.name}</p><audio ref={element => { if (element) voicePlayers.current[index] = element; }} controls preload="metadata" src={persona.audioUrl} aria-label={`${persona.name} voice sample`} onPlay={() => voicePlayers.current.forEach((player, playerIndex) => { if (playerIndex !== index) player.pause(); })} className="h-10 w-full" /></div>
              </article>)}
            </div>
          </Stage>

          <Stage number={3} id="storyboard" title="Storyboard" text="See how the script becomes a scene-by-scene visual plan.">
            <div className="mx-auto max-w-5xl">
              <div className="mb-5 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6"><p className="text-sm font-semibold">Mina AI storyboard</p><a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-[5px] border border-neutral-300 px-4 py-2 text-sm font-semibold hover:border-[#FE6B00] hover:text-[#FE6B00]">Open in Figma <ExternalLink size={14} /></a></div>
              <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-[5px] border border-neutral-300 bg-[#444]" aria-label="Open the full Mina AI storyboard in Figma">
                <img src={project.figmaPreviewUrl} alt="Overview of the complete Mina AI storyboard" className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]" />
              </a>
              <details className="mt-4 rounded-[5px] border border-neutral-300 bg-neutral-50/40">
                <summary className="cursor-pointer px-4 py-3 text-center text-sm font-semibold text-neutral-700 hover:text-[#FE6B00]">View interactive storyboard here</summary>
                <div className="border-t border-neutral-300 p-3">
                  <iframe src={project.figmaEmbedUrl} title="Mina AI storyboard in Figma" loading="lazy" allowFullScreen className="h-[620px] w-full rounded-[5px] bg-white" />
                  <p className="mt-2 text-center text-xs text-neutral-500">If the viewer does not load, use Open in Figma above.</p>
                </div>
              </details>
            </div>
          </Stage>

          <Stage number={4} id="production" title="Animation & production" text="The approved story and scenes become the final motion, voice and sound.">
            <div className="grid gap-7 md:grid-cols-2">{project.videoEmbeds.map(video => <article key={video.sourceUrl} className="min-w-0"><video controls preload="metadata" playsInline src={video.fileUrl} poster={video.posterUrl} className="aspect-video w-full rounded-[5px] border border-neutral-300 bg-neutral-950 object-contain" aria-label={video.title}>Your browser cannot play this video. <a href={video.sourceUrl}>Open it in Drive</a>.</video><div className="mt-4 flex items-center justify-between gap-3"><h3 className="text-sm font-semibold">{video.title}</h3><a href={video.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-neutral-500 hover:text-[#FE6B00]">Open video <ArrowRight size={13} /></a></div></article>)}</div>
          </Stage>

          <Stage number={5} id="delivery" title="Delivery" text="The final step is more than sending one video file.">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { title: "Approved master", text: "The finished film, reviewed and exported at full quality." },
                { title: "Agreed versions", text: "Cutdowns and formats prepared for the placements planned for this project." },
                { title: "Launch guidance", points: ["X and LinkedIn post copy with a clear hook, message and CTA.", "A shortlist of relevant creators, partners and supporters to approach.", "Personal outreach templates that make it easy to ask for a share.", "A simple posting and follow-up plan for launch day."] },
              ].map((item, index) => <div key={item.title} className="rounded-[5px] border border-neutral-300 bg-neutral-50/40 p-6"><div className="flex items-center justify-between"><CheckCircle2 size={20} strokeWidth={1.5} className="text-[#FE6B00]" /><span className="font-body text-xs font-semibold text-neutral-400">{index + 1} / 3</span></div><h3 className="mt-6 font-body text-lg font-semibold">{item.title}</h3>{"points" in item ? <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-neutral-600">{item.points.map(point => <li key={point}>{point}</li>)}</ul> : <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>}</div>)}
            </div>
          </Stage>
        </div>
      </main>
      <Footer onBookCall={() => setBookingOpen(true)} eyebrow="Your story, made clear" headline="Let’s make something worth watching." buttonLabel="Talk about your project" />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default Process;
