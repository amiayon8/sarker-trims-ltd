"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur shadow">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">
        <Link
          href="/"
          className="flex items-center space-x-3 cursor-pointer"
          aria-label="Homepage"
        >
          <div className="h-12 flex items-center justify-center">
            <Image
              src="/media/logo.png"
              alt="Sarker Trims Logo"
              width={220}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="mx-4 flex flex-col items-start gap-x-8 space-y-2 lg:flex-row lg:items-center lg:space-y-0">
            {navigationLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm px-2 transition-all ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-primary/70 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-warm)] transition-all hover:-translate-y-0.5 hover:bg-primary"
          >
            Request a sample
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mr-2 rounded-md p-2 text-primary transition-colors lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>

        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div
            className="fixed inset-0 h-screen bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={`fixed top-0 left-0 h-screen w-4/5 max-w-sm bg-amber-50 shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="min-h-full flex flex-col">
              <div className="p-4 h-20 border-b border-gray-200 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/media/logo.png"
                    alt="Sarker Trims Logo"
                    width={180}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-primary"
                  aria-label="Close menu"
                >
                  <X className="size-6" />
                </button>
              </div>
              <nav className="p-4 flex-grow">
                <ul className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block text-base px-2 py-1 transition-all ${
                            isActive
                              ? "text-primary font-semibold"
                              : "text-primary/70 hover:text-primary"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="pt-4">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md"
                    >
                      Request a sample
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
