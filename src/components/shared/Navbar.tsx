"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

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
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isNavigating) return;
    const timeout = setTimeout(() => setIsNavigating(false), 120);
    return () => clearTimeout(timeout);
  }, [pathname, isNavigating]);

  const handleMenuNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (
      href === pathname ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    setIsOpen(false);
    setIsNavigating(true);
    setTimeout(() => {
      router.push(href);
    }, 180);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 font-heading tracking-wide",
        scrolled
          ? "bg-[#022154]/95 backdrop-blur-md shadow-lg py-1"
          : "bg-transparent py-4",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className={cn("shrink-0 flex items-center", scrolled ? "pt-1" : "pt-4")}>
            <Link href="/" className="group flex items-center space-x-2">
              <Image
                src="/images/cabarrus-logo.png"
                alt="Cabarrus Festivals Logo"
                width={250}
                height={120}
                className={cn("w-auto", scrolled ? "h-[100px]" : "h-[120px]")}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu + Social */}
          <div className="hidden md:ml-6 md:flex md:items-center md:gap-6">
            <div className="md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleMenuNavigation(event, link.href)}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#FFCA00]",
                    pathname === link.href
                      ? scrolled
                        ? "text-white border-b-2 border-white"
                        : "text-[#FFCA00] border-b-2 border-[#FFCA00]"
                      : "text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <span className="text-white/60 select-none" aria-hidden="true">
              |
            </span>

            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/10 focus:outline-none"
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
          "md:hidden absolute top-full left-0 w-full bg-[#022154] shadow-xl transition-all duration-300 ease-in-out origin-top",
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
                  ? "bg-white/15 text-white"
                  : "text-white/90 hover:bg-festival-green hover:text-white",
              )}
              onClick={(event) => handleMenuNavigation(event, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}
