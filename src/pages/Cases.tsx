import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import CasePdfViewer from "@/components/CasePdfViewer";
import TopHeader from "@/components/TopHeader";
import ServiceMenu from "@/components/ServiceMenu";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    company: "Pillir",
    title: "6 videos for Pillir's product library.",
    cover: "/cases/pillir-case-study-cover.jpg",
    pdf: "/cases/pillir-case-study.pdf",
    logo: "/logos/pillir.png",
    tags: ["Product education", "Workflow tutorials", "Launch film"],
  },
  {
    company: "10x",
    title: "Launching 10x. 791K views on X.",
    cover: "/cases/10x-case-study-cover.jpg",
    pdf: "/cases/10x-case-study.pdf",
    logo: "/logos/10x.png",
    tags: ["Launch films", "Campaign strategy", "Social rollout"],
  },
  {
    company: "Mina AI",
    title: "Building Mina AI’s brand in two weeks.",
    cover: "/cases/mina-ai-case-study-cover.jpg",
    pdf: "/cases/mina-ai-case-study.pdf",
    logo: "/cases/mina-ai-logo.png",
    tags: ["Brand identity", "Launch film", "Social cutdowns", "Print"],
  },
  {
    company: "Genlook",
    title: "120+ assets. One brand that sells.",
    cover: "/cases/genlook-case-study-cover.jpg",
    pdf: "/cases/genlook-case-study.pdf",
    logo: "/logos/genlook.png",
    tags: ["Brand identity", "Website film", "Ad variations", "Social content"],
  },
] as const;

type CaseStudy = (typeof caseStudies)[number];

const Cases = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case studies | Reblues";
    return () => { document.title = "Reblues"; };
  }, []);

  useEffect(() => {
    if (!selectedStudy) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedStudy]);

  return (
    <div className="min-h-screen bg-white font-body text-neutral-950 antialiased">
      <TopHeader />
      <ServiceMenu />

      <main className="mx-auto max-w-5xl px-5 py-9 sm:px-8 sm:py-14 lg:py-16">
        <h1 className="sr-only">Reblues case studies</h1>
        <div className="space-y-5 sm:space-y-6">
          {caseStudies.map((study) => (
            <button
              key={study.company}
              type="button"
              onClick={() => setSelectedStudy(study)}
              aria-haspopup="dialog"
              aria-label={`View ${study.company} case study`}
              className="group grid w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 text-left transition-colors duration-300 hover:border-[#FE6B00]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE6B00] md:grid-cols-[minmax(0,1.08fr)_minmax(290px,0.92fr)]"
            >
              <div className="aspect-video w-full self-center overflow-hidden bg-neutral-100">
                <img src={study.cover} alt={`${study.company} case study artwork`} className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.012]" />
              </div>

              <div className="flex min-h-[205px] flex-col justify-between gap-5 border-t border-neutral-200 p-5 sm:p-7 md:min-h-0 md:border-l md:border-t-0 lg:p-8">
                <img src={study.logo} alt={`${study.company} logo`} className={`h-auto object-contain ${study.company === "10x" ? "w-[82px]" : study.company === "Genlook" ? "w-[104px]" : "w-[115px]"}`} />
                <div>
                  <h2 className="max-w-md font-body text-[24px] font-semibold leading-[1.18] tracking-[-0.035em] sm:text-[27px] lg:text-[30px]">{study.title}</h2>
                  <div className="mt-5 flex flex-wrap gap-1.5" aria-label={`Work for ${study.company}`}>
                    {study.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-[#FE6B00]/25 bg-[#fff8f3] px-2.5 py-1 text-[10px] font-semibold leading-none text-[#b64c00]">
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#FE6B00]" />{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      <Footer />

      {selectedStudy && (
        <dialog
          ref={dialogRef}
          onClose={() => setSelectedStudy(null)}
          onClick={(event) => { if (event.target === event.currentTarget) setSelectedStudy(null); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") dialogRef.current?.querySelector<HTMLButtonElement>('button[aria-label="Previous page"]')?.click();
            if (event.key === "ArrowRight") dialogRef.current?.querySelector<HTMLButtonElement>('button[aria-label="Next page"]')?.click();
          }}
          aria-label={`${selectedStudy.company} case study`}
          className="fixed inset-0 m-auto flex h-[min(94dvh,1000px)] w-[min(96vw,1600px)] max-w-none flex-col overflow-hidden rounded-xl border border-neutral-300 bg-[#e9e9e9] p-0 shadow-2xl backdrop:bg-neutral-950/80 max-sm:h-dvh max-sm:w-screen max-sm:rounded-none"
        >
          <div className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-neutral-200 bg-white px-4 sm:px-6">
            <p className="truncate text-sm font-semibold text-neutral-900">{selectedStudy.company} <span className="font-normal text-neutral-500">/ Case study</span></p>
            <button type="button" onClick={() => setSelectedStudy(null)} aria-label="Close case study" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FE6B00]">
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>
          <CasePdfViewer key={selectedStudy.company} study={selectedStudy} />
        </dialog>
      )}
    </div>
  );
};

export default Cases;
