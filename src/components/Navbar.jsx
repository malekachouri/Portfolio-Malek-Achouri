import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import ResumeLinks from "./ResumeLinks";
import useActiveSection from "../hooks/useActiveSection";

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass = (id) =>
    `rounded-md px-3 py-2 text-sm transition-colors ${
      active === id ? "text-accent" : "text-muted hover:text-fg"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold" aria-label="Achouri Malek, back to top">
          <span className="text-accent">~/</span>malek-achouri
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={linkClass(item.id)} aria-current={active === item.id ? "true" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ResumeLinks compact />
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line px-4 pb-4 lg:hidden">
          <ul className="grid gap-1 pt-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)} className={`block ${linkClass(item.id)}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 sm:hidden">
            <ResumeLinks />
          </div>
        </nav>
      )}
    </header>
  );
}
