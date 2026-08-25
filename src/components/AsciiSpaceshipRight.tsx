import spaceshipAscii from "@/assets/ascii/spaceship-right.txt?raw";
import { randomizeAsciiLetters, removeSmallAsciiFragments } from "@/lib/ascii";

const cleanedSpaceshipAscii = randomizeAsciiLetters(removeSmallAsciiFragments(spaceshipAscii, 8));

export const AsciiSpaceshipRight = () => (
  <div className="pointer-events-none flex h-full w-full select-none items-center justify-end overflow-hidden">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/75"
      style={{ fontSize: "2.9px", lineHeight: 0.9, transform: "translateX(-28px) scaleX(0.95)", transformOrigin: "right center" }}
    >
      {cleanedSpaceshipAscii}
    </pre>
  </div>
);

export default AsciiSpaceshipRight;
