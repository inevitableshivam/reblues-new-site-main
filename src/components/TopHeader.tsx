import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rebluesLogo from "@/assets/reblues-logo-header.svg";

const TopHeader = () => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => setTimeString(new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }));
    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <header className="relative z-50 flex-shrink-0 border-b border-neutral-200 bg-white font-body">
      <div className="relative mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between px-6 sm:h-16">
        <Link to="/" className="text-[11px] font-medium text-neutral-400 transition-colors hover:text-neutral-900">
          reblues.studio
        </Link>
        <Link to="/" aria-label="Reblues home" className="absolute left-1/2 -translate-x-1/2">
          <img src={rebluesLogo} alt="Reblues" className="h-5 w-auto sm:h-6" />
        </Link>
        <span className="text-[11px] font-medium text-neutral-400">{timeString || "5:00 PM"}</span>
      </div>
    </header>
  );
};

export default TopHeader;
