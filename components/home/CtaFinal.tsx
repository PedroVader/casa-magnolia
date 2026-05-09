"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CtaFinal() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* ── Scallop floral pattern background ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Single scallop unit — arch with petals and dots, centered at (0,0) */}
          <g id="scallop-u">
            {/* Arch/fan shape */}
            <path
              d="M-40 0 C-40 -42, -22 -58, 0 -58 C22 -58, 40 -42, 40 0Z"
              fill="#FFF8F0"
            />
            {/* Center petal */}
            <path
              d="M-4 -6 C-3 -22, -0.5 -38, 0 -46 C0.5 -38, 3 -22, 4 -6Z"
              fill="#D4944A"
            />
            {/* Left petal */}
            <path
              d="M-16 -6 C-13 -22, -7 -36, -4 -42 C-5.5 -30, -10 -16, -12 -6Z"
              fill="#CC8840"
            />
            {/* Right petal */}
            <path
              d="M16 -6 C13 -22, 7 -36, 4 -42 C5.5 -30, 10 -16, 12 -6Z"
              fill="#CC8840"
            />
            {/* Dots */}
            <circle cx="-22" cy="-35" r="2.8" fill="#6B7A3A" opacity="0.6" />
            <circle cx="22" cy="-35" r="2.8" fill="#6B7A3A" opacity="0.6" />
            <circle cx="-28" cy="-18" r="2.2" fill="#6B7A3A" opacity="0.5" />
            <circle cx="28" cy="-18" r="2.2" fill="#6B7A3A" opacity="0.5" />
            <circle cx="-10" cy="-14" r="1.8" fill="#6B7A3A" opacity="0.4" />
            <circle cx="10" cy="-14" r="1.8" fill="#6B7A3A" opacity="0.4" />
          </g>

          {/* Repeating tile — 2 columns × 2 staggered rows */}
          <pattern
            id="scallop-pattern"
            width="160"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Pink background — stronger pink */}
            <rect width="160" height="120" fill="#E0A8B0" />
            {/* Row 1 */}
            <use href="#scallop-u" x="40" y="60" />
            <use href="#scallop-u" x="120" y="60" />
            {/* Row 2 — staggered */}
            <use href="#scallop-u" x="0" y="120" />
            <use href="#scallop-u" x="80" y="120" />
            <use href="#scallop-u" x="160" y="120" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#scallop-pattern)" />
      </svg>

      {/* Radial gradient overlay — dark center for text, transparent edges for pattern */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(44,62,40,0.75) 0%, rgba(44,62,40,0.5) 40%, rgba(44,62,40,0.1) 80%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          Tienes un proyecto
          <br />
          en mente?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-lg text-white mt-6 max-w-md mx-auto"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
        >
          Nos encanta escuchar ideas nuevas. Cuentanos que imaginas y lo
          hacemos florecer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-magnolia-green font-hand text-lg hover:bg-magnolia-cream transition-colors shadow-lg"
          >
            Hablemos
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M8 24h30M28 14l12 10-12 10" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
