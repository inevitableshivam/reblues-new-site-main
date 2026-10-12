import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Eye, Film, Megaphone, MessageCircle, MoveUpRight, Play, Users } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import ServiceMenu from "@/components/ServiceMenu";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const orange = "#FE6B00";

const formats = [
  {
    number: "01",
    name: "Motion graphics",
    line: "Make the new chapter visible.",
    description: "A designed story can turn a complex product, a big ambition and the round behind it into one clear film—without needing a camera shoot.",
    use: "For an idea or product best explained visually.",
  },
  {
    number: "02",
    name: "Cinematic",
    line: "Make the moment feel as big as it is.",
    description: "Footage, sound and a strong narrative can show the people, customers and world your company is building for.",
    use: "For a mission that benefits from human scale and atmosphere.",
  },
  {
    number: "03",
    name: "Talking head",
    line: "Let the founder say what comes next.",
    description: "A direct-to-camera story, shaped by a sharp script and thoughtful edit. We can work from footage you provide; filming is planned separately if needed.",
    use: "For an announcement that should feel personal and direct.",
  },
];

const launchWork = [
  { company: "Median", views: "83.1K", video: "/videos/median-launch.mp4", post: "https://x.com/albysjourney/status/2048809398076919849" },
  { company: "10X", views: "198.4K", video: "/videos/10x-launch.mp4", post: "https://x.com/EvanYadegari/status/2053965603447173585" },
  { company: "10X Web", views: "106.3K", video: "/videos/10x-web-launch.mp4", post: "https://x.com/EvanYadegari/status/2087193758433526027" },
];

function FormatArtwork({ type }: { type: number }) {
  if (type === 0) return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-[#f6f3ef] p-6" aria-hidden="true">
      <span className="absolute left-5 top-5 font-mono text-[10px] text-neutral-400">FRAME 01 / MOTION</span>
      <div className="relative w-full max-w-[220px] rounded-[5px] border border-neutral-300 bg-white px-5 py-6 shadow-[8px_8px_0_#e9e3dd]">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">The next chapter</span>
        <div className="mt-3 font-body text-4xl font-semibold tracking-tight text-[#FE6B00]">$12M</div>
        <div className="mt-3 h-[3px] w-full bg-neutral-200"><div className="h-full w-3/4 bg-[#FE6B00]" /></div>
        <div className="mt-3 flex gap-1.5"><i className="h-2 w-10 bg-neutral-200" /><i className="h-2 w-6 bg-neutral-200" /><i className="h-2 w-12 bg-neutral-200" /></div>
      </div>
    </div>
  );
  if (type === 1) return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#242321] p-6 text-white" aria-hidden="true">
      <span className="absolute left-5 top-5 font-mono text-[10px] text-white/45">FRAME 02 / CINEMATIC</span>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#fe6b00]/35 to-transparent" />
      <div className="relative flex w-full max-w-[270px] flex-col items-center justify-center border-y border-white/45 py-10 text-center">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70"><Play size={13} fill="currentColor" /></div>
        <span className="font-body text-xl font-medium leading-tight">Built for what<br />comes next.</span>
        <span className="mt-3 font-mono text-[10px] tracking-widest text-white/55">NORTHSTAR / 2026</span>
      </div>
    </div>
  );
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#eeeae5] p-6" aria-hidden="true">
      <span className="absolute left-5 top-5 font-mono text-[10px] text-neutral-400">FRAME 03 / FOUNDER</span>
      <div className="relative flex h-[145px] w-[245px] items-end overflow-hidden rounded-[4px] bg-[#c7bcb1]">
        <div className="absolute bottom-[-54px] left-1/2 h-40 w-32 -translate-x-1/2 rounded-t-[50%] bg-[#35342f]" />
        <div className="absolute left-1/2 top-9 h-14 w-12 -translate-x-1/2 rounded-[45%] bg-[#806f61]" />
        <div className="absolute inset-x-0 bottom-0 bg-black/65 px-3 py-2 font-body text-[11px] font-semibold text-white">“Here’s what this makes possible.”</div>
      </div>
    </div>
  );
}

const FundingAnnouncement = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Funding announcement films | Reblues";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    robots.dataset.rebluesFundingPage = "true";
    document.head.appendChild(robots);
    return () => {
      robots.remove();
      document.title = "Reblues";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-body text-neutral-950 antialiased">
      <TopHeader />
      <ServiceMenu />
      <main>
        <section className="border-b border-neutral-200">
          <div className="mx-auto flex min-h-[620px] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8 md:min-h-[690px]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FE6B00]">For the round you’re about to announce</p>
            <h1 className="mt-7 max-w-[920px] font-body text-[clamp(2.6rem,6.4vw,5.8rem)] font-medium leading-[1.08] tracking-[-0.065em]">You raised. <span className="text-[#FE6B00]">Now give people a reason to care.</span></h1>
            <p className="mt-8 max-w-[650px] text-base font-medium leading-relaxed text-neutral-600 sm:text-lg">The amount gets attention for a moment. The story of what you’re building can carry the announcement further. We help shape that story into a film—and prepare the launch around it.</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => setBookingOpen(true)} className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-[#FE6B00] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#e96000]">Talk about your announcement <ArrowUpRight size={16} /></button>
              <a href="#example" className="inline-flex h-11 items-center gap-2 rounded-[8px] border border-neutral-300 px-5 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-950">See an example <ArrowDown size={16} /></a>
            </div>
            <p className="mt-5 text-xs text-neutral-400">Planning a funding announcement? We can start before the public date.</p>
          </div>
        </section>

        <section className="border-b border-neutral-200 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
            <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FE6B00]">The story first</p><h2 className="mt-4 max-w-md font-body text-3xl font-semibold leading-[1.14] tracking-tight sm:text-4xl">A funding round is a milestone. What it enables is the story.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Who needs to hear it?", "Customers, candidates, partners, investors—or a very specific slice of the market."],
                ["Why does it matter now?", "The problem you are solving and the proof that this team can solve it."],
                ["What changes next?", "The product, reach or capability this funding allows you to build."],
                ["What should they do?", "A clear next step beyond liking an announcement post."],
              ].map(([title, text], index) => <div key={title} className="rounded-[5px] border border-neutral-200 p-5 sm:p-6"><span className="font-mono text-xs text-[#FE6B00]">0{index + 1}</span><h3 className="mt-4 font-body text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-neutral-500">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="example" className="scroll-mt-10 border-b border-neutral-200 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FE6B00]">An illustrative announcement</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4"><h2 className="max-w-2xl font-body text-3xl font-semibold leading-[1.14] tracking-tight sm:text-4xl">One company. One milestone. Three ways to tell the story.</h2><p className="max-w-xs text-xs leading-relaxed text-neutral-400">Northstar and its round are fictional. The formats show possible creative directions, not finished client work.</p></div>

            <div className="mx-auto mt-12 max-w-[440px] rounded-[5px] border border-[#FE6B00]/50 bg-[#fff7f0] p-6 text-center shadow-[0_0_0_4px_#fff7f0]">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#ce5700]">The announcement brief</p>
              <p className="mt-3 font-body text-2xl font-semibold tracking-tight">Northstar raises <span className="text-[#FE6B00]">$12M</span></p>
              <p className="mt-1 text-sm text-neutral-600">to make critical work easier for growing teams.</p>
            </div>
            <div className="mx-auto hidden h-9 w-px bg-neutral-300 md:block" aria-hidden="true" />
            <div className="mx-auto hidden h-px w-[calc(66.666%-3rem)] bg-neutral-300 md:block" aria-hidden="true" />
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {formats.map((format, index) => <article key={format.name} className="relative min-w-0 overflow-hidden rounded-[5px] border border-neutral-200 bg-white md:before:absolute md:before:-top-5 md:before:left-1/2 md:before:h-5 md:before:w-px md:before:bg-neutral-300">
                <div className="h-[225px] border-b border-neutral-200"><FormatArtwork type={index} /></div>
                <div className="p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#FE6B00]">{format.number} / FORMAT</span><Film size={17} strokeWidth={1.5} className="text-neutral-400" /></div><h3 className="mt-6 font-body text-xl font-semibold tracking-tight">{format.name}</h3><p className="mt-2 text-sm font-semibold text-neutral-800">{format.line}</p><p className="mt-3 text-sm leading-relaxed text-neutral-500">{format.description}</p><p className="mt-6 border-t border-neutral-200 pt-4 text-xs leading-relaxed text-neutral-500"><span className="font-semibold text-neutral-800">Best when </span>{format.use}</p></div>
              </article>)}
            </div>
            <p className="mt-8 text-center text-sm text-neutral-500">The format follows the story—not the other way around. <a href="/process" className="font-semibold text-[#d65c00] underline underline-offset-4 hover:text-[#FE6B00]">See how we make the film <ArrowRight className="inline" size={14} /></a></p>
          </div>
        </section>

        <section className="border-b border-neutral-200 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FE6B00]">The launch around the film</p><h2 className="mt-4 font-body text-3xl font-semibold leading-[1.14] tracking-tight sm:text-4xl">The video is the centre. The people around it create the reach.</h2><p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">Before launch day, we help map the people who already have a reason to care—then prepare the message each of them can share in their own voice.</p></div>
            <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-6">
              <div className="rounded-[5px] border border-neutral-200 p-6"><div className="flex items-center gap-2 text-[#FE6B00]"><Users size={18} /><span className="font-mono text-[11px] uppercase tracking-[0.12em]">Before launch</span></div><h3 className="mt-5 font-body text-xl font-semibold">Build the right circle.</h3><p className="mt-3 text-sm leading-relaxed text-neutral-500">A considered list—not a mass blast. People who know the company, care about the problem or speak to the audience you want to reach.</p><div className="mt-6 flex flex-wrap gap-2">{["Investors", "Customers", "Team", "Founder network", "Relevant creators"].map(item => <span key={item} className="rounded-[4px] border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700">{item}</span>)}</div></div>
              <div className="relative rounded-[5px] border border-[#FE6B00]/50 bg-[#fff7f0] p-6"><div className="flex items-center justify-between"><span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#ce5700]">Launch day / founder post</span><Megaphone size={18} className="text-[#FE6B00]" /></div><div className="mt-6 rounded-[5px] border border-neutral-200 bg-white p-5 shadow-sm"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-neutral-950 text-sm font-bold text-white">N</div><div><p className="text-sm font-semibold">Northstar</p><p className="text-xs text-neutral-400">Illustrative X post</p></div></div><p className="mt-5 text-sm leading-relaxed text-neutral-800">Today we raised $12M. But this announcement is about what we can build next: simpler, more dependable work for the teams who keep everything moving.</p><div className="mt-5 flex aspect-video items-center justify-center rounded-[4px] bg-[#292723] text-white"><div className="text-center"><Play className="mx-auto mb-3" size={21} fill="currentColor" /><span className="text-xs text-white/70">The announcement film</span></div></div><p className="mt-4 text-xs font-medium text-neutral-500">One clear hook · one film · one useful next step</p></div></div>
              <div className="rounded-[5px] border border-neutral-200 p-6"><div className="flex items-center gap-2 text-[#FE6B00]"><MessageCircle size={18} /><span className="font-mono text-[11px] uppercase tracking-[0.12em]">Around the post</span></div><h3 className="mt-5 font-body text-xl font-semibold">Make sharing easy.</h3><p className="mt-3 text-sm leading-relaxed text-neutral-500">We help draft personal outreach and suggested quote-post angles. Each person can adapt the words; nobody is asked to copy-paste a generic endorsement.</p><div className="mt-6 space-y-3"><div className="rounded-[4px] bg-neutral-50 p-3 text-xs leading-relaxed text-neutral-600"><span className="font-semibold text-neutral-900">Investor angle</span><br />Why this team—and why now?</div><div className="rounded-[4px] bg-neutral-50 p-3 text-xs leading-relaxed text-neutral-600"><span className="font-semibold text-neutral-900">Customer angle</span><br />The problem they’re seeing solved.</div><div className="rounded-[4px] bg-neutral-50 p-3 text-xs leading-relaxed text-neutral-600"><span className="font-semibold text-neutral-900">Team angle</span><br />The next chapter they’re helping build.</div></div></div>
            </div>
            <div className="mt-6 grid gap-4 rounded-[5px] border border-neutral-200 bg-neutral-50/70 p-6 sm:grid-cols-3"><p className="text-sm font-semibold">What we prepare together</p><p className="text-sm text-neutral-600">Founder post copy and a clear CTA</p><p className="text-sm text-neutral-600">A tailored list, outreach notes and posting rhythm</p></div>
            <p className="mt-5 text-xs leading-relaxed text-neutral-400">Illustration only. Reposts are voluntary, and no view count or viral outcome is guaranteed.</p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FE6B00]">Proof of launch work</p><h2 className="mt-4 font-body text-3xl font-semibold leading-[1.14] tracking-tight sm:text-4xl">Films we’ve helped put into the world.</h2></div><p className="max-w-sm text-xs leading-relaxed text-neutral-500">These are previous X launches, not funding-announcement projects. View counts are snapshots from the existing portfolio and may change.</p></div>
            <div className="mt-10 grid gap-7 md:grid-cols-3">{launchWork.map(item => <article key={item.post} className="min-w-0"><video src={item.video} controls playsInline preload="metadata" aria-label={`${item.company} launch video`} className="aspect-video w-full rounded-[5px] bg-neutral-900 object-cover" /><div className="mt-3 flex items-center justify-between gap-2"><h3 className="text-sm font-semibold">{item.company}</h3><a href={item.post} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-neutral-800 hover:text-[#FE6B00]"><Eye size={15} color={orange} />{item.views} views <MoveUpRight size={13} /></a></div></article>)}</div>
          </div>
        </section>
      </main>
      <Footer onBookCall={() => setBookingOpen(true)} eyebrow="The round is closed. The story is next." headline="Make the announcement mean something." buttonLabel="Plan the announcement" />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default FundingAnnouncement;
