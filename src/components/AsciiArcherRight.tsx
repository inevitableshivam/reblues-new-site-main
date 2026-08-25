import archerRightAscii from "@/assets/ascii/archer-right.txt?raw";
import { softenDenseAscii } from "@/lib/ascii";

const softenedArcherRight = softenDenseAscii(archerRightAscii);

export const AsciiArcherRight = () => (
  <div className="flex h-full w-full items-center justify-center overflow-hidden select-none pointer-events-none">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/75"
      style={{
        fontSize: "1.625px",
        lineHeight: 0.9,
        transform: "translateX(-24px) scaleX(0.8)",
        transformOrigin: "center",
      }}
    >
      {softenedArcherRight}
    </pre>
  </div>
);

export default AsciiArcherRight;
