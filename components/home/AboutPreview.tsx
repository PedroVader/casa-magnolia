"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section id="nosotras" className="bg-white py-28 md:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/about-lola-manuela.jpg"
                alt="Lola y Manuela, fundadoras de Casa Magnolia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
            <div className="separator w-12 mt-6 mb-6" />
            <p className="font-body text-base md:text-lg text-magnolia-ink/70 leading-relaxed max-w-lg">
              Casa Magnolia nace de la conversacion entre Lola, florista con
              raices en Bilbao, y Manuela, arquitecta con mirada espacial.
              Juntas transforman flores y espacios en composiciones que hablan
              con calma.
            </p>
            <div className="mt-8">
              <Link
                href="/sobre-nosotras"
                className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-magnolia-green hover:text-magnolia-terracota transition-colors border-b border-magnolia-line pb-1"
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
