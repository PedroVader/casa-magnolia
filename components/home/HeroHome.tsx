"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

export function HeroHome() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Striped pattern background - tiled */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/pattern-stripes.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Subtle paper texture overlay for depth */}
      <div className="absolute inset-0 bg-magnolia-cream/10" />

      {/* Text content - centered */}
      <div className="relative z-10 text-center px-6 mt-16 md:mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-magnolia-green leading-[0.9] font-light"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="block"
          >
            Casa
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="block"
          >
            Magnolia
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-hand text-2xl md:text-3xl lg:text-4xl text-magnolia-green/70 mt-6"
        >
          Laboratorio floral
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14"
        >
          <Button href="#nosotras" variant="primary" size="lg">
            Descubrir
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
