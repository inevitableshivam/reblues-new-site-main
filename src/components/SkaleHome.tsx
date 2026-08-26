import React, { useState } from "react";
import { Link } from "react-router-dom";
import AsciiArcherLeft from "./AsciiArcherLeft";
import AsciiArcherRight from "./AsciiArcherRight";
import BookingModal from "./BookingModal";
import ServiceMenu from "./ServiceMenu";
import TopHeader from "./TopHeader";
import MobileHeroArtwork from "./MobileHeroArtwork";

// 12 Client logos (6 logos per row, 2 rows)
const clientLogos = [
  // Row 1
  { name: "LeadCRM.io", src: "/logos/leadcrm_io.png" },
  { name: "Lemmino", src: "/logos/lemmino.png" },
  { name: "GenLook", src: "/logos/genlook.png" },
  { name: "Median", src: "/logos/median.png" },
  { name: "Sheen.ai", src: "/logos/sheen_ai.png" },
  { name: "Pillir", src: "/logos/pillir.png" },
  // Row 2
  { name: "Osource", src: "/logos/osource.png" },
  { name: "Arqia", src: "/logos/arqia.png" },
  { name: "Openfort", src: "/logos/openfort.png" },
  { name: "Farao", src: "/logos/farao.png" },
  { name: "Upflow", src: "/logos/upflow.png" },
  { name: "SalesStack", src: "/logos/salesstack.png" }
];

export const SkaleHome: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-white font-body text-neutral-900 antialiased select-none lg:h-screen lg:max-h-screen lg:overflow-hidden">
      
      {/* TOP HEADER BAR */}
      <TopHeader />

      <ServiceMenu />

      {/* MAIN 3-COLUMN LAYOUT */}
      <main className="relative flex-1 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-visible">
        <span aria-hidden="true" className="absolute left-1/4 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00] lg:block">+</span>
        <span aria-hidden="true" className="absolute left-3/4 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00] lg:block">+</span>
        <span aria-hidden="true" className="absolute bottom-0 left-1/4 z-20 hidden -translate-x-1/2 translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00] lg:block">+</span>
        <span aria-hidden="true" className="absolute bottom-0 left-3/4 z-20 hidden -translate-x-1/2 translate-y-1/2 bg-white px-1 text-base font-medium leading-none text-[#FE6B00] lg:block">+</span>
        <MobileHeroArtwork left={<AsciiArcherLeft />} right={<AsciiArcherRight />} />
        
        {/* LEFT COLUMN: ASCII Archer Left */}
        <div className="hidden lg:flex lg:col-span-3 border-r border-neutral-200/70 relative items-center justify-center bg-white overflow-hidden p-2">
          
          <AsciiArcherLeft />
        </div>

        {/* CENTER COLUMN: Main Content */}
        <div className="relative col-span-1 lg:col-span-6 flex flex-col items-center justify-center text-center px-6 sm:px-10 py-6 lg:py-8 z-10 overflow-y-auto lg:overflow-y-hidden">
          
          {/* HERO CONTENT AREA */}
          <div className="flex flex-col items-center max-w-xl w-full my-auto">
            
            {/* Tagline / H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-900 leading-[1.14] mb-4">
              We scale software companies with{" "}
              <span className="text-[#FE6B00]">video</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-neutral-500 font-medium max-w-md leading-relaxed mb-6">
              Launch your product, tell your company’s story, and help people understand what you’ve built.
            </p>

            {/* Action Buttons - Clean Flat Buttons */}
            <div className="flex items-center justify-center gap-3.5 flex-wrap mb-10 sm:mb-12">
              <Link
                to="/portfolio"
                className="inline-flex h-10 w-[140px] items-center justify-center rounded-lg bg-[#0A0A0A] px-6 font-body text-sm font-medium leading-none text-white shadow-none transition-colors hover:bg-neutral-800"
              >
                See portfolio
              </Link>
              
              <button
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex h-10 w-[140px] items-center justify-center rounded-lg bg-[#FE6B00] px-6 font-body text-sm font-medium leading-none text-white shadow-none transition-colors hover:bg-[#e96000]"
              >
                Book a call
              </button>
            </div>

            {/* CLIENT LOGOS - Directly below buttons as in skale.solutions */}
            <div className="w-full flex flex-col items-center">
              <p className="text-xs font-medium text-neutral-500 tracking-normal mb-5">
                Our Clients
              </p>

              <div className="grid grid-cols-6 gap-x-5 gap-y-5 items-center justify-items-center w-full max-w-[560px] mx-auto opacity-80 hover:opacity-100 transition-opacity">
                {clientLogos.map((client, idx) => (
                  <div
                    key={idx}
                    className="h-8 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
                    title={client.name}
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className={`h-7 w-16 object-contain ${client.name === "Median" ? "scale-[0.78]" : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: ASCII Archer Right */}
        <div className="hidden lg:flex lg:col-span-3 border-l border-neutral-200/70 relative items-center justify-center bg-white overflow-hidden p-2">
          
          <AsciiArcherRight />
        </div>

      </main>

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

    </div>
  );
};

export default SkaleHome;
