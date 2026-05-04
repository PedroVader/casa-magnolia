"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroHome() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background image with slow zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-bouquet.jpg"
          alt="Ramo artesanal de Casa Magnolia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Text content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8 pb-20 md:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] font-light"
        >
          Casa
          <br />
          Magnolia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="font-accent text-xl md:text-2xl lg:text-3xl italic text-white/80 mt-4"
        >
          Laboratorio floral
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#nosotras"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors border-b border-white/30 pb-1"
          >
            Descubrir
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M24 8v30M14 28l10 12 10-12" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
