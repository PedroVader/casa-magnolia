"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const includes = [
  {
    label: "Lanzamientos de producto",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <path d="M24.5 5.5c0.8 3.5 1.5 6 2.5 9.2c0.5 1.2 1.2 1.8 2.5 2l9.2 1.5c-2.5 2.5-5.5 4.8-7.8 7.2c-0.8 0.8-1 1.8-0.5 3l3 9c-3-1.5-6-3.2-9-4.8c-1-0.5-2-0.5-3 0.2l-8.2 5.5c0.8-3.2 1.8-6.5 2.5-9.5c0.3-1.2-0.2-2.2-1-3l-7.5-6.5c3.5-0.2 7-0.5 10.2-1c1.2-0.2 2-0.8 2.5-2l4-10.8z" />
      </svg>
    ),
  },
  {
    label: "Inauguraciones y aperturas",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <path d="M9.5 12.5c0.2-1.5 1.2-2.2 2.8-2.5l23.5 0.2c1.5 0.2 2.5 1 2.8 2.5l0.2 25.5c-0.2 1.5-1.2 2.5-2.8 2.8l-23.8-0.2c-1.5-0.2-2.5-1.2-2.5-2.8l-0.2-25.5z" />
        <path d="M17 7v6.5" />
        <path d="M31 7.2v6.2" />
        <path d="M9.8 18.5l28.5 0.2" />
      </svg>
    ),
  },
  {
    label: "Cenas privadas",
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
    label: "Eventos corporativos",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <path d="M8 38c4-3.5 8.5-8 14-14.5c3-3.5 7.5-8.2 12-12.8c1.2-1.2 2.8-2.5 4-3.2" />
        <path d="M18 22c-3.2-1.5-6.8-1.2-8.2 0.5s0.8 4.5 4.2 5.8c1.5 0.6 3.2 0 4.5-1.2" />
        <path d="M27 18c1-3.5 3.5-5.8 5.5-5.5s2.2 3.8 0.5 7c-0.7 1.3-2.2 2-3.8 1.5" />
      </svg>
    ),
  },
  {
    label: "Fiestas y celebraciones",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
        <path d="M24 14c0.2 2.5 0 5.5-0.2 8.5c-0.2 3-0.3 6.5 0 10c0.1 1.2 0.3 2 0.5 2.5" />
        <path d="M23.5 18c-2.5-3-5.8-5.5-9-6c-3-0.5-5.5 0.8-6.5 3.5c-0.8 2.5 0 5.5 2 8c2.2 2.8 5.5 4 8.5 3.5c2.5-0.5 4.2-2 5.2-4.5" />
        <path d="M24.5 18c2.2-3.2 5.5-5.8 8.5-6.2c3.2-0.5 5.8 0.5 6.8 3.2c0.8 2.5 0 5.8-2.2 8.2c-2.2 2.5-5.2 3.5-8 3c-2.5-0.5-4.2-2.2-5-4.8" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Nos cuentas el tipo de evento, el espacio, el numero de invitados y la atmosfera que buscas.",
  },
  {
    number: "02",
    title: "Concepto creativo",
    description:
      "Diseamos una propuesta floral alineada con la identidad del evento, la marca o la ocasion.",
  },
  {
    number: "03",
    title: "Produccion",
    description:
      "Seleccion de flor en mercado, preparacion en taller y logistica hasta el espacio.",
  },
  {
    number: "04",
    title: "Montaje y recogida",
    description:
      "Instalamos todo en el espacio. Al terminar, lo recogemos sin dejar rastro.",
  },
];

const galleryColors = [
  "bg-magnolia-pink/60",
  "bg-magnolia-mustard/20",
  "bg-magnolia-green/10",
  "bg-magnolia-blush/40",
  "bg-magnolia-pink/30",
  "bg-magnolia-terracota/10",
  "bg-magnolia-mustard/15",
  "bg-magnolia-green/15",
];

export default function EventosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-magnolia-cream pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <svg
          className="absolute top-24 right-8 md:right-20 w-28 md:w-40 h-28 md:h-40 opacity-10"
          viewBox="0 0 200 200"
          fill="var(--magnolia-pink)"
        >
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(72 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(144 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(216 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(288 100 100)" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/servicios"
              className="font-body text-xs tracking-widest uppercase text-magnolia-pink/80 hover:text-magnolia-terracota transition-colors"
            >
              Servicios
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-magnolia-ink leading-[0.9] font-light mt-4"
          >
            Eventos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-magnolia-ink/70 mt-6 max-w-lg leading-relaxed"
          >
            Cada evento tiene su propia personalidad. Creamos propuestas florales
            que refuerzan la identidad del momento: lanzamientos, inauguraciones,
            cenas privadas o corporativos.
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
            <span className="font-accent text-lg italic text-magnolia-ink/50 tracking-wide">
              Adaptado a cada ocasion
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Que hacemos
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
                <span className="text-magnolia-ink/60 mt-0.5">
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
      <section className="bg-magnolia-pink/20 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-lg italic text-magnolia-ink/50 tracking-wide">
              Asi trabajamos
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Proceso
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
                  <span className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-none text-magnolia-ink/15 select-none">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-px bg-magnolia-ink/30" />
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
            <span className="font-accent text-lg italic text-magnolia-ink/50 tracking-wide">
              Trabajos recientes
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Galeria
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`col-span-12 md:col-span-5 aspect-[3/4] ${galleryColors[0]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`col-span-6 md:col-span-7 aspect-[16/9] ${galleryColors[1]}`}
            />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`col-span-6 md:col-span-6 aspect-[16/9] ${galleryColors[5]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className={`col-span-12 md:col-span-6 aspect-[4/3] ${galleryColors[6]}`}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-magnolia-ink py-20 md:py-28 relative overflow-hidden">
        <svg
          className="absolute bottom-8 left-8 w-24 h-24 opacity-5"
          viewBox="0 0 200 200"
          fill="var(--magnolia-pink)"
        >
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(120 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(240 100 100)" />
        </svg>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-cream font-light leading-tight">
              Un evento memorable
              <br />
              empieza por los detalles.
            </h2>
            <p className="font-body text-lg text-magnolia-cream/60 mt-6 max-w-md mx-auto">
              Cuentanos que tipo de evento preparas. Te enviamos una propuesta
              personalizada en 48 horas.
            </p>
            <div className="mt-10">
              <Link
                href="/contacto?tipo=evento"
                className="inline-flex items-center gap-3 px-8 py-4 bg-magnolia-cream text-magnolia-ink font-body text-sm tracking-widest uppercase hover:bg-magnolia-pink transition-colors"
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
