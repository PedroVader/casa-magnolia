"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Dropdown data ─── */

interface DropdownItem {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotras", label: "Nosotras" },
  {
    href: "/proyectos",
    label: "Proyectos",
    dropdown: [
      { href: "/proyectos", label: "Todos los proyectos" },
      { href: "/proyectos?cat=bodas", label: "Bodas" },
      { href: "/proyectos?cat=eventos", label: "Eventos" },
      { href: "/proyectos?cat=rodajes", label: "Rodajes" },
    ],
  },
  {
    href: "/servicios",
    label: "Servicios",
    dropdown: [
      { href: "/servicios", label: "Todos los servicios" },
      { href: "/servicios/hoteles-restaurantes", label: "Hoteles" },
      { href: "/servicios/rodajes", label: "Rodajes" },
      { href: "/servicios/eventos", label: "Eventos" },
    ],
  },
  {
    href: "/talleres",
    label: "Talleres",
    dropdown: [
      { href: "/talleres", label: "Todos los talleres" },
      { href: "/talleres/arreglo-primaveral", label: "Arreglo primaveral" },
      { href: "/talleres/ramo-silvestre", label: "Ramo silvestre" },
    ],
  },
  { href: "/contacto", label: "Contacto" },
];

/* ─── Desktop nav item ─── */

function DesktopNavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);
  const hasDropdown = !!link.dropdown;

  const enter = () => {
    if (!hasDropdown) return;
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const leave = () => {
    if (!hasDropdown) return;
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <li
      className={hasDropdown ? "relative" : undefined}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <Link
        href={link.href}
        className={`font-hand text-lg text-magnolia-ink/80 hover:text-magnolia-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-magnolia-green hover:after:w-full after:transition-all after:duration-300${
          hasDropdown ? " inline-flex items-center gap-1.5" : ""
        }`}
      >
        {link.label}
        {hasDropdown && (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-3 w-3 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path d="M12 18l12 12 12-12" />
          </svg>
        )}
      </Link>

      {hasDropdown && (
        <div
          className={`absolute top-full pt-3 left-0 transition-all duration-200 ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <div className="w-48 bg-magnolia-cream border border-magnolia-line shadow-sm py-2">
            {link.dropdown!.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-2.5 font-hand text-base text-magnolia-ink hover:text-magnolia-green hover:bg-magnolia-green/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

/* ─── Mobile dropdown component ─── */

function MobileDropdown({
  link,
  onNavigate,
}: {
  link: NavLink;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!link.dropdown) {
    return (
      <Link
        href={link.href}
        onClick={onNavigate}
        className="font-hand text-3xl text-magnolia-green hover:text-magnolia-terracota transition-colors"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-hand text-3xl text-magnolia-green hover:text-magnolia-terracota transition-colors inline-flex items-center gap-2"
      >
        {link.label}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        >
          <path d="M12 18l12 12 12-12" />
        </svg>
      </button>

      <div
        className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {link.dropdown.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="font-hand text-lg text-magnolia-ink/70 hover:text-magnolia-green transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Navbar ─── */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile overlay background */}
      <div
        className={`lg:hidden fixed inset-0 bg-magnolia-cream z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "bg-magnolia-cream"
            : scrolled
              ? "bg-magnolia-cream border-b border-magnolia-line"
              : "bg-magnolia-cream"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 lg:py-6">
          {/* Logo - left */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex flex-col flex-shrink-0"
          >
            <span className="font-display text-2xl lg:text-[1.75rem] leading-none text-magnolia-green transition-colors duration-300">
              Casa Magnolia
            </span>
            <span className="font-accent text-xs tracking-[0.2em] mt-1 text-magnolia-green/60 transition-colors duration-300">
              Laboratorio floral
            </span>
          </Link>

          {/* All nav links - right (desktop) */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.href + link.label} link={link} />
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-magnolia-ink transition-colors duration-300"
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {mobileOpen ? (
                <>
                  <path d="M14 14l20 20" />
                  <path d="M34 14l-20 20" />
                </>
              ) : (
                <>
                  <path d="M8 14h32" />
                  <path d="M8 24h32" />
                  <path d="M8 34h32" />
                </>
              )}
            </svg>
          </button>
        </nav>


        {/* Decorative stripe bar — same pattern as hero */}
        <div
          className="h-5 md:h-6"
          style={{
            backgroundImage: "url(/images/pattern-stripes.png)",
            backgroundSize: "33.33% auto",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center bottom",
          }}
          aria-hidden="true"
        />

        {/* Mobile menu content */}
        <div
          className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[calc(100dvh-72px)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 px-6 py-8 pb-12">
            {navLinks.map((link) => (
              <MobileDropdown
                key={link.href + link.label}
                link={link}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
