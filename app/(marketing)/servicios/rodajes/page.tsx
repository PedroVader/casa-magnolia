"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    label: "Rodajes publicitarios",
    description: "Set design floral para campanas de publicidad, marcas de moda, cosmética y lifestyle.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <path d="M30.5 24.2c0.2 3.5-2.5 6.8-6.2 7.2c-3.8 0.3-7-2.5-7.3-6.2c-0.3-3.5 2.5-6.8 6.2-7c3.5-0.3 7 2.5 7.3 6z" />
        <path d="M24.2 10.5l-0.5-4.8" />
        <path d="M24 31.5l0.3 5.2" />
        <path d="M14 14.5l-3.5-3.2" />
        <path d="M33.5 33l3.8 3.5" />
        <path d="M10.8 24.5l-5 0.2" />
        <path d="M37.2 23.8l4.8-0.3" />
        <path d="M33.2 14.8l3.5-3.8" />
        <path d="M14.5 33.2l-3.2 3.8" />
      </svg>
    ),
  },
  {
    label: "Editoriales de moda",
    description: "Colaboracion con directores de arte y estilistas para editoriales en revista y digital.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <path d="M24 14c0.2 2.5 0 5.5-0.2 8.5c-0.2 3-0.3 6.5 0 10c0.1 1.2 0.3 2 0.5 2.5" />
        <path d="M23.5 18c-2.5-3-5.8-5.5-9-6c-3-0.5-5.5 0.8-6.5 3.5c-0.8 2.5 0 5.5 2 8c2.2 2.8 5.5 4 8.5 3.5c2.5-0.5 4.2-2 5.2-4.5" />
        <path d="M24.5 18c2.2-3.2 5.5-5.8 8.5-6.2c3.2-0.5 5.8 0.5 6.8 3.2c0.8 2.5 0 5.8-2.2 8.2c-2.2 2.5-5.2 3.5-8 3c-2.5-0.5-4.2-2.2-5-4.8" />
      </svg>
    ),
  },
  {
    label: "Respuesta rapida",
    description: "Entendemos los tiempos de produccion. Presupuesto en 24 h, montaje en plazos ajustados.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <path d="M7 24.5c3.5-0.5 8-0.2 13 0c5 0.2 10.5 0.5 16-0.2c1.8-0.2 3.2-0.5 4.5-0.5" />
        <path d="M32.5 15c2.5 2.5 5 5.2 7.5 8.5c0.5 0.5 0.8 1 0.8 1.2" />
        <path d="M32 34.5c2.8-2.8 5.5-5.8 8-9.5c0.3-0.5 0.5-0.8 0.5-1" />
      </svg>
    ),
  },
  {
    label: "Equipo movil",
    description: "Nos desplazamos a cualquier localizacion con nuestro equipo, material y flores preparadas.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
        <path d="M24.2 4.5c-5 0.2-9.2 2.5-11.5 6c-2.5 3.8-3 8.2-1.2 12.5c2 4.5 5.5 9 9 13c1.5 1.8 3 3.2 3.8 4.5c0.8-1.2 2-2.8 3.5-4.8c3.5-4 7-8.5 9-13c1.5-4 1.2-8.5-1.2-12.2c-2.2-3.5-6.2-5.8-11.2-6z" />
        <path d="M28.5 18.5c0.5 2.5-0.5 4.8-2.5 6c-2 1.2-4.5 1-6.2-0.5c-1.8-1.5-2.5-4-1.5-6.2c1-2.2 3.2-3.5 5.5-3.5c2.2 0 4.2 1.5 4.8 3.8" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Briefing y referencias",
    description:
      "Recibimos el briefing, el moodboard del director de arte o la referencia visual que tengais. Lo estudiamos el mismo dia.",
  },
  {
    number: "02",
    title: "Propuesta y presupuesto",
    description:
      "En 24 horas enviamos propuesta floral con estimacion de coste, opciones de flor y alternativas de temporada.",
  },
  {
    number: "03",
    title: "Produccion y set",
    description:
      "Nos desplazamos al set con todo preparado. Montamos, ajustamos en directo segun necesidades de camara y desmontamos al terminar.",
  },
];

const galleryColors = [
  "bg-magnolia-green/15",
  "bg-magnolia-ink/10",
  "bg-magnolia-blush/30",
  "bg-magnolia-green/10",
  "bg-magnolia-mustard/15",
  "bg-magnolia-ink/5",
];

export default function RodajesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-magnolia-green pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <svg
          className="absolute bottom-12 right-8 md:right-20 w-32 md:w-48 h-32 md:h-48 opacity-10"
          viewBox="0 0 100 100"
          fill="var(--magnolia-cream)"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/servicios"
              className="font-body text-xs tracking-widest uppercase text-magnolia-cream/50 hover:text-magnolia-cream transition-colors"
            >
              Servicios
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-magnolia-cream leading-[0.9] font-light mt-4"
          >
            Rodajes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-magnolia-cream/70 mt-6 max-w-lg leading-relaxed"
          >
            Set design floral para productoras, directores de arte y estilistas.
            Publicidad, cine y editoriales de moda. Respuesta rapida, equipo
            movil.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-magnolia-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-lg italic text-magnolia-green/60 tracking-wide">
              Para profesionales
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Que ofrecemos
            </h2>
          </motion.div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5"
              >
                <span className="text-magnolia-green mt-1">{feature.icon}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-magnolia-ink font-light">
                    {feature.label}
                  </h3>
                  <p className="font-body text-base text-magnolia-ink/70 leading-relaxed mt-2">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-magnolia-green/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-lg italic text-magnolia-green/60 tracking-wide">
              Sin complicaciones
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Asi funciona
            </h2>
          </motion.div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="font-display text-5xl md:text-6xl font-light leading-none text-magnolia-green/25 select-none block">
                  {step.number}
                </span>
                <div className="flex items-center gap-3 mt-4 mb-3">
                  <span className="w-8 h-px bg-magnolia-green/40" />
                  <h3 className="font-display text-xl md:text-2xl text-magnolia-ink font-light">
                    {step.title}
                  </h3>
                </div>
                <p className="font-body text-base text-magnolia-ink/70 leading-relaxed">
                  {step.description}
                </p>
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
            <span className="font-accent text-lg italic text-magnolia-green/60 tracking-wide">
              En set
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Trabajos
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`col-span-12 md:col-span-8 aspect-[16/9] ${galleryColors[0]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`col-span-6 md:col-span-4 aspect-square ${galleryColors[1]}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`col-span-6 md:col-span-4 aspect-[3/4] ${galleryColors[2]}`}
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
              className={`col-span-6 md:col-span-4 aspect-square ${galleryColors[4]}`}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-magnolia-green py-20 md:py-28 relative overflow-hidden">
        <svg
          className="absolute top-10 left-10 w-20 h-20 opacity-10"
          viewBox="0 0 100 100"
          fill="var(--magnolia-cream)"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>
        <svg
          className="absolute bottom-10 right-10 w-16 h-16 opacity-10"
          viewBox="0 0 200 200"
          fill="var(--magnolia-cream)"
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
              Tienes una produccion
              <br />
              en marcha?
            </h2>
            <p className="font-body text-lg text-magnolia-cream/60 mt-6 max-w-md mx-auto">
              Envianos el briefing. Te respondemos en 24 horas con propuesta y
              presupuesto.
            </p>
            <div className="mt-10">
              <Link
                href="/contacto?tipo=rodaje"
                className="inline-flex items-center gap-3 px-8 py-4 bg-magnolia-cream text-magnolia-green font-body text-sm tracking-widest uppercase hover:bg-magnolia-pink transition-colors"
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
