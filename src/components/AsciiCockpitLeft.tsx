import cockpitAscii from "@/assets/ascii/cockpit-left.txt?raw";
import { randomizeAsciiLetters, removeSmallAsciiFragments } from "@/lib/ascii";

const cleanedCockpitAscii = randomizeAsciiLetters(removeSmallAsciiFragments(cockpitAscii, 8));

export const AsciiCockpitLeft = () => (
  <div className="pointer-events-none flex h-full w-full select-none items-center justify-start overflow-hidden">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-700/90"
      style={{ fontSize: "1.58px", lineHeight: 0.9, transform: "translate(-10px, -28px) scaleX(0.95)", transformOrigin: "left center" }}
    >
      {cleanedCockpitAscii}
    </pre>
  </div>
);

export default AsciiCockpitLeft;
