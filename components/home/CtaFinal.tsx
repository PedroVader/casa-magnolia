"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CtaFinal() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Diamond pattern background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/pattern-diamonds.jpg)",
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-white/40" />

      {/* ── Content ── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light leading-tight"
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
          className="font-hand text-xl md:text-2xl text-magnolia-ink/70 mt-6 max-w-md mx-auto"
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
