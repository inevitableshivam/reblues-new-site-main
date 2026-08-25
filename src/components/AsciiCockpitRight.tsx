import cockpitAscii from "@/assets/ascii/cockpit-right.txt?raw";
import { randomizeAsciiLetters, removeSmallAsciiFragments } from "@/lib/ascii";

const cleanedCockpitAscii = randomizeAsciiLetters(removeSmallAsciiFragments(cockpitAscii, 8));

export const AsciiCockpitRight = () => (
  <div className="pointer-events-none flex h-full w-full select-none items-center justify-end overflow-hidden">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-700/90"
      style={{ fontSize: "1.58px", lineHeight: 0.9, transform: "translate(10px, -38px) scaleX(0.95)", transformOrigin: "right center" }}
    >
      {cleanedCockpitAscii}
    </pre>
  </div>
);

export default AsciiCockpitRight;
