"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import type { Lang } from "@/lib/translations";

type NavT = {
  services: string;
  method: string;
  properties: string;
  contact: string;
  langSwitch: string;
  cta: string;
};

export default function Navbar({
  t,
  lang,
  setLang,
}: {
  t: NavT;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.services },
    { href: "#method", label: t.method },
    { href: "#properties", label: t.properties },
    { href: "#contact", label: t.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#">
          <Logo variant="navbar-light" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-gold transition-colors duration-200 text-xs tracking-widest uppercase font-medium"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            className="border border-gold/50 text-gold hover:bg-gold hover:text-navy-dark transition-all duration-200 px-4 py-1.5 text-[10px] tracking-widest uppercase font-semibold"
          >
            {t.langSwitch}
          </button>
          <a
            href="#contact"
            className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-5 py-2 text-[10px] tracking-widest uppercase transition-all duration-200"
          >
            {t.cta}
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            className="border border-gold/50 text-gold px-3 py-1 text-[10px] tracking-wider uppercase"
          >
            {t.langSwitch}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/75 hover:text-gold transition-colors text-xs tracking-widest uppercase font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-gold text-navy-dark font-semibold px-5 py-2.5 text-xs tracking-wider uppercase text-center mt-2"
          >
            {t.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
