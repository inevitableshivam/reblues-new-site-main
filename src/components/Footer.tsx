import { ArrowUpRight } from "lucide-react";
import rebluesFooterWordmark from "@/assets/reblues-footer-wordmark.svg";

const socialIcons = [
  {
    name: "X",
    href: "https://x.com/reblues_media",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/reblues-media/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/reblues.media/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

type FooterProps = {
  onBookCall?: () => void;
  eyebrow?: string;
  headline?: string;
  buttonLabel?: string;
};

const Footer = ({ onBookCall, eyebrow = "Ready when you are", headline = "Let’s make your launch clear.", buttonLabel = "Book a call" }: FooterProps) => (
  <footer className="bg-white p-[6px] sm:p-2">
    <div className={`flex overflow-hidden rounded-[5px] bg-[#FE6B00] text-white ${onBookCall ? "h-[calc(100svh-12px)] min-h-[620px] flex-col sm:h-[calc(100svh-16px)]" : "flex-col"}`}>
      <div className={`mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center ${onBookCall ? "min-h-0 flex-1 justify-center py-10 md:py-12" : "py-14 md:py-16"}`}>
        {onBookCall && (
          <>
            <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.12em] text-white/65">{eyebrow}</p>
            <h2 className="max-w-3xl font-body text-[28px] font-medium leading-[1.12] tracking-tight sm:text-3xl md:text-[44px]">{headline}</h2>
            <button type="button" onClick={onBookCall} className="mt-8 inline-flex h-11 min-w-[152px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/80 bg-white/95 px-6 font-body text-sm font-semibold leading-none text-neutral-800 shadow-sm transition-transform hover:scale-[1.02] hover:bg-white active:scale-[0.98]">
              {buttonLabel} <ArrowUpRight size={15} />
            </button>
          </>
        )}
        <div className={`${onBookCall ? "mt-12 md:mt-14" : ""} flex items-center justify-center gap-6`}>
            {socialIcons.map((icon) => (
              <a key={icon.name} href={icon.href} target="_blank" rel="noopener noreferrer" aria-label={icon.name} className="text-white/70 transition-colors hover:text-white">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d={icon.path} /></svg>
              </a>
            ))}
        </div>
        <p className="mt-5 text-xs font-medium text-white/65">© 2026 Reblues. All rights reserved.</p>
      </div>

      <div className="flex h-[clamp(132px,24svh,210px)] flex-none items-center justify-center overflow-hidden border-t border-white/20 px-5 py-6 md:px-8 md:py-7">
        <img src={rebluesFooterWordmark} alt="Reblues" className="block max-h-full w-full max-w-[900px] object-contain opacity-30" />
      </div>
    </div>
  </footer>
);

export default Footer;
