import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export type CasePdf = { company: string; pdf: string };

const CasePdfViewer = ({ study }: { study: CasePdf }) => {
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


export default CasePdfViewer;
