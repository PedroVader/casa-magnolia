"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Dropdown data ─── */

interface DropdownItem {
  href: string;
  label: string;
  description?: string;
}

interface NavLink {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

const leftLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotras", label: "Nosotras" },
  {
    href: "/proyectos",
    label: "Proyectos",
    dropdown: [
      {
        href: "/proyectos",
        label: "Todos los proyectos",
        description: "Explora nuestro portfolio completo",
      },
      {
        href: "/proyectos?cat=bodas",
        label: "Bodas",
        description: "Ceremonias y banquetes",
      },
      {
        href: "/proyectos?cat=eventos",
        label: "Eventos",
        description: "Corporativos y celebraciones",
      },
      {
        href: "/proyectos?cat=rodajes",
        label: "Rodajes",
        description: "Publicidad y editoriales",
      },
    ],
  },
];

const rightLinks: NavLink[] = [
  {
    href: "/servicios",
    label: "Servicios",
    dropdown: [
      {
        href: "/servicios",
        label: "Todos los servicios",
        description: "Lo que hacemos",
      },
      {
        href: "/servicios/bodas",
        label: "Bodas",
        description: "Direccion floral para tu dia",
      },
      {
        href: "/servicios/eventos",
        label: "Eventos",
        description: "Lanzamientos, cenas, corporativos",
      },
      {
        href: "/servicios/rodajes",
        label: "Rodajes",
        description: "Set design para producciones",
      },
      {
        href: "/servicios/hoteles-restaurantes",
        label: "Hoteles y Restaurantes",
        description: "Suscripcion floral mensual",
      },
    ],
  },
  {
    href: "/talleres",
    label: "Talleres",
    dropdown: [
      {
        href: "/talleres",
        label: "Todos los talleres",
        description: "Proximas fechas y reservas",
      },
      {
        href: "/talleres/arreglo-primaveral",
        label: "Arreglo primaveral",
        description: "Composicion de temporada",
      },
      {
        href: "/talleres/ramo-silvestre",
        label: "Ramo silvestre",
        description: "Tecnica de ramo atado a mano",
      },
    ],
  },
  { href: "/contacto", label: "Contacto" },
];

/* ─── Desktop nav item ─── */

function DesktopNavItem({
  link,
  align = "left",
}: {
  link: NavLink;
  align?: "left" | "right";
}) {
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
        className={`font-body text-xs tracking-[0.2em] uppercase text-magnolia-ink/80 hover:text-magnolia-green transition-colors${
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
          className={`absolute top-full pt-3 ${
            align === "right" ? "right-0" : "left-0"
          } transition-all duration-200 ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <div className="w-64 bg-magnolia-cream border border-magnolia-line shadow-sm py-3">
            {link.dropdown!.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 hover:bg-magnolia-green/5 transition-colors group"
              >
                <span className="font-body text-sm text-magnolia-ink group-hover:text-magnolia-green transition-colors">
                  {item.label}
                </span>
                {item.description && (
                  <span className="block font-body text-xs text-magnolia-ink/50 mt-0.5">
                    {item.description}
                  </span>
                )}
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
        className="font-display text-3xl text-magnolia-green hover:text-magnolia-terracota transition-colors"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-display text-3xl text-magnolia-green hover:text-magnolia-terracota transition-colors inline-flex items-center gap-2"
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
            className="font-body text-base text-magnolia-ink/70 hover:text-magnolia-green transition-colors"
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-magnolia-cream/95 backdrop-blur-sm border-b border-magnolia-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 lg:py-6">
        {/* Left links - desktop */}
        <ul className="hidden lg:flex items-center gap-8 flex-1">
          {leftLinks.map((link) => (
            <DesktopNavItem key={link.href} link={link} align="left" />
          ))}
        </ul>

        {/* Logo - center */}
        <Link
          href="/"
          className="flex flex-col items-center flex-shrink-0 lg:mx-12"
        >
          <span className="font-display text-2xl lg:text-[1.75rem] text-magnolia-green leading-none">
            Casa Magnolia
          </span>
          <span className="font-accent text-xs tracking-[0.2em] text-magnolia-green/60 mt-1">
            Laboratorio floral
          </span>
        </Link>

        {/* Right links - desktop */}
        <ul className="hidden lg:flex items-center justify-end gap-8 flex-1">
          {rightLinks.map((link) => (
            <DesktopNavItem key={link.href} link={link} align="right" />
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-magnolia-ink"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-magnolia-cream z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {[...leftLinks, ...rightLinks].map((link) => (
              <MobileDropdown
                key={link.href}
                link={link}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
