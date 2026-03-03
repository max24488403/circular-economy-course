/*
  DESIGN: Terra Narrativa — 大地敘事
  Navbar: Minimal, transparent → solid on scroll, with organic transitions
*/
import { useState, useEffect } from "react";
import { NAV_ITEMS, CDN } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-terra-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <img
            src={CDN.ctLogo}
            alt="循環台灣基金會"
            className="h-8 lg:h-10 w-auto object-contain"
          />
          <span className={`font-display text-lg lg:text-xl font-semibold tracking-wide transition-colors duration-500 ${
            scrolled ? "text-terra-ivory" : "text-white"
          }`}>
            循環經濟學院
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`font-body text-sm tracking-wider transition-all duration-300 hover:opacity-100 ${
                scrolled
                  ? "text-terra-ivory/70 hover:text-terra-terracotta-light"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#cta")}
            className="px-5 py-2 bg-terra-terracotta text-white font-body text-sm tracking-wider rounded-sm transition-all duration-300 hover:bg-terra-terracotta-light hover:shadow-lg"
          >
            立即報名
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-terra-ivory" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-terra-charcoal/98 backdrop-blur-md px-6 py-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left text-terra-ivory/80 font-body text-base tracking-wider py-2 border-b border-white/5 hover:text-terra-terracotta-light transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#cta")}
            className="w-full mt-4 px-5 py-3 bg-terra-terracotta text-white font-body text-sm tracking-wider rounded-sm"
          >
            立即報名
          </button>
        </div>
      </div>
    </nav>
  );
}
