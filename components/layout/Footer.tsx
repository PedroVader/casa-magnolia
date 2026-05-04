import Link from "next/link";

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
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M6 12c0-1 .8-2 2-2h32c1.2 0 2 1 2 2v24c0 1-.8 2-2 2H8c-1.2 0-2-1-2-2V12z" />
                    <path d="M6 12l17.5 13c.3.2.7.2 1 0L42 12" />
                  </svg>
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
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M14 36l-4 6 7-3c2 1 4.5 1.5 7 1.5 9.4 0 17-7 17-15.5S33.4 9.5 24 9.5 7 16.5 7 25c0 3.2 1.2 6.2 3.2 8.7L14 36z" />
                    <path d="M19 21c.5-1 1.5-1 2 0l1 2c.4.8 0 1.5-.5 2l-1 .5c0 0 1 3 4 4.5l.5-1c.5-.5 1.2-.9 2-.5l2 1c1 .5 1 1.5 0 2-1.5 1-3 1.5-5 .5-3-1.5-6-5-7-8-.5-2 .5-3.5 2-3z" />
                  </svg>
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
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="8" y="8" width="32" height="32" rx="8" />
                    <circle cx="24" cy="24" r="8.5" />
                    <circle cx="35" cy="13" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
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
