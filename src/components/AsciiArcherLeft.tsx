import archerLeftAscii from "@/assets/ascii/archer-left.txt?raw";
import { softenDenseAscii } from "@/lib/ascii";

const softenedArcherLeft = softenDenseAscii(archerLeftAscii);

export const AsciiArcherLeft = () => (
  <div className="flex h-full w-full items-center justify-center overflow-hidden select-none pointer-events-none">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/75"
      style={{
        fontSize: "1.625px",
        lineHeight: 0.9,
        transform: "scaleX(0.8)",
        transformOrigin: "center",
      }}
    >
      {softenedArcherLeft}
    </pre>
  </div>
);

export default AsciiArcherLeft;
