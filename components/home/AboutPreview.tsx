"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section id="nosotras" className="bg-magnolia-blush/20 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative butterfly */}
      <svg
        className="absolute bottom-16 left-8 w-20 h-20 opacity-10 text-magnolia-terracota"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M50 20c-15-10-35-5-40 15s10 35 30 25c-20 10-35 20-30 25s25 5 40-15c15 20 25 20 40 15s-10-15-30-25c20 10 35 0 30-25S65 10 50 20z" />
        <line x1="50" y1="20" x2="50" y2="80" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-magnolia-blush/40 relative overflow-hidden">
              {/* Silhouette placeholder */}
              <div className="absolute inset-0 flex items-end justify-center">
                <svg
                  viewBox="0 0 300 400"
                  fill="var(--magnolia-terracota)"
                  opacity="0.15"
                  className="w-3/4"
                >
                  <ellipse cx="110" cy="100" rx="35" ry="40" />
                  <ellipse cx="190" cy="95" rx="30" ry="38" />
                  <path d="M70 130c0 0 10 80 15 120s5 60 5 150h60c0-50-5-110 0-150s15-100 15-100" />
                  <path d="M155 125c0 0 10 80 15 120s5 60 5 150h55c0-50-5-110 0-150s15-100 15-100" />
                </svg>
              </div>
            </div>

            {/* Decorative star */}
            <svg
              className="absolute -top-4 -right-4 w-12 h-12"
              viewBox="0 0 100 100"
              fill="var(--magnolia-pink)"
            >
              <path d="M50 10c2 15 12 25 30 28-18 3-28 12-30 30-2-18-12-27-30-30 18-3 28-13 30-28z" />
            </svg>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-accent text-lg italic text-magnolia-terracota/70">
              Detras de Casa Magnolia
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-magnolia-green font-light mt-2 leading-tight">
              Dos miradas,
              <br />
              un oficio
            </h2>
            <p className="font-body text-base md:text-lg text-magnolia-ink/70 mt-6 leading-relaxed max-w-lg">
              Casa Magnolia nace de la conversacion entre Lola, florista con
              raices en Bilbao, y Manuela, arquitecta con mirada espacial.
              Juntas transforman flores y espacios en composiciones que hablan
              con calma.
            </p>
            <div className="mt-8">
              <Link
                href="/sobre-nosotras"
                className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-magnolia-green hover:text-magnolia-terracota transition-colors border-b border-magnolia-green/30 pb-1"
              >
                Conocenos
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
      </div>
    </section>
  );
}
