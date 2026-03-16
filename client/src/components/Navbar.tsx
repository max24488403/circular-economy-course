/*
  DESIGN: Clean Presentation Style
  Navbar: Simple top navigation with white background
*/
import { useState, useEffect } from "react";
import { NAV_ITEMS, CDN } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-pres-border shadow-sm"
          : "bg-white border-b border-pres-border"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <img src={CDN.ctLogo} alt="循環台灣基金會" className="h-8 w-auto" />
          <span className="text-sm font-semibold text-pres-dark tracking-wide hidden sm:inline">
            循環經濟轉型實戰課程
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm text-pres-text-secondary hover:text-pres-green transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#pricing")}
            className="text-sm font-medium text-white bg-pres-green hover:bg-pres-green-light px-5 py-2 rounded transition-colors"
          >
            立即報名
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-pres-text"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-pres-border px-6 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left text-sm text-pres-text-secondary hover:text-pres-green py-2.5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#pricing")}
            className="w-full mt-3 text-sm font-medium text-white bg-pres-green hover:bg-pres-green-light px-5 py-2.5 rounded text-center transition-colors"
          >
            立即報名
          </button>
        </div>
      </div>
    </nav>
  );
}
