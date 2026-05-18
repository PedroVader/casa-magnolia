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
    <footer className="relative overflow-hidden text-magnolia-cream">
      {/* ── Layered green background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, #3A5234 0%, #2C3E28 40%, #1E2B1B 100%)",
        }}
      />

      {/* Warm light glow — top left */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Soft glow — bottom right */}
      <div
        className="absolute -bottom-48 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,196,196,0.06) 0%, transparent 65%)",
        }}
      />

      {/* ── Botanical SVG overlay ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="footer-botanicals" width="600" height="500" patternUnits="userSpaceOnUse">
            {/* Branch — top right */}
            <path
              d="M480 40 Q460 80, 440 120 Q430 150, 420 180"
              stroke="rgba(90,122,80,0.25)"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M460 70 Q445 55, 435 42 Q450 50, 460 70Z" fill="rgba(90,122,80,0.15)" />
            <path d="M450 100 Q465 85, 475 72 Q462 90, 450 100Z" fill="rgba(107,140,94,0.12)" />
            <path d="M440 130 Q425 115, 418 100 Q430 112, 440 130Z" fill="rgba(90,122,80,0.15)" />

            {/* Large leaf — bottom left */}
            <path
              d="M80 380 Q40 340, 30 280 Q60 300, 80 340 Q100 300, 130 280 Q120 340, 80 380Z"
              fill="rgba(90,122,80,0.1)"
            />
            <path d="M80 380 Q60 340, 50 300" stroke="rgba(44,62,40,0.15)" strokeWidth="0.8" fill="none" />
            <path d="M80 380 Q100 340, 110 300" stroke="rgba(44,62,40,0.12)" strokeWidth="0.6" fill="none" />

            {/* Small eucalyptus branch — center */}
            <path
              d="M300 200 Q290 230, 285 260 Q280 290, 278 320"
              stroke="rgba(90,122,80,0.2)"
              strokeWidth="1.2"
              fill="none"
            />
            <ellipse cx="295" cy="220" rx="8" ry="12" fill="rgba(107,140,94,0.1)" transform="rotate(-20 295 220)" />
            <ellipse cx="288" cy="250" rx="7" ry="11" fill="rgba(90,122,80,0.08)" transform="rotate(15 288 250)" />
            <ellipse cx="282" cy="280" rx="9" ry="13" fill="rgba(107,140,94,0.1)" transform="rotate(-10 282 280)" />
            <ellipse cx="280" cy="310" rx="7" ry="10" fill="rgba(90,122,80,0.08)" transform="rotate(20 280 310)" />

            {/* Tiny flower — top left */}
            <circle cx="120" cy="60" r="6" fill="rgba(232,196,196,0.08)" />
            <circle cx="120" cy="60" r="3" fill="rgba(201,169,110,0.1)" />

            {/* Tiny flower — center right */}
            <circle cx="520" cy="300" r="5" fill="rgba(232,196,196,0.06)" />
            <circle cx="520" cy="300" r="2.5" fill="rgba(201,169,110,0.08)" />

            {/* Scatter dots — pollen */}
            <circle cx="200" cy="120" r="1.5" fill="rgba(201,169,110,0.12)" />
            <circle cx="400" cy="80" r="1" fill="rgba(232,196,196,0.1)" />
            <circle cx="150" cy="300" r="1.5" fill="rgba(201,169,110,0.1)" />
            <circle cx="500" cy="420" r="1" fill="rgba(232,196,196,0.08)" />
            <circle cx="350" cy="450" r="1.5" fill="rgba(201,169,110,0.1)" />
            <circle cx="50" cy="180" r="1" fill="rgba(201,169,110,0.08)" />
            <circle cx="550" cy="160" r="1.5" fill="rgba(232,196,196,0.1)" />

            {/* Delicate stem — bottom right */}
            <path
              d="M520 400 Q510 430, 505 460 Q500 480, 498 500"
              stroke="rgba(90,122,80,0.18)"
              strokeWidth="1"
              fill="none"
            />
            <path d="M515 420 Q505 410, 498 400 Q508 408, 515 420Z" fill="rgba(107,140,94,0.12)" />
            <path d="M508 450 Q518 440, 525 430 Q516 443, 508 450Z" fill="rgba(90,122,80,0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-botanicals)" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
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
        </div>
      </div>
    </footer>
  );
}
