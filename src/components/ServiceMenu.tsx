import { Home } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Launch Films", to: "/launch-films" },
  { label: "Product Education", to: "/product-education" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Process", to: "/process" },
];

const ServiceMenu = () => (
  <nav aria-label="Primary" className="relative z-40 border-b border-neutral-200 bg-white">
    <div className="mx-auto flex min-h-11 max-w-[1600px] items-center justify-start gap-5 overflow-x-auto px-4 sm:justify-center sm:gap-10 sm:px-6">
      <NavLink to="/" aria-label="Home" className={({ isActive }) => `relative flex h-11 shrink-0 items-center px-1 transition-colors ${isActive ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"}`}>
        {({ isActive }) => <><Home size={16} strokeWidth={1.8} />{isActive && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FE6B00]" />}</>}
      </NavLink>
      {links.map(({ label, to }) => <NavLink key={to} to={to} className={({ isActive }) => `relative flex h-11 shrink-0 items-center font-body text-[13px] font-medium tracking-[-0.01em] transition-colors ${isActive ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"}`}>
        {({ isActive }) => <>{label}{isActive && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FE6B00]" />}</>}
      </NavLink>)}
    </div>
  </nav>
);

export default ServiceMenu;
