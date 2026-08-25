import { productFlashlightAscii } from "@/lib/productEducationAscii";

export const AsciiProductPathRight = () => (
  <div className="pointer-events-none flex h-full w-full select-none items-center justify-center overflow-hidden">
    <pre
      aria-hidden="true"
      className="shrink-0 whitespace-pre font-mono tracking-normal text-neutral-600/75"
      style={{ fontSize: "3.1px", lineHeight: 0.9, transform: "scaleX(0.78)", transformOrigin: "center" }}
    >
      {productFlashlightAscii}
    </pre>
  </div>
);

export default AsciiProductPathRight;
