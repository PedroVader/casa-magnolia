import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const navLinks = [
  { href: "/sobre-nosotras", label: "Nosotras" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/talleres", label: "Talleres" },
  { href: "/contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/legal/aviso-legal", label: "Aviso legal" },
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="bg-magnolia-green text-magnolia-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl leading-none">
                Casa Magnolia
              </span>
              <br />
              <span className="font-accent text-xs tracking-widest opacity-70">
                Laboratorio floral
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed opacity-70 max-w-xs">
              Diseno floral a cuatro manos, desde Bilbao.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase mb-5 opacity-50">
              Navegar
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase mb-5 opacity-50">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@casamagnolia.com"
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity inline-flex items-center gap-2"
                >
                  <FiMail className="h-4 w-4" />
                  hola@casamagnolia.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity inline-flex items-center gap-2"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/casamagnolia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity inline-flex items-center gap-2"
                >
                  <FaInstagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase mb-5 opacity-50">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 border-t border-magnolia-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs opacity-50">
            {new Date().getFullYear()} Casa Magnolia. Todos los derechos
            reservados.
          </p>
          <p className="font-body text-xs opacity-50">
            Bilbao, Pais Vasco
          </p>
        </div>
      </div>
    </footer>
  );
}
