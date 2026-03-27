import { useEffect, useRef, useState } from "react";
import rebluesLogo from "@/assets/reblues-logo.svg";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[1000] flex justify-center transition-all duration-400
        ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src={rebluesLogo} alt="Reblues" className="h-6 sm:h-7 w-auto dark:invert dark:brightness-200" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body font-medium text-[13px] tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#book-a-call"
            className="font-body font-bold text-[13px] tracking-widest text-primary-foreground bg-primary px-6 py-3 rounded-none hover:brightness-110 transition-all duration-300 uppercase"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile / Tablet Menu */}
        <div className="flex items-center gap-4 lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 -mr-2 text-foreground hover:text-primary transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showClose={false}
              className="w-[280px] sm:w-[320px] bg-background/95 backdrop-blur-xl border-l border-border"
            >
              <div className="flex flex-col gap-6 mt-12">
                {[...navLinks, { name: "Book a Call", href: "#book-a-call" }].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className="font-body font-medium text-lg tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300 py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
