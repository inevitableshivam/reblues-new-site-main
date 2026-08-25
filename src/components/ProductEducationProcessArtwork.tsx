import discoveryAscii from "@/assets/ascii/education-process-1.txt?raw";
import valueMappingAscii from "@/assets/ascii/education-process-2.txt?raw";
import contentPlanAscii from "@/assets/ascii/education-process-3.txt?raw";
import productionAscii from "@/assets/ascii/education-process-4.txt?raw";
import integrationAscii from "@/assets/ascii/education-process-5.txt?raw";
const artwork = [discoveryAscii, valueMappingAscii, contentPlanAscii, productionAscii, integrationAscii].map((ascii) =>
  ascii.trimEnd(),
);

export const ProductEducationProcessArtwork = ({ index }: { index: number }) => (
  <div className="pointer-events-none flex h-[260px] items-center justify-center overflow-hidden" aria-hidden="true">
    <pre
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/45"
      style={{
        fontSize: "1.62px",
        lineHeight: 0.9,
        transform: index === 2 ? "scale(1.5) scaleX(0.72)" : "scaleX(0.63)",
        transformOrigin: "center",
      }}
    >
      {artwork[index]}
    </pre>
  </div>
);

export default ProductEducationProcessArtwork;
