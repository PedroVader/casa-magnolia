"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCard {
  title: string;
  href: string;
  description: string;
  sub?: string[];
  comingSoon?: boolean;
}

const services: ServiceCard[] = [
  {
    title: "Hoteles",
    href: "/servicios/hoteles-restaurantes",
    description: "Suscripcion de flores frescas para tu espacio.",
    sub: ["7 flores", "15 flores", "Mensual"],
  },
  {
    title: "Rodajes",
    href: "/servicios/rodajes",
    description: "Set design floral para producciones y editoriales.",
  },
  {
    title: "Eventos",
    href: "/servicios/eventos",
    description: "Diseno floral para todo tipo de celebraciones.",
    sub: ["Corporativos", "Privados"],
  },
  {
    title: "Bodas",
    href: "/servicios/bodas",
    description: "Direccion floral integral para el dia mas importante.",
    comingSoon: true,
  },
];

/* ─── 8-pointed star burst path (normalized -1 to 1) ─── */
const STAR = "M0,-1 L0.18,-0.28 L0.71,-0.71 L0.28,-0.18 L1,0 L0.28,0.18 L0.71,0.71 L0.18,0.28 L0,1 L-0.18,0.28 L-0.71,0.71 L-0.28,0.18 L-1,0 L-0.28,-0.18 L-0.71,-0.71 L-0.18,-0.28Z";

/* ─── Star positions in the 500×420 repeating tile ─── */
const stars = [
  { x: 85, y: 75, s: 32, r: -15 },
  { x: 260, y: 55, s: 24, r: 12 },
  { x: 420, y: 120, s: 38, r: -8 },
  { x: 160, y: 240, s: 28, r: 20 },
  { x: 350, y: 300, s: 34, r: -22 },
  { x: 75, y: 360, s: 20, r: 8 },
  { x: 460, y: 340, s: 26, r: -10 },
];

const dots = [
  { x: 170, y: 40 },
  { x: 30, y: 150 },
  { x: 330, y: 170 },
  { x: 210, y: 330 },
  { x: 455, y: 210 },
  { x: 120, y: 140 },
  { x: 400, y: 390 },
  { x: 250, y: 180 },
  { x: 480, y: 55 },
  { x: 60, y: 260 },
];

/* ─── Floral frame — continuous garland border around the card ─── */
function FloralFrame() {
  const vine = "#5A7A50";
  const leaf = "#6B8C5E";
  const petal1 = "#E8C4C4";
  const petal2 = "#D4908E";
  const center = "#C9A96E";

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 300 400"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {/* ══════ Continuous vine border ══════ */}
      <path
        d="M20 8 Q75 4, 150 8 Q225 4, 280 8
           Q296 8, 296 24 Q292 100, 296 200 Q292 300, 296 376
           Q296 392, 280 392 Q225 396, 150 392 Q75 396, 20 392
           Q4 392, 4 376 Q8 300, 4 200 Q8 100, 4 24
           Q4 8, 20 8Z"
        stroke={vine}
        strokeWidth="1.8"
        opacity="0.4"
      />

      {/* ══════ TOP EDGE — flowers and leaves ══════ */}
      {/* Left flower */}
      <g opacity="0.5">
        <ellipse cx="55" cy="6" rx="9" ry="7" fill={petal1} transform="rotate(-10 55 6)" />
        <ellipse cx="55" cy="4" rx="6" ry="5" fill={petal2} transform="rotate(5 55 4)" />
        <circle cx="55" cy="5" r="2.5" fill={center} opacity="0.7" />
      </g>
      {/* Top leaves */}
      <path d="M80 8 Q88 0, 95 -2 Q90 5, 80 8Z" fill={leaf} opacity="0.45" />
      <path d="M110 6 Q105 -2, 100 -4 Q108 0, 110 6Z" fill={vine} opacity="0.4" />
      {/* Center bud */}
      <g opacity="0.45">
        <ellipse cx="150" cy="5" rx="6" ry="8" fill={petal1} transform="rotate(0 150 5)" />
        <ellipse cx="150" cy="3" rx="4" ry="6" fill={petal2} />
        <circle cx="150" cy="4" r="2" fill={center} opacity="0.6" />
      </g>
      {/* Right leaves */}
      <path d="M195 6 Q200 -2, 208 -3 Q202 3, 195 6Z" fill={leaf} opacity="0.4" />
      <path d="M220 8 Q215 0, 210 -2 Q218 2, 220 8Z" fill={vine} opacity="0.45" />
      {/* Right flower */}
      <g opacity="0.5">
        <ellipse cx="248" cy="6" rx="8" ry="7" fill={petal1} transform="rotate(12 248 6)" />
        <ellipse cx="248" cy="4" rx="5.5" ry="5" fill={petal2} transform="rotate(-5 248 4)" />
        <circle cx="248" cy="5" r="2.5" fill={center} opacity="0.7" />
      </g>

      {/* ══════ BOTTOM EDGE — flowers and leaves ══════ */}
      <g opacity="0.5">
        <ellipse cx="70" cy="394" rx="8" ry="7" fill={petal1} transform="rotate(8 70 394)" />
        <ellipse cx="70" cy="396" rx="5.5" ry="5" fill={petal2} transform="rotate(-5 70 396)" />
        <circle cx="70" cy="395" r="2.5" fill={center} opacity="0.7" />
      </g>
      <path d="M105 392 Q112 400, 118 402 Q110 398, 105 392Z" fill={leaf} opacity="0.45" />
      <g opacity="0.45">
        <ellipse cx="155" cy="395" rx="6" ry="7" fill={petal1} />
        <ellipse cx="155" cy="397" rx="4" ry="5" fill={petal2} />
        <circle cx="155" cy="396" r="2" fill={center} opacity="0.6" />
      </g>
      <path d="M195 392 Q188 400, 182 402 Q190 398, 195 392Z" fill={vine} opacity="0.4" />
      <g opacity="0.5">
        <ellipse cx="235" cy="394" rx="9" ry="7" fill={petal1} transform="rotate(-10 235 394)" />
        <ellipse cx="235" cy="396" rx="6" ry="5" fill={petal2} transform="rotate(5 235 396)" />
        <circle cx="235" cy="395" r="2.5" fill={center} opacity="0.7" />
      </g>

      {/* ══════ LEFT EDGE — leaves and buds ══════ */}
      <path d="M4 60 Q-4 55, -6 48 Q0 52, 4 60Z" fill={leaf} opacity="0.4" />
      <g opacity="0.45">
        <ellipse cx="4" cy="100" rx="7" ry="6" fill={petal1} transform="rotate(-90 4 100)" />
        <ellipse cx="2" cy="100" rx="5" ry="4" fill={petal2} transform="rotate(-90 2 100)" />
        <circle cx="3" cy="100" r="2" fill={center} opacity="0.6" />
      </g>
      <path d="M4 150 Q-4 145, -5 138 Q0 143, 4 150Z" fill={vine} opacity="0.4" />
      <path d="M6 200 Q-2 195, -4 188 Q2 192, 6 200Z" fill={leaf} opacity="0.35" />
      <g opacity="0.45">
        <ellipse cx="4" cy="260" rx="7" ry="6" fill={petal1} transform="rotate(-80 4 260)" />
        <ellipse cx="2" cy="260" rx="5" ry="4" fill={petal2} transform="rotate(-85 2 260)" />
        <circle cx="3" cy="260" r="2" fill={center} opacity="0.6" />
      </g>
      <path d="M4 320 Q-4 315, -5 308 Q0 312, 4 320Z" fill={leaf} opacity="0.4" />

      {/* ══════ RIGHT EDGE — leaves and buds ══════ */}
      <path d="M296 70 Q304 65, 306 58 Q300 62, 296 70Z" fill={vine} opacity="0.4" />
      <g opacity="0.45">
        <ellipse cx="296" cy="130" rx="7" ry="6" fill={petal1} transform="rotate(85 296 130)" />
        <ellipse cx="298" cy="130" rx="5" ry="4" fill={petal2} transform="rotate(90 298 130)" />
        <circle cx="297" cy="130" r="2" fill={center} opacity="0.6" />
      </g>
      <path d="M296 190 Q304 185, 306 178 Q300 183, 296 190Z" fill={leaf} opacity="0.4" />
      <path d="M296 240 Q304 235, 305 228 Q300 233, 296 240Z" fill={vine} opacity="0.35" />
      <g opacity="0.45">
        <ellipse cx="296" cy="310" rx="7" ry="6" fill={petal1} transform="rotate(80 296 310)" />
        <ellipse cx="298" cy="310" rx="5" ry="4" fill={petal2} transform="rotate(85 298 310)" />
        <circle cx="297" cy="310" r="2" fill={center} opacity="0.6" />
      </g>
      <path d="M296 360 Q304 355, 305 348 Q300 353, 296 360Z" fill={leaf} opacity="0.4" />

      {/* ══════ CORNER FLOWERS — larger accents ══════ */}
      {/* Top-left */}
      <g opacity="0.55">
        <ellipse cx="14" cy="14" rx="12" ry="10" fill={petal1} transform="rotate(-25 14 14)" />
        <ellipse cx="12" cy="12" rx="8" ry="7" fill={petal2} transform="rotate(-15 12 12)" />
        <circle cx="13" cy="13" r="3.5" fill={center} opacity="0.7" />
      </g>
      {/* Top-right */}
      <g opacity="0.55">
        <ellipse cx="286" cy="14" rx="12" ry="10" fill={petal1} transform="rotate(20 286 14)" />
        <ellipse cx="288" cy="12" rx="8" ry="7" fill={petal2} transform="rotate(10 288 12)" />
        <circle cx="287" cy="13" r="3.5" fill={center} opacity="0.7" />
      </g>
      {/* Bottom-left */}
      <g opacity="0.55">
        <ellipse cx="14" cy="386" rx="12" ry="10" fill={petal1} transform="rotate(25 14 386)" />
        <ellipse cx="12" cy="388" rx="8" ry="7" fill={petal2} transform="rotate(15 12 388)" />
        <circle cx="13" cy="387" r="3.5" fill={center} opacity="0.7" />
      </g>
      {/* Bottom-right */}
      <g opacity="0.55">
        <ellipse cx="286" cy="386" rx="12" ry="10" fill={petal1} transform="rotate(-20 286 386)" />
        <ellipse cx="288" cy="388" rx="8" ry="7" fill={petal2} transform="rotate(-10 288 388)" />
        <circle cx="287" cy="387" r="3.5" fill={center} opacity="0.7" />
      </g>
    </svg>
  );
}

/* ─── Animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function ServicesStrip() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Terracotta background ── */}
      <div className="absolute inset-0 bg-magnolia-terracota" />

      {/* ── Star pattern overlay ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="stars-bg"
            width="500"
            height="420"
            patternUnits="userSpaceOnUse"
          >
            {stars.map((st, i) => (
              <path
                key={i}
                d={STAR}
                fill="var(--magnolia-pink)"
                opacity="0.55"
                transform={`translate(${st.x} ${st.y}) scale(${st.s}) rotate(${st.r})`}
              />
            ))}
            {dots.map((dt, i) => (
              <circle
                key={`d${i}`}
                cx={dt.x}
                cy={dt.y}
                r="3.5"
                fill="var(--magnolia-pink)"
                opacity="0.45"
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stars-bg)" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header — light text on dark background */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-hand text-2xl text-magnolia-pink block mb-2"
        >
          Lo que hacemos
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-cream font-light mb-12 md:mb-16"
        >
          Servicios
        </motion.h2>

        {/* Cards grid — stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              variants={cardVariants}
              whileHover={
                service.comingSoon
                  ? undefined
                  : {
                      y: -8,
                      rotate: index % 2 === 0 ? -1.5 : 1.5,
                      boxShadow: "0 16px 32px rgba(0,0,0,0.2)",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }
              }
            >
              {service.comingSoon ? (
                <div className="relative block bg-magnolia-cream/60 backdrop-blur-sm border border-dashed border-magnolia-pink/30 p-6 md:p-8 h-full overflow-hidden">
                  <FloralFrame />
                  <div className="relative z-10">
                    <span className="font-display text-2xl md:text-3xl text-magnolia-terracota/40 block leading-tight">
                      {service.title}
                    </span>
                    <p className="font-body text-sm mt-3 text-magnolia-ink/30 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-block font-hand text-base text-magnolia-pink/70">
                      Proximamente
                    </span>
                  </div>
                </div>
              ) : (
                <Link
                  href={service.href}
                  className="group relative block bg-magnolia-cream/95 backdrop-blur-sm border border-magnolia-pink/20 p-6 md:p-8 h-full hover:bg-white transition-colors duration-300 overflow-hidden"
                >
                  <FloralFrame />
                  <div className="relative z-10">
                    <span className="font-display text-2xl md:text-3xl text-magnolia-green block leading-tight">
                      {service.title}
                    </span>
                    <p className="font-body text-sm mt-3 text-magnolia-ink/70 leading-relaxed">
                      {service.description}
                    </p>

                    {service.sub && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.sub.map((tag) => (
                          <span
                            key={tag}
                            className="font-hand text-sm text-magnolia-terracota/60 border border-magnolia-terracota/20 rounded-full px-3 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 flex items-center gap-2 font-hand text-base text-magnolia-green/50 group-hover:text-magnolia-green transition-colors">
                      Descubrir
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      >
                        <path d="M8 24h30M28 14l12 10-12 10" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
