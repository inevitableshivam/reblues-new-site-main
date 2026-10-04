type AdCampaignArtworkProps = { side: "left" | "right" };

const adLines = {
  left: [
    { label: "PAIN", copy: "Your workflow is\nslower than it looks.", accent: "bg-[#FE6B00]" },
    { label: "PRODUCT", copy: "One screen.\nThree fewer tools.", accent: "bg-neutral-900" },
  ],
  right: [
    { label: "PROOF", copy: "From first click\nto clear value.", accent: "bg-neutral-900" },
    { label: "ACTION", copy: "See the workflow\nin 20 seconds.", accent: "bg-[#FE6B00]" },
  ],
};

const AdCampaignArtwork = ({ side }: AdCampaignArtworkProps) => (
  <div className={`pointer-events-none flex h-full w-full select-none items-center overflow-hidden ${side === "left" ? "justify-end" : "justify-start"}`} aria-hidden="true">
    <div className={`grid w-[270px] shrink-0 gap-4 ${side === "left" ? "translate-x-6 -rotate-3" : "-translate-x-6 rotate-3"}`}>
      {adLines[side].map((ad, index) => (
        <div key={ad.label} className={`relative aspect-[4/3] overflow-hidden rounded-[5px] border border-neutral-200 bg-white p-5 shadow-[0_14px_35px_rgba(0,0,0,0.06)] ${index === 1 ? (side === "left" ? "translate-x-8" : "-translate-x-8") : ""}`}>
          <div className={`absolute inset-x-0 top-0 h-1 ${ad.accent}`} />
          <span className="font-mono text-[9px] font-semibold tracking-[0.14em] text-[#FE6B00]">{ad.label}</span>
          <p className="mt-7 whitespace-pre-line font-body text-[19px] font-semibold leading-[1.08] tracking-tight text-neutral-900">{ad.copy}</p>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div className="space-y-1.5"><span className="block h-1 w-16 rounded-full bg-neutral-200" /><span className="block h-1 w-10 rounded-full bg-neutral-100" /></div>
            <span className={`h-8 w-8 rounded-[4px] ${ad.accent}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AdCampaignArtwork;

