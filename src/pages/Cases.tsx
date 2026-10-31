import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import TopHeader from "@/components/TopHeader";
import ServiceMenu from "@/components/ServiceMenu";
import Footer from "@/components/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const caseStudies = [
  {
    company: "Pillir",
    title: "Four SAP workflows. One prompt each.",
    cover: "/cases/pillir-case-study-cover.jpg",
    pdf: "/cases/pillir-case-study.pdf",
    logo: "/logos/pillir.png",
    tags: ["Product education", "ICP tutorial library", "Enterprise AI"],
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

const CasePdfViewer = ({ study }: { study: CaseStudy }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [pageWidth, setPageWidth] = useState(900);
  const [zoomed, setZoomed] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const lastWheelChange = useRef(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateWidth = () => {
      const { width, height } = stage.getBoundingClientRect();
      const styles = window.getComputedStyle(stage);
      const availableWidth = width - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      const availableHeight = height - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
      setPageWidth(Math.max(220, Math.floor(Math.min(availableWidth, availableHeight * 16 / 9, 1440))));
    };
    const observer = new ResizeObserver(updateWidth);
    observer.observe(stage);
    updateWidth();
    return () => observer.disconnect();
  }, []);

  const turnPage = useCallback((direction: number) => {
    setPageNumber((current) => Math.max(1, Math.min(numPages, current + direction)));
  }, [numPages]);

  useEffect(() => {
    stageRef.current?.scrollTo({ left: 0, top: 0 });
  }, [pageNumber]);

  return (
    <>
      <div
        ref={stageRef}
        className={`relative flex min-h-0 flex-1 items-center bg-[#e9e9e9] px-4 py-3 sm:px-12 sm:py-5 ${zoomed ? "justify-start overflow-auto" : "justify-center overflow-hidden"}`}
        onTouchStart={(event) => { if (!zoomed) touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
        onTouchEnd={(event) => {
          if (!touchStart.current) return;
          const deltaX = event.changedTouches[0].clientX - touchStart.current.x;
          const deltaY = event.changedTouches[0].clientY - touchStart.current.y;
          if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) turnPage(deltaX < 0 ? 1 : -1);
          touchStart.current = null;
        }}
        onWheel={(event) => {
          if (zoomed) return;
          if (Math.abs(event.deltaX) < 55 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
          if (Date.now() - lastWheelChange.current < 450) return;
          lastWheelChange.current = Date.now();
          turnPage(event.deltaX > 0 ? 1 : -1);
        }}
      >
        <Document
          file={study.pdf}
          onLoadSuccess={({ numPages: total }) => { setNumPages(total); setPageNumber(1); }}
          externalLinkTarget="_blank"
          loading={<p className="text-sm text-neutral-500">Loading case study…</p>}
          error={<p className="text-center text-sm text-neutral-600">The preview could not load. <a className="underline" href={study.pdf} download>Download the PDF</a>.</p>}
          className={zoomed ? "shrink-0" : ""}
        >
          <Page
            pageNumber={pageNumber}
            width={pageWidth * (zoomed ? 2 : 1)}
            devicePixelRatio={Math.min(Math.max(window.devicePixelRatio || 1, 2), 3)}
            renderAnnotationLayer
            renderTextLayer
            loading={<div className="aspect-video bg-white" style={{ width: pageWidth }} />}
            className="overflow-hidden rounded-[3px] shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          />
        </Document>
      </div>

      <div className="relative flex h-16 shrink-0 items-center justify-center gap-5 border-t border-neutral-200 bg-white px-4">
        <button type="button" onClick={() => turnPage(-1)} disabled={pageNumber === 1} aria-label="Previous page" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-[#FE6B00] hover:text-[#FE6B00] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:text-neutral-700">
          <ChevronLeft size={19} strokeWidth={1.8} />
        </button>
        <span className="min-w-16 text-center text-xs font-semibold tabular-nums text-neutral-600">{String(pageNumber).padStart(2, "0")} / {String(numPages).padStart(2, "0")}</span>
        <button type="button" onClick={() => turnPage(1)} disabled={pageNumber === numPages} aria-label="Next page" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-[#FE6B00] hover:text-[#FE6B00] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:text-neutral-700">
          <ChevronRight size={19} strokeWidth={1.8} />
        </button>
        <button type="button" onClick={() => setZoomed((current) => !current)} aria-label={zoomed ? "Zoom out" : "Zoom in"} className="absolute right-4 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 sm:hidden">
          {zoomed ? <ZoomOut size={17} strokeWidth={1.8} /> : <ZoomIn size={17} strokeWidth={1.8} />}
        </button>
      </div>
    </>
  );
};

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
