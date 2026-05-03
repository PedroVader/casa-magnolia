"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const includes = [
  {
    label: "Ceremonia",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <path d="M24.2 4.5c-5 0.2-9.2 2.5-11.5 6c-2.5 3.8-3 8.2-1.2 12.5c2 4.5 5.5 9 9 13c1.5 1.8 3 3.2 3.8 4.5c0.8-1.2 2-2.8 3.5-4.8c3.5-4 7-8.5 9-13c1.5-4 1.2-8.5-1.2-12.2c-2.2-3.5-6.2-5.8-11.2-6z" />
      </svg>
    ),
  },
  {
    label: "Banquete",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <path d="M16.5 5.5c-0.2 3.5-0.5 7-0.2 10.5c0.2 1.5 0.8 2.5 1.5 3" />
        <path d="M21 5.2c0 3.5-0.2 7 0 10.5c0.1 1.5 0.5 2.5 1.2 3" />
        <path d="M25.5 5.5c0.2 3.2 0.2 6.8 0 10.2c-0.1 1.5-0.5 2.8-1.2 3.2" />
        <path d="M30 5.8c0.3 3 0.5 6.5 0.2 10c-0.2 1.5-0.8 2.5-1.8 3.2" />
        <path d="M17.8 19c1.5 1.2 3.5 2 5.8 2.2c2.5 0.2 4.8-0.5 6.5-1.8" />
        <path d="M23.2 21.5c0.2 3.5 0 7.5 0.2 11.5c0.1 3.2-0.2 6.5 0.5 9.5" />
      </svg>
    ),
  },
  {
    label: "Ramo de novia",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <circle cx="24" cy="22" r="2.8" fill="currentColor" stroke="none" />
        <path d="M22.5 20c-2.5-4.2-6.8-6.5-8.2-5.5s0.3 5.8 3.2 9.2c1.2 1.4 3.1 1.8 5 0.8" />
        <path d="M25.8 19.5c1.8-4.5 5.6-7.3 7.2-6.5s0.5 5.5-2 9.3c-1 1.5-2.8 2.1-4.8 1.3" />
        <path d="M26 23.8c4.3 1.2 7.8 4 7.5 5.8s-4.5 1.8-8.2 0.2c-1.5-0.7-2.5-2.2-2.2-4.2" />
        <path d="M22 24.2c-4 2-5.8 5.5-4.8 7s4.8 0.2 7.5-2.5c1.1-1.1 1.3-3 0.2-4.5" />
        <path d="M24 27c0.2 3 -0.5 7.5 0 12.5c0.2 1.8 -0.3 3.2 0.5 4" />
      </svg>
    ),
  },
  {
    label: "Espacios",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <path d="M8 38c4-3.5 8.5-8 14-14.5c3-3.5 7.5-8.2 12-12.8c1.2-1.2 2.8-2.5 4-3.2" />
        <path d="M18 22c-3.2-1.5-6.8-1.2-8.2 0.5s0.8 4.5 4.2 5.8c1.5 0.6 3.2 0 4.5-1.2" />
        <path d="M27 18c1-3.5 3.5-5.8 5.5-5.5s2.2 3.8 0.5 7c-0.7 1.3-2.2 2-3.8 1.5" />
      </svg>
    ),
  },
  {
    label: "Montaje y desmontaje",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <path d="M16.5 42c-2.2-1-3.8-3.2-4.5-5.5l-1.8-6.5c-0.3-1.2 0.2-2 1.2-2.2s1.8 0.5 2.2 1.5l1.5 4" />
        <path d="M18 21c-0.2-3-0.5-6.5-0.3-9.5c0.1-1.5 0.8-2.5 2-2.5s2 1 2 2.5l-0.2 9.5" />
        <path d="M21.5 21l0.2-10.5c0.1-1.5 0.8-2.3 1.8-2.3s1.8 0.8 2 2.2l0.2 10.8" />
        <path d="M25.8 21.5l0.5-8.8c0.1-1.5 0.8-2.2 1.8-2s1.5 1 1.5 2.5l-0.5 8.8" />
        <path d="M15.2 33.5c-0.2-2 0-4.5 0.5-6.8c0.5-2.5 1-4.5 2.2-5.5c1.8-1.5 5.2-1.2 7.8-0.8c2.8 0.5 5.5 0.5 7 2c1.2 1.2 1.5 3 1 5.5c-0.8 3.5-1.5 6.2-3 8.5c-1.8 2.8-4.2 4.5-7 5c-2.5 0.5-5-0.2-7-1.5" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Primera reunion",
    description:
      "Nos conocemos, escuchamos vuestra historia y entendemos el espacio, la luz y el tono que buscais.",
  },
  {
    number: "02",
    title: "Propuesta visual",
    description:
      "Preparamos un moodboard con paleta de color, flores de temporada y referencias de estilo.",
  },
  {
    number: "03",
    title: "Produccion",
    description:
      "Seleccionamos las flores en mercado, preparamos cada pieza en nuestro taller y coordinamos la logistica.",
  },
  {
    number: "04",
    title: "Dia de la boda",
    description:
      "Montamos todo en el espacio, ajustamos cada detalle y nos encargamos del desmontaje al final.",
  },
];

const galleryColors = [
  "bg-magnolia-terracota/20",
  "bg-magnolia-pink",
  "bg-magnolia-blush/40",
  "bg-magnolia-green/15",
  "bg-magnolia-mustard/20",
  "bg-magnolia-terracota/10",
  "bg-magnolia-pink/60",
  "bg-magnolia-blush/20",
];

export default function BodasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-magnolia-cream pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <svg
          className="absolute top-20 right-8 md:right-16 w-24 md:w-36 h-24 md:h-36 opacity-10"
          viewBox="0 0 48 48"
          fill="none"
          stroke="var(--magnolia-terracota)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.5 28c-0.5 4.2 1.5 8 5 10.2c3 1.8 6.5 2.5 10 1.8c3.5-0.8 6-3 7.5-6c1.5-3.2 1.2-7-0.2-10c-1.5-3-4.2-5-7.5-5.5c-3.5-0.5-7 0.5-9.5 2.8c-2.5 2.2-4 5-5.2 7" />
          <path d="M19.5 18.5l2-4.5l2.8-2.8l3 0.2l2.5 3l1.8 4.2" />
          <path d="M21.5 14l2.8 5" />
          <path d="M29.5 14.5l-5.2 4.5" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/servicios"
              className="font-body text-xs tracking-widest uppercase text-magnolia-terracota/60 hover:text-magnolia-terracota transition-colors"
            >
              Servicios
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-magnolia-terracota leading-[0.9] font-light mt-4"
          >
            Bodas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-magnolia-ink/70 mt-6 max-w-lg leading-relaxed"
          >
            Direccion floral integral para el dia mas importante. Trabajamos con
            flores de temporada, paletas personalizadas y un cuidado obsesivo por
            cada detalle.
          </motion.p>
        </div>
      </section>

      {/* Que incluye */}
      <section className="bg-magnolia-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-lg italic text-magnolia-terracota/70 tracking-wide">
              Todo cuidado
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Que incluye
            </h2>
          </motion.div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4 py-4 border-b border-magnolia-ink/10"
              >
                <span className="text-magnolia-terracota mt-0.5">
                  {item.icon}
                </span>
                <span className="font-body text-base text-magnolia-ink leading-relaxed">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-magnolia-terracota/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-lg italic text-magnolia-terracota/70 tracking-wide">
              Paso a paso
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Nuestro proceso
            </h2>
          </motion.div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-none text-magnolia-terracota/30 select-none">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-px bg-magnolia-terracota/40" />
                      <h3 className="font-display text-xl md:text-2xl text-magnolia-ink font-light">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-base text-magnolia-ink/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-magnolia-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <span className="font-accent text-lg italic text-magnolia-terracota/70 tracking-wide">
              Inspiracion
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Galeria
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`col-span-12 md:col-span-7 aspect-[4/3] ${galleryColors[0]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`col-span-6 md:col-span-5 aspect-[3/4] ${galleryColors[1]}`}
            />

            {/* Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`col-span-6 md:col-span-4 aspect-square ${galleryColors[2]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`col-span-12 md:col-span-4 aspect-[4/3] ${galleryColors[3]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`col-span-6 md:col-span-4 aspect-[3/4] ${galleryColors[4]}`}
            />

            {/* Row 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`col-span-6 md:col-span-5 aspect-[4/3] ${galleryColors[5]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className={`col-span-6 md:col-span-3 aspect-square ${galleryColors[6]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`col-span-12 md:col-span-4 aspect-[4/3] ${galleryColors[7]}`}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-magnolia-terracota py-20 md:py-28 relative overflow-hidden">
        <svg
          className="absolute top-8 right-8 w-20 h-20 opacity-10"
          viewBox="0 0 100 100"
          fill="var(--magnolia-cream)"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-cream font-light leading-tight">
              Tu boda merece
              <br />
              flores con alma.
            </h2>
            <p className="font-body text-lg text-magnolia-cream/70 mt-6 max-w-md mx-auto">
              Cuentanos vuestra historia. Nosotras nos encargamos de que las
              flores la cuenten tambien.
            </p>
            <div className="mt-10">
              <Link
                href="/contacto?tipo=boda"
                className="inline-flex items-center gap-3 px-8 py-4 bg-magnolia-cream text-magnolia-terracota font-body text-sm tracking-widest uppercase hover:bg-magnolia-pink transition-colors"
              >
                Pide presupuesto
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
    </>
  );
}
