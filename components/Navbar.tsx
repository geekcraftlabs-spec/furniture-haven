"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/delivery", label: "Delivery" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf6f0]/95 backdrop-blur-sm border-b border-[#d4b896]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            <span className="bg-[#8b6914] text-white text-xs rounded-full w-8 h-8 flex items-center justify-center font-serif font-bold">
              FH
            </span>
            <span className="text-xl font-serif font-bold text-[#4a3520]">Furniture Haven</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 transition ${
                  pathname === link.href
                    ? "text-[#8b6914] border-b-2 border-[#c87a3a]"
                    : "text-[#6b4c3b] hover:text-[#8b6914] hover:border-b-2 hover:border-[#c87a3a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5 cursor-pointer touch-manipulation"
            aria-label="Toggle menu"
            type="button"
          >
            <span
              className={`w-6 h-0.5 bg-[#4a3520] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#4a3520] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#4a3520] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 top-16 bg-[#faf6f0] transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`py-3 px-4 rounded-lg transition ${
                pathname === link.href
                  ? "bg-[#8b6914] text-white"
                  : "hover:bg-[#f0e8e0] text-[#4a3520]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}