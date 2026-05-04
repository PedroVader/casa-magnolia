"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function CtaFinal() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/flowers-pink-chrysanth.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-magnolia-green/70" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-magnolia-cream text-magnolia-green font-body text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors"
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
