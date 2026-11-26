import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EditorialShell from "@/components/EditorialShell";
import { blogEntries } from "@/content/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const entry = blogEntries.find((item) => item.slug === slug);
  if (!entry) return <EditorialShell title="Article not found"><main className="mx-auto max-w-4xl px-6 py-28"><h1 className="font-body text-4xl font-semibold">This article isn’t here yet.</h1><Link to="/blog" className="mt-8 inline-block text-[#FE6B00]">← Back to the blog</Link></main></EditorialShell>;

  const sections = [...entry.body.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
  const headingId = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
  return <EditorialShell title={entry.title}>
    <main className="mx-auto max-w-[1360px] border-x border-neutral-200 px-5 pb-24 pt-10 sm:px-8 sm:pt-12 lg:px-12">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#FE6B00]"><ArrowLeft size={16} /> All writing</Link>
      <header className="mx-auto max-w-[760px] border-b border-neutral-200 pb-10 pt-12 sm:pb-12 sm:pt-16">
        <div className="mb-5 flex flex-wrap gap-3 text-xs font-medium text-neutral-500"><span className="text-[#FE6B00]">{entry.category}</span><span>•</span><time dateTime={entry.date}>{entry.date}</time><span>•</span><span>{entry.readingTime}</span></div>
        <h1 className="font-body text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-[1.12] tracking-[-.04em]">{entry.title}</h1>
        <p className="mt-5 max-w-2xl font-body text-base leading-7 text-neutral-500 sm:text-[17px] sm:leading-8">{entry.excerpt}</p>
      </header>
      {entry.video ? <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[5px] bg-neutral-950 shadow-sm"><iframe src={entry.video} title={`${entry.title} video`} className="aspect-video w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div> : entry.cover ? <img src={entry.cover} alt="" className="mx-auto mt-10 aspect-video w-full max-w-5xl rounded-[5px] object-cover" /> : null}
      <div className="mx-auto grid max-w-5xl gap-10 pt-12 lg:grid-cols-[180px_minmax(0,680px)] lg:justify-center lg:gap-14">
        <aside className="hidden lg:sticky lg:top-8 lg:block lg:self-start"><p className="mb-4 font-body text-xs font-semibold text-neutral-700">In this article</p><nav className="flex flex-col gap-3">{sections.map((section) => <a key={section} href={`#${headingId(section)}`} className="font-body text-xs leading-5 text-neutral-500 hover:text-[#FE6B00]">{section}</a>)}</nav></aside>
        <article className="min-w-0 font-body text-neutral-700">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => <h2 id={headingId(String(children))} className="mb-5 mt-14 scroll-mt-8 font-body text-[26px] font-semibold leading-[1.25] tracking-[-0.035em] text-neutral-950 first:mt-0 sm:text-[30px]">{children}</h2>,
              h3: ({ children }) => <h3 className="mb-3 mt-9 font-body text-xl font-semibold leading-snug tracking-[-0.02em] text-neutral-950">{children}</h3>,
              p: ({ children }) => <p className="mb-6 font-body text-[16px] leading-[1.85] text-neutral-700 sm:text-[17px]">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold text-neutral-950">{children}</strong>,
              ul: ({ children }) => <ul className="mb-7 ml-5 list-disc space-y-2 font-body text-[16px] leading-7 text-neutral-700 marker:text-[#FE6B00] sm:text-[17px]">{children}</ul>,
              ol: ({ children }) => <ol className="mb-7 ml-5 list-decimal space-y-2 font-body text-[16px] leading-7 text-neutral-700 marker:font-semibold marker:text-[#FE6B00] sm:text-[17px]">{children}</ol>,
              blockquote: ({ children }) => <blockquote className="my-9 border-l-2 border-[#FE6B00] bg-[#fff8f3] px-5 py-4 text-neutral-800 [&>p]:mb-0">{children}</blockquote>,
              a: ({ children, href }) => <a href={href} className="font-medium text-[#d85b00] underline decoration-[#FE6B00]/40 underline-offset-4 hover:decoration-[#FE6B00]">{children}</a>,
              img: ({ src, alt }) => <img src={src} alt={alt || ""} className="my-9 h-auto w-full rounded-[5px]" />,
            }}
          >{entry.body}</ReactMarkdown>
        </article>
      </div>
    </main>
  </EditorialShell>;
}
