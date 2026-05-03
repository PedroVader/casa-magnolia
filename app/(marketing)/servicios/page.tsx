"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Data ─── */

interface ServiceCardData {
  number: string;
  title: string;
  href: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const services: ServiceCardData[] = [
  {
    number: "01",
    title: "Bodas",
    href: "/servicios/bodas",
    bgColor: "bg-magnolia-terracota",
    textColor: "text-magnolia-cream",
    accentColor: "text-magnolia-cream/40",
    description:
      "Direccion floral integral para el dia mas importante. Desde la primera reunion hasta el ultimo petalo del banquete.",
    tags: ["Ceremonia", "Banquete", "Ramo", "Espacios"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true">
        <path d="M24 8c-2 6-6 10-6 16s3 10 6 12c3-2 6-6 6-12s-4-10-6-16z" />
        <path d="M20 20c-4-2-8-1-10 2s-1 7 2 9c2 1.5 4.5 1.5 6.5 0" />
        <path d="M28 20c4-2 8-1 10 2s1 7-2 9c-2 1.5-4.5 1.5-6.5 0" />
        <path d="M24 36v6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Eventos",
    href: "/servicios/eventos",
    bgColor: "bg-magnolia-pink",
    textColor: "text-magnolia-ink",
    accentColor: "text-magnolia-ink/25",
    description:
      "Lanzamientos, inauguraciones, cenas privadas y corporativos. Cada espacio pide su propia personalidad floral.",
    tags: ["Corporativos", "Cenas", "Lanzamientos", "Aperturas"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true">
        <path d="M10 38c2-4 5-8 8-10c3-2 6-2 8 0c2 2 2 5 0 8c-2 3-6 5-10 5c-2 0-4-1-6-3z" />
        <path d="M26 28c-2-4-1-8 2-10c3-2 7-1 9 2c2 3 1 7-2 9c-1.5 1-3.5 1-5 0" />
        <path d="M18 28c2-4 1-8-2-10c-3-2-7-1-9 2c-2 3-1 7 2 9c1.5 1 3.5 1 5 0" />
        <path d="M22 18c-1-4 0-8 3-10c3-2 6 0 7 3c1 3-1 7-4 8c-1.5 0.5-3.5 0-4.5-1" />
        <circle cx="22" cy="28" r="2.5" fill="currentColor" stroke="none" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Rodajes",
    href: "/servicios/rodajes",
    bgColor: "bg-magnolia-green",
    textColor: "text-magnolia-cream",
    accentColor: "text-magnolia-cream/30",
    description:
      "Set design floral para publicidad, cine y editoriales de moda. Equipo movil, respuesta en 24 horas.",
    tags: ["Publicidad", "Editoriales", "Cine", "Set design"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true">
        <path d="M12 12h24v20H12z" />
        <path d="M18 32v6" />
        <path d="M30 32v6" />
        <path d="M14 38h20" />
        <circle cx="24" cy="22" r="5" />
        <circle cx="24" cy="22" r="1.5" fill="currentColor" stroke="none" opacity="0.3" />
        <path d="M16 16h2" />
        <circle cx="33" cy="16" r="1" fill="currentColor" stroke="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Hoteles y Restaurantes",
    href: "/servicios/hoteles-restaurantes",
    bgColor: "bg-magnolia-mustard",
    textColor: "text-magnolia-ink",
    accentColor: "text-magnolia-ink/20",
    description:
      "Flores frescas cada semana, sin pensar en ellas. Un servicio de suscripcion mensual pensado para espacios que cuidan lo visible y lo sutil.",
    tags: ["Suscripcion", "Semanal", "Temporada", "Mantenimiento"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true">
        <path d="M16 36c0-6 2-12 8-16c6 4 8 10 8 16" />
        <path d="M12 36h24" />
        <path d="M24 20c0-4 2-8 5-10" />
        <path d="M24 20c0-4-2-8-5-10" />
        <path d="M20 28c-3-1-5 0-6 2" />
        <path d="M28 28c3-1 5 0 6 2" />
        <path d="M24 26v10" />
      </svg>
    ),
  },
];

const values = [
  {
    label: "A medida",
    text: "Cada proyecto empieza en blanco. Sin plantillas, sin formulas. Escuchamos, observamos y proponemos.",
  },
  {
    label: "Temporada",
    text: "Trabajamos con flor de temporada y de proximidad. Lo que el campo ofrece, nosotras lo traducimos.",
  },
  {
    label: "Detalle",
    text: "Un petalo fuera de sitio se nota. Una mesa bien resuelta se siente. Cuidamos lo que otros no ven.",
  },
];

/* ─── Page ─── */

export default function ServiciosPage() {
  return (
    <>
      {/* ──────────────── Hero ──────────────── */}
      <section className="relative bg-magnolia-cream pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        {/* Decorative elements */}
        <svg
          className="absolute top-20 right-6 md:right-16 w-32 md:w-48 h-32 md:h-48 opacity-[0.06]"
          viewBox="0 0 100 100"
          fill="var(--magnolia-terracota)"
          aria-hidden="true"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>
        <svg
          className="absolute bottom-12 left-8 md:left-24 w-20 md:w-28 h-20 md:h-28 opacity-[0.05]"
          viewBox="0 0 100 100"
          fill="var(--magnolia-pink)"
          aria-hidden="true"
        >
          <path d="M50 10c8 0 14 18 14 28s-6 12-14 12-14-2-14-12 6-28 14-28z" />
          <path d="M50 10c8 0 14 18 14 28s-6 12-14 12-14-2-14-12 6-28 14-28z" transform="rotate(72 50 50)" />
          <path d="M50 10c8 0 14 18 14 28s-6 12-14 12-14-2-14-12 6-28 14-28z" transform="rotate(144 50 50)" />
          <path d="M50 10c8 0 14 18 14 28s-6 12-14 12-14-2-14-12 6-28 14-28z" transform="rotate(216 50 50)" />
          <path d="M50 10c8 0 14 18 14 28s-6 12-14 12-14-2-14-12 6-28 14-28z" transform="rotate(288 50 50)" />
        </svg>

        {/* Vertical decorative line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 md:h-32 bg-magnolia-terracota/15 origin-top hidden md:block"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="font-accent text-lg md:text-xl italic text-magnolia-terracota/60 tracking-wide"
            >
              Lo que hacemos
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-magnolia-terracota leading-[0.9] font-light mt-3"
            >
              Servicios
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
              className="w-16 h-px bg-magnolia-terracota/30 mt-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
              className="font-body text-lg md:text-xl text-magnolia-ink/60 mt-6 max-w-xl leading-relaxed"
            >
              Cuatro maneras de trabajar con flores. Un mismo cuidado por el
              detalle, la temporada y el espacio. Sin formulas: cada proyecto
              empieza con una conversacion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──────────────── Services Grid ──────────────── */}
      <section className="bg-magnolia-cream pb-8 md:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" as const }}
              >
                <Link
                  href={service.href}
                  className={`group block ${service.bgColor} overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-magnolia-ink/10`}
                >
                  {/* Image area with icon and number */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    {/* Large background number */}
                    <span
                      className={`absolute top-4 left-6 md:top-6 md:left-8 font-display text-[7rem] md:text-[9rem] leading-none ${service.accentColor} select-none`}
                    >
                      {service.number}
                    </span>

                    {/* Centered icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 md:w-24 md:h-24 ${service.textColor} opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Bottom gradient */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent`} />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h2 className={`font-display text-3xl md:text-4xl ${service.textColor} leading-tight font-light`}>
                          {service.title}
                        </h2>
                        <p className={`font-body text-sm md:text-base mt-3 ${service.textColor} opacity-75 leading-relaxed max-w-sm`}>
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow circle */}
                      <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border ${service.textColor} border-current/20 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}>
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <path d="M8 24h30M28 14l12 10-12 10" />
                        </svg>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-5 md:mt-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`font-body text-[10px] md:text-xs tracking-widest uppercase ${service.textColor} opacity-40 border border-current/15 px-3 py-1`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── Divider ──────────────── */}
      <section className="bg-magnolia-cream py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-magnolia-ink/8" />
            <svg
              viewBox="0 0 48 48"
              fill="var(--magnolia-terracota)"
              className="w-4 h-4 opacity-30"
              aria-hidden="true"
            >
              <path d="M24 8c2 8 8 14 16 16-8 2-14 8-16 16-2-8-8-14-16-16 8-2 14-8 16-16z" />
            </svg>
            <div className="flex-1 h-px bg-magnolia-ink/8" />
          </div>
        </div>
      </section>

      {/* ──────────────── Philosophy / Values ──────────────── */}
      <section className="bg-magnolia-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: editorial text */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" as const }}
              >
                <span className="font-accent text-base md:text-lg italic text-magnolia-terracota/50 tracking-wide">
                  Nuestra manera
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-2">
                  Cada proyecto
                  <br />
                  es unico.
                </h2>

                <div className="w-10 h-px bg-magnolia-terracota/25 mt-8" />

                <p className="font-body text-base md:text-lg text-magnolia-ink/60 leading-relaxed mt-8 max-w-md">
                  No repetimos formulas. Escuchamos el espacio, la luz, la
                  ocasion y las personas. Despues proponemos. A veces es un
                  solo jarrón en el lugar exacto. A veces es toda una
                  direccion floral.
                </p>
                <p className="font-body text-base md:text-lg text-magnolia-ink/60 leading-relaxed mt-4 max-w-md">
                  Lo que siempre se mantiene: la honestidad con la flor, el
                  cuidado por el detalle y el respeto por lo que cada estacion
                  nos ofrece.
                </p>
              </motion.div>
            </div>

            {/* Right: three value blocks */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" as const }}
                    className="relative"
                  >
                    {/* Decorative number */}
                    <span className="font-display text-5xl md:text-6xl font-light leading-none text-magnolia-terracota/10 select-none">
                      0{index + 1}
                    </span>
                    <div className="mt-3">
                      <h3 className="font-display text-xl md:text-2xl text-magnolia-ink font-light">
                        {value.label}
                      </h3>
                      <div className="w-6 h-px bg-magnolia-terracota/20 mt-3 mb-3" />
                      <p className="font-body text-sm text-magnolia-ink/55 leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── Editorial quote ──────────────── */}
      <section className="relative bg-magnolia-terracota/[0.04] py-20 md:py-28 overflow-hidden">
        {/* Decorative patterns */}
        <svg
          className="absolute -top-8 -left-8 w-40 h-40 opacity-[0.04]"
          viewBox="0 0 200 200"
          fill="var(--magnolia-terracota)"
          aria-hidden="true"
        >
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(120 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(240 100 100)" />
        </svg>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            {/* Quote mark */}
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="w-8 h-8 mx-auto mb-6 text-magnolia-terracota/20"
              aria-hidden="true"
            >
              <path
                d="M8 28c0-6 2-10 4-13s5-5 8-6l1 2c-2 1-4 3-5 5s-1.5 4-1.5 6H18c2 0 3 1 3 3v6c0 2-1 3-3 3h-7c-2 0-3-1-3-3v-3zm18 0c0-6 2-10 4-13s5-5 8-6l1 2c-2 1-4 3-5 5s-1.5 4-1.5 6H36c2 0 3 1 3 3v6c0 2-1 3-3 3h-7c-2 0-3-1-3-3v-3z"
                fill="currentColor"
              />
            </svg>

            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-magnolia-ink/80 font-light leading-snug">
              Las flores no decoran. Completan un espacio,
              <br className="hidden md:block" />
              cuentan algo que las palabras no pueden.
            </blockquote>

            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-8 h-px bg-magnolia-terracota/25" />
              <span className="font-accent text-sm italic text-magnolia-terracota/50 tracking-wide">
                Lola y Manuela
              </span>
              <div className="w-8 h-px bg-magnolia-terracota/25" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────── Process strip ──────────────── */}
      <section className="bg-magnolia-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="font-accent text-base md:text-lg italic text-magnolia-terracota/50 tracking-wide">
              Asi trabajamos
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-magnolia-ink font-light leading-tight mt-2">
              Proceso
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
            {[
              {
                step: "01",
                title: "Conversacion",
                text: "Nos conocemos. Escuchamos tus ideas, el espacio, la fecha y el tono que buscas.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
                    <path d="M10 34c-2-2-3-5-3-8c0-8 7.5-14.5 17-14.5s17 6.5 17 14.5-7.5 14.5-17 14.5c-2.5 0-5-0.5-7-1.3L10 42v-8z" />
                    <circle cx="18" cy="26" r="1.2" fill="currentColor" stroke="none" />
                    <circle cx="24" cy="26" r="1.2" fill="currentColor" stroke="none" />
                    <circle cx="30" cy="26" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Propuesta",
                text: "Presentamos un concepto visual: paleta, tipo de flor, composicion y presupuesto.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
                    <path d="M10 8h28v32H10z" />
                    <path d="M16 16h16" />
                    <path d="M16 22h12" />
                    <path d="M16 28h8" />
                    <path d="M30 26c2-2 5-2 6 0s0 5-3 7c-3-2-4-5-3-7z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Produccion",
                text: "Seleccionamos la flor, preparamos los arreglos y coordinamos toda la logistica.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
                    <path d="M14 40c0-4 2-10 10-14c8 4 10 10 10 14" />
                    <path d="M24 26c0-6 3-12 6-15" />
                    <path d="M24 26c0-6-3-12-6-15" />
                    <path d="M18 22c-3 0-5 1-6 3" />
                    <path d="M30 22c3 0 5 1 6 3" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Montaje",
                text: "Llegamos, montamos, ajustamos cada detalle in situ y nos retiramos en silencio.",
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
                    <path d="M8.5 25.5c2.5 1.5 5 3.8 7.5 6.5c1.2 1.5 2.5 3 3.8 4.5c2-4 4.5-8.5 8-13c3.5-4.5 7.2-8.5 11.5-12c1-0.8 1.8-1.5 2.5-1.8" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
                className="text-center"
              >
                {/* Icon in circle */}
                <div className="w-16 h-16 mx-auto rounded-full border border-magnolia-ink/10 flex items-center justify-center text-magnolia-terracota/60">
                  {item.icon}
                </div>

                <span className="font-display text-3xl md:text-4xl font-light leading-none text-magnolia-terracota/15 select-none block mt-5">
                  {item.step}
                </span>

                <h3 className="font-display text-lg md:text-xl text-magnolia-ink font-light mt-2">
                  {item.title}
                </h3>

                <p className="font-body text-sm text-magnolia-ink/50 leading-relaxed mt-2 max-w-[200px] mx-auto">
                  {item.text}
                </p>

                {/* Connector line (not on last) */}
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/3 w-px h-8 bg-magnolia-ink/8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CTA ──────────────── */}
      <section className="bg-magnolia-green py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <svg
          className="absolute top-8 left-8 w-20 h-20 opacity-10"
          viewBox="0 0 100 100"
          fill="var(--magnolia-cream)"
          aria-hidden="true"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>
        <svg
          className="absolute bottom-10 right-12 w-28 h-28 opacity-[0.06]"
          viewBox="0 0 200 200"
          fill="var(--magnolia-cream)"
          aria-hidden="true"
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
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <span className="font-accent text-base italic text-magnolia-cream/40 tracking-wide">
              Empezamos cuando quieras
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-cream font-light leading-tight mt-3">
              Tienes un proyecto
              <br />
              en mente?
            </h2>
            <p className="font-body text-base md:text-lg text-magnolia-cream/50 mt-6 max-w-md mx-auto leading-relaxed">
              Cuentanos que necesitas. Sin compromiso, sin prisa.
              Te respondemos en 24-48 horas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-magnolia-cream text-magnolia-green font-body text-sm tracking-widest uppercase hover:bg-magnolia-pink transition-colors"
              >
                Escribenos
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
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-6 py-4 font-body text-sm tracking-widest uppercase text-magnolia-cream/60 hover:text-magnolia-cream transition-colors border border-magnolia-cream/15 hover:border-magnolia-cream/30"
              >
                Ver proyectos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
