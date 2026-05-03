"use client";

import { motion } from "framer-motion";

export function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-magnolia-cream">
      {/* Decorative vertical stripes - left side */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 opacity-20 overflow-hidden">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 1000"
        >
          <rect x="5" y="0" width="12" height="1000" fill="var(--magnolia-pink)" />
          <rect x="25" y="0" width="12" height="1000" fill="var(--magnolia-green)" />
          <rect x="45" y="0" width="12" height="1000" fill="var(--magnolia-pink)" />
          <rect x="65" y="0" width="12" height="1000" fill="var(--magnolia-green)" />
          <rect x="85" y="0" width="12" height="1000" fill="var(--magnolia-pink)" />
        </svg>
      </div>

      {/* Decorative Matisse-style flower - top right */}
      <svg
        className="absolute top-20 right-8 md:right-20 w-32 md:w-48 h-32 md:h-48 opacity-15"
        viewBox="0 0 200 200"
        fill="var(--magnolia-mustard)"
      >
        <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" />
        <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(72 100 100)" />
        <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(144 100 100)" />
        <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(216 100 100)" />
        <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(288 100 100)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-magnolia-green leading-[0.9] font-light"
            >
              Casa
              <br />
              Magnolia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-accent text-xl md:text-2xl italic text-magnolia-green/70 mt-4"
            >
              Laboratorio floral
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="font-body text-lg md:text-xl text-magnolia-ink/70 mt-6 max-w-md leading-relaxed"
            >
              Diseno floral a cuatro manos, desde Bilbao.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-10"
            >
              <a
                href="#nosotras"
                className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-magnolia-green hover:text-magnolia-terracota transition-colors"
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
                  <path d="M24 8v30M14 28l10 12 10-12" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[3/4] bg-magnolia-green/10 rounded-none overflow-hidden relative">
              {/* Placeholder - replace with actual hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 260"
                  fill="none"
                  className="w-2/3 h-2/3 opacity-20"
                >
                  <path
                    d="M100 30c-30 0-55 15-55 60 0 30 10 50 25 65s35 30 30 75c20-30 15-50 30-75s25-35 25-65c0-45-25-60-55-60z"
                    fill="var(--magnolia-green)"
                  />
                  <path
                    d="M80 130c-5-20-20-30-35-25s-15 25 0 40 35 15 35-15z"
                    fill="var(--magnolia-green)"
                    opacity="0.5"
                  />
                  <path
                    d="M120 130c5-20 20-30 35-25s15 25 0 40-35 15-35-15z"
                    fill="var(--magnolia-green)"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-magnolia-cream/40 to-transparent" />
            </div>

            {/* Decorative star */}
            <svg
              className="absolute -bottom-6 -left-6 w-16 h-16 text-magnolia-pink"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
