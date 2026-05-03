"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CtaFinal() {
  return (
    <section className="bg-magnolia-green py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <svg
        className="absolute top-8 left-8 w-16 h-16 opacity-10"
        viewBox="0 0 100 100"
        fill="var(--magnolia-cream)"
      >
        <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
      </svg>
      <svg
        className="absolute bottom-12 right-12 w-24 h-24 opacity-10"
        viewBox="0 0 200 200"
        fill="var(--magnolia-cream)"
      >
        <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" />
        <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(120 100 100)" />
        <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(240 100 100)" />
      </svg>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-cream font-light leading-tight">
            Tienes un proyecto
            <br />
            en mente?
          </h2>
          <p className="font-body text-lg text-magnolia-cream/70 mt-6 max-w-md mx-auto">
            Nos encanta escuchar ideas nuevas. Cuentanos que imaginas y lo
            hacemos florecer.
          </p>
          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-magnolia-cream text-magnolia-green font-body text-sm tracking-widest uppercase hover:bg-magnolia-pink transition-colors"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
