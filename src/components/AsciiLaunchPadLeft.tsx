import launchPadAscii from "@/assets/ascii/launch-pad-left.txt?raw";
import { randomizeAsciiLetters, removeSmallAsciiFragments } from "@/lib/ascii";

const cleanedLaunchPadAscii = randomizeAsciiLetters(removeSmallAsciiFragments(launchPadAscii));

export const AsciiLaunchPadLeft = () => (
  <div className="pointer-events-none flex h-full w-full select-none items-center justify-start overflow-hidden">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/75"
      style={{
        fontSize: "3.25px",
        lineHeight: 0.9,
        transform: "scaleX(1.04) scaleY(1.3)",
        transformOrigin: "left center",
      }}
    >
      {cleanedLaunchPadAscii}
    </pre>
  </div>
);

export default AsciiLaunchPadLeft;
