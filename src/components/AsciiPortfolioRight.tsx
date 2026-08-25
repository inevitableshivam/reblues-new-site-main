import portfolioAscii from "@/assets/ascii/portfolio-right.txt?raw";
import { randomizeAsciiLetters, removeSmallAsciiFragments } from "@/lib/ascii";

const cleanedPortfolioAscii = randomizeAsciiLetters(removeSmallAsciiFragments(portfolioAscii, 8));

export const AsciiPortfolioRight = () => (
  <div className="pointer-events-none flex h-full w-full select-none items-center justify-start overflow-hidden">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/80"
      style={{ fontSize: "2.05px", lineHeight: 0.9, transform: "translateX(-18px) scaleX(1.1)", transformOrigin: "left center" }}
    >
      {cleanedPortfolioAscii}
    </pre>
  </div>
);

export default AsciiPortfolioRight;
