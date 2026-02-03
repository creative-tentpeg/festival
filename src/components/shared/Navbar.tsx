"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/festivals", label: "Festivals" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 font-heading tracking-wide",
        scrolled
          ? "bg-[#115126]/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <Link href="/" className="group flex items-center space-x-2">
              <span
                className={cn(
                  "text-2xl font-bold transition-colors duration-300",
                  scrolled ? "text-white" : "text-white",
                )}
              >
                CABARRUS
              </span>
              <span
                className={cn(
                  "text-2xl font-light transition-colors duration-300",
                  scrolled ? "text-white" : "text-stone-100",
                )}
              >
                FESTIVALS
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-green-600",
                  pathname === link.href
                    ? scrolled
                      ? "text-white border-b-2 border-white"
                      : "text-green-700 border-b-2 border-green-700"
                    : scrolled
                      ? "text-white"
                      : "text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-200 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-stone-900 shadow-xl transition-all duration-300 ease-in-out origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0",
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium text-center",
                pathname === link.href
                  ? "bg-amber-900/50 text-amber-500"
                  : "text-stone-300 hover:bg-stone-800 hover:text-white",
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
