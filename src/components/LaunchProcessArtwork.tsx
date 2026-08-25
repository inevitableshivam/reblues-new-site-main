import discoveryAscii from "@/assets/ascii/launch-process-1.txt?raw";
import storyboardAscii from "@/assets/ascii/launch-process-2.txt?raw";
import designAscii from "@/assets/ascii/launch-process-3.txt?raw";
import rolloutAscii from "@/assets/ascii/launch-process-4.txt?raw";
const artwork = [discoveryAscii, storyboardAscii, designAscii, rolloutAscii].map((ascii) => ascii.trimEnd());

export const LaunchProcessArtwork = ({ index }: { index: number }) => (
  <div className="pointer-events-none flex h-[260px] items-center justify-center overflow-hidden" aria-hidden="true">
    <pre
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/45"
      style={{ fontSize: "1.02px", lineHeight: 0.9 }}
    >
      {artwork[index]}
    </pre>
  </div>
);

export default LaunchProcessArtwork;
