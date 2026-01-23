"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/villas", label: "Villas" },
  { href: "/location", label: "Location" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/investment", label: "Investment" },
  { href: "/quiz", label: "Fit quiz" },
  { href: "/about", label: "Who we are" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        isHome
          ? isScrolled
            ? "bg-ocean/95 shadow-premium"
            : "bg-transparent"
          : "bg-ocean/95 shadow-premium"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col text-display text-xl tracking-wide text-white">
          Arboreto
          <span className="text-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Neoterra
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary text-xs">
          Schedule a tour
        </Link>
      </div>
    </header>
  );
}
