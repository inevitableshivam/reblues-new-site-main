import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import EditorialShell from "@/components/EditorialShell";
import { blogEntries } from "@/content/blog";

export default function Blog() {
  return <EditorialShell title="Blog">
    <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
      <header className="border-b border-neutral-200 pb-8 sm:pb-10">
        <h1 className="font-body text-[36px] font-semibold leading-none tracking-[-0.04em] sm:text-[44px]">Blogs</h1>
      </header>

      <section aria-label="Articles">
        {blogEntries.map((entry) => <Link key={entry.slug} to={`/blog/${entry.slug}`} className="group grid gap-5 border-b border-neutral-200 py-7 transition-colors sm:grid-cols-[160px_minmax(0,1fr)_28px] sm:items-center sm:py-8">
          <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[5px] bg-[#fff3e9] text-[#FE6B00]">
            {entry.cover ? <img src={entry.cover} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /> : <span className="font-body text-4xl font-semibold transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">R.</span>}
          </div>
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-medium text-neutral-500"><span>{entry.category}</span><span className="text-neutral-300">•</span><time dateTime={entry.date}>{entry.date}</time><span className="text-neutral-300">•</span><span>{entry.readingTime}</span></div>
            <h2 className="font-body text-xl font-semibold leading-[1.3] tracking-[-0.025em] sm:text-[23px]">{entry.title}</h2>
            <p className="mt-2 max-w-2xl font-body text-sm leading-6 text-neutral-500">{entry.excerpt}</p>
          </div>
          <ArrowUpRight className="hidden text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FE6B00] sm:block" size={19} />
        </Link>)}
      </section>
    </main>
  </EditorialShell>;
}
