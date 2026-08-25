import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Launch Films", to: "/launch-films" },
  { label: "Product Education", to: "/product-education" },
  { label: "Portfolio", to: "/portfolio" },
];

const ServiceMenu = () => (
  <nav aria-label="Primary" className="border-b border-neutral-200 bg-white">
    <div className="mx-auto flex h-11 max-w-[1600px] items-center justify-center gap-8 overflow-x-auto px-6 sm:gap-12">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `relative flex h-full shrink-0 items-center font-body text-[13px] font-medium tracking-[-0.01em] transition-colors ${
              isActive ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {link.label}
              {isActive && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FE6B00]" />}
            </>
          )}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default ServiceMenu;
