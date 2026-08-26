import type { ReactNode } from "react";

type MobileHeroArtworkProps = {
  left: ReactNode;
  right: ReactNode;
};

const MobileHeroArtwork = ({ left, right }: MobileHeroArtworkProps) => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden">
    <div className="absolute -left-[12%] top-[3%] h-[34%] w-[62%] overflow-hidden opacity-35 [mask-image:linear-gradient(to_right,black_48%,transparent_100%)] sm:-left-[6%] sm:w-[54%] sm:opacity-30">
      {left}
    </div>
    <div className="absolute -right-[12%] bottom-[3%] h-[34%] w-[62%] overflow-hidden opacity-35 [mask-image:linear-gradient(to_left,black_48%,transparent_100%)] sm:-right-[6%] sm:w-[54%] sm:opacity-30">
      {right}
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_28%,rgba(255,255,255,0.98)_46%,rgba(255,255,255,0.78)_64%,rgba(255,255,255,0)_82%)]" />
  </div>
);

export default MobileHeroArtwork;
