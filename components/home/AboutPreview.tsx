"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section id="nosotras" className="relative">
      {/* ── Cenefa with striped bunting pattern ── */}
      <div className="cenefa" aria-hidden="true" />

      {/* ── Main banner ── */}
      <div className="relative h-[60vh] min-h-[420px] max-h-[620px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/floral-peonies-wall.jpg"
          alt="Ramo de peonías rosas contra muro de piedra"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* ── Kraft / green texture overlay band ── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-4xl mx-4 md:mx-8"
          >
            <div className="relative overflow-hidden px-8 py-10 md:px-16 md:py-14 text-center">
              {/* Green textured background — fully opaque */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url(/images/texture-green-kraft.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="!font-hand text-4xl md:text-5xl lg:text-6xl text-magnolia-cream tracking-wide leading-tight">
                  Nature is the Teacher
                </h2>

                <div className="w-14 h-px bg-magnolia-cream/30 mx-auto mt-5 mb-5" />

                <p className="font-body text-xs md:text-sm text-magnolia-cream/80 leading-relaxed max-w-2xl mx-auto tracking-wide">
                  Cada composición nace de escuchar lo que la flor pide. Trabajamos con lo
                  que la temporada ofrece, respetando los ritmos de la naturaleza para crear
                  arreglos que hablan con calma.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Cenefa bottom ── */}
      <div className="cenefa rotate-180" aria-hidden="true" />
    </section>
  );
}
