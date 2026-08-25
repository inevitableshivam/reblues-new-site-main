import dockingStationAscii from "@/assets/ascii/docking-station-left.txt?raw";
import { randomizeAsciiLetters, removeSmallAsciiFragments } from "@/lib/ascii";

const cleanedDockingStationAscii = randomizeAsciiLetters(removeSmallAsciiFragments(dockingStationAscii, 8));

export const AsciiDockingStationLeft = () => (
  <div className="pointer-events-none flex h-full w-full select-none items-center justify-start overflow-hidden">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/75"
      style={{ fontSize: "2.8px", lineHeight: 0.9, transform: "translateX(-16px) scaleX(0.95)", transformOrigin: "left center" }}
    >
      {cleanedDockingStationAscii}
    </pre>
  </div>
);

export default AsciiDockingStationLeft;
