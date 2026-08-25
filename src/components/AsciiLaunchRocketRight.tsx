import launchRocketAscii from "@/assets/ascii/launch-rocket-right.txt?raw";
import { randomizeAsciiLetters, removeSmallAsciiFragments } from "@/lib/ascii";

const cleanedLaunchRocketAscii = randomizeAsciiLetters(removeSmallAsciiFragments(launchRocketAscii));

export const AsciiLaunchRocketRight = () => (
  <div className="pointer-events-none flex h-full w-full select-none items-center justify-end overflow-hidden">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/75"
      style={{
        fontSize: "3.25px",
        lineHeight: 0.9,
        transform: "translateX(-28px) scaleX(1.04) scaleY(1.3)",
        transformOrigin: "right center",
      }}
    >
      {cleanedLaunchRocketAscii}
    </pre>
  </div>
);

export default AsciiLaunchRocketRight;
