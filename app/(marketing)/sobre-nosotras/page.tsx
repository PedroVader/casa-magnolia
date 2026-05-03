"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }),
};

/* ─── Decorative SVGs for values section ─── */
function MiradaSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Stylised eye shape - the gaze */}
      <path
        d="M8 40c0 0 14-22 32-22s32 22 32 22-14 22-32 22S8 40 8 40z"
        fill="var(--magnolia-blush)"
      />
      <circle cx="40" cy="40" r="10" fill="var(--magnolia-green)" />
      <circle cx="40" cy="40" r="4" fill="var(--magnolia-cream)" />
    </svg>
  );
}

function OficioSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Hand / craft symbol - two open palms */}
      <path
        d="M20 60c0-12 4-28 8-36 2-4 6-6 10-4 2 1 3 4 2 8l-4 14"
        stroke="var(--magnolia-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M36 42c2-10 6-22 10-26 2-2 5-2 7 1s2 8-1 16"
        stroke="var(--magnolia-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M52 33c2-6 5-12 8-14 2-1 4 0 5 3s0 10-3 16"
        stroke="var(--magnolia-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M62 38c2-4 4-8 6-9 2-1 3 1 3 4s-2 10-5 14"
        stroke="var(--magnolia-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 60c8 6 22 10 32 6s14-12 14-19"
        stroke="var(--magnolia-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="30" cy="52" r="6" fill="var(--magnolia-blush)" opacity="0.5" />
    </svg>
  );
}

function CercaniaSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Two overlapping circles - closeness, dialogue */}
      <circle cx="30" cy="40" r="22" fill="var(--magnolia-blush)" opacity="0.6" />
      <circle cx="50" cy="40" r="22" fill="var(--magnolia-pink)" opacity="0.6" />
      {/* Heart-like intersection hint */}
      <path
        d="M40 28c-4 4-6 10-6 16s2 10 6 12c4-2 6-6 6-12s-2-12-6-16z"
        fill="var(--magnolia-green)"
        opacity="0.3"
      />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

export default function SobreNosotrasPage() {
  return (
    <>
      {/* ━━━ 1. Hero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-magnolia-cream pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Decorative vertical stripes - right side */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 opacity-15 overflow-hidden">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 80 1000"
          >
            <rect x="5" y="0" width="10" height="1000" fill="var(--magnolia-blush)" />
            <rect x="25" y="0" width="10" height="1000" fill="var(--magnolia-green)" />
            <rect x="45" y="0" width="10" height="1000" fill="var(--magnolia-blush)" />
            <rect x="65" y="0" width="10" height="1000" fill="var(--magnolia-green)" />
          </svg>
        </div>

        {/* Decorative Matisse flower - top left */}
        <svg
          className="absolute top-16 left-6 md:left-16 w-24 md:w-36 h-24 md:h-36 opacity-10"
          viewBox="0 0 200 200"
          fill="var(--magnolia-blush)"
          aria-hidden="true"
        >
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(72 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(144 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(216 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(288 100 100)" />
        </svg>

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="font-accent text-lg md:text-xl italic text-magnolia-terracota/70 block"
          >
            Quienes somos
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-magnolia-green font-light leading-[0.95] mt-3"
          >
            Detras de Casa Magnolia
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
            className="font-body text-lg md:text-xl text-magnolia-ink/70 mt-6 md:mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            Una florista y una arquitecta que se encuentran en la misma
            conversacion: la de hacer las cosas con calma, con intencion y con
            las manos en la tierra.
          </motion.p>
        </div>
      </section>

      {/* ━━━ 2. Foto de ambas (placeholder) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-magnolia-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="mx-auto max-w-5xl px-6 lg:px-8"
        >
          <div className="aspect-[16/9] md:aspect-[2.2/1] bg-magnolia-blush/30 relative overflow-hidden">
            {/* Two-silhouette placeholder */}
            <div className="absolute inset-0 flex items-end justify-center">
              <svg
                viewBox="0 0 400 260"
                fill="var(--magnolia-green)"
                opacity="0.12"
                className="w-4/5 md:w-3/5 max-h-full"
                aria-hidden="true"
              >
                {/* Person 1 - Lola */}
                <ellipse cx="140" cy="55" rx="28" ry="32" />
                <path d="M105 82c0 0 8 60 12 100s4 50 4 78h42c0-35-4-80 0-110s12-52 12-52" />
                {/* Flower in hand */}
                <circle cx="118" cy="140" r="8" opacity="0.4" />
                <circle cx="126" cy="134" r="6" opacity="0.3" />

                {/* Person 2 - Manuela */}
                <ellipse cx="260" cy="50" rx="26" ry="30" />
                <path d="M228 76c0 0 8 60 12 100s4 50 4 84h40c0-35-4-84 0-114s12-52 12-52" />
                {/* Ruler / architect hint */}
                <rect x="280" y="100" width="4" height="50" rx="2" opacity="0.3" />
              </svg>
            </div>

            {/* Soft gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-magnolia-cream/30 to-transparent" />

            {/* Corner label */}
            <span className="absolute bottom-4 right-4 md:bottom-6 md:right-6 font-accent text-sm italic text-magnolia-green/40">
              Lola y Manuela
            </span>
          </div>
        </motion.div>
      </section>

      {/* ━━━ 3. De donde venimos ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-magnolia-cream py-24 md:py-36 relative overflow-hidden">
        {/* Decorative star */}
        <svg
          className="absolute top-12 right-10 w-14 h-14 opacity-10"
          viewBox="0 0 100 100"
          fill="var(--magnolia-pink)"
          aria-hidden="true"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16 md:mb-20"
          >
            <span className="font-accent text-lg italic text-magnolia-terracota/70">
              Nuestras raices
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light mt-2 leading-tight">
              De donde venimos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left column - Lolita Estudio Floral */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0.1}
            >
              <div className="bg-magnolia-blush/15 p-8 md:p-10 h-full">
                {/* Decorative dot cluster */}
                <div className="flex gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-magnolia-blush" />
                  <span className="w-2.5 h-2.5 rounded-full bg-magnolia-pink" />
                  <span className="w-2.5 h-2.5 rounded-full bg-magnolia-mustard" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-magnolia-green font-light leading-snug">
                  Lolita Estudio Floral
                </h3>
                <p className="font-accent text-base italic text-magnolia-terracota/60 mt-1">
                  Lola - Florista
                </p>

                <p className="font-body text-base text-magnolia-ink/70 mt-6 leading-relaxed">
                  Lola dirige Lolita Estudio Floral desde Bilbao, un espacio
                  donde las flores se trabajan con honestidad y temporada. Su
                  recorrido abarca talleres abiertos, direccion floral de bodas,
                  eventos privados y colaboraciones con marcas que buscan una
                  estetica natural y sin artificio.
                </p>
                <p className="font-body text-base text-magnolia-ink/70 mt-4 leading-relaxed">
                  De su estudio nace la sensibilidad por el color, la textura y
                  el ritmo que luego se traslada a cada proyecto de Casa
                  Magnolia.
                </p>

                <div className="mt-8">
                  <a
                    href="https://lolitaflorestudio.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-magnolia-green hover:text-magnolia-terracota transition-colors border-b border-magnolia-green/30 pb-1"
                  >
                    Visitar Lolita Estudio Floral
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right column - Manuela / Arquitectura */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0.25}
            >
              <div className="bg-magnolia-green/5 p-8 md:p-10 h-full">
                {/* Decorative dot cluster */}
                <div className="flex gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-magnolia-green/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-magnolia-green/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-magnolia-green/80" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-magnolia-green font-light leading-snug">
                  Manuela
                </h3>
                <p className="font-accent text-base italic text-magnolia-terracota/60 mt-1">
                  Arquitecta
                </p>

                <p className="font-body text-base text-magnolia-ink/70 mt-6 leading-relaxed">
                  Manuela viene de la arquitectura, de pensar en proporcion,
                  materiales y como un espacio puede emocionar antes de que se
                  diga una sola palabra. Esa mirada estructural se ha convertido
                  en su forma de entender la composicion floral: volumen, vacio,
                  equilibrio.
                </p>
                <p className="font-body text-base text-magnolia-ink/70 mt-4 leading-relaxed">
                  A Casa Magnolia aporta la vision espacial, la capacidad de
                  leer un lugar y traducirlo en flores que dialogan con la
                  arquitectura que las rodea.
                </p>

                <div className="mt-8">
                  <span className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-magnolia-green/50">
                    Arquitectura y flores
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bridge phrase */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="mt-16 md:mt-24 text-center"
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="block w-12 h-px bg-magnolia-blush" />
              <svg
                viewBox="0 0 100 100"
                fill="var(--magnolia-mustard)"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
              </svg>
              <span className="block w-12 h-px bg-magnolia-blush" />
            </div>

            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-magnolia-green font-light leading-snug max-w-3xl mx-auto">
              Casa Magnolia nace de esa conversacion.
            </p>
            <p className="font-body text-base md:text-lg text-magnolia-ink/60 mt-4 max-w-xl mx-auto leading-relaxed">
              Un espacio donde dos formas de mirar el mundo se encuentran y
              construyen algo juntas, con calma y con las manos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━ 4. Valores ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-magnolia-green/[0.03] py-24 md:py-36 relative overflow-hidden">
        {/* Subtle decorative butterfly */}
        <svg
          className="absolute bottom-10 right-8 w-20 h-20 opacity-[0.06] text-magnolia-terracota"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M50 20c-15-10-35-5-40 15s10 35 30 25c-20 10-35 20-30 25s25 5 40-15c15 20 25 20 40 15s-10-15-30-25c20 10 35 0 30-25S65 10 50 20z" />
          <line x1="50" y1="20" x2="50" y2="80" />
        </svg>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16 md:mb-20"
          >
            <span className="font-accent text-lg italic text-magnolia-terracota/70">
              Lo que nos guia
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light mt-2 leading-tight">
              Nuestros valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14">
            {/* Value 1 - Mirada */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0}
              className="text-center"
            >
              <MiradaSvg className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
              <h3 className="font-display text-2xl md:text-3xl text-magnolia-green font-light mt-6">
                Mirada
              </h3>
              <p className="font-body text-base text-magnolia-ink/70 mt-4 leading-relaxed max-w-xs mx-auto">
                Cada proyecto empieza observando. Escuchamos el espacio, la luz,
                la historia del lugar. Solo desde esa atencion puede nacer una
                propuesta floral que tenga sentido.
              </p>
            </motion.div>

            {/* Value 2 - Oficio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0.15}
              className="text-center"
            >
              <OficioSvg className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
              <h3 className="font-display text-2xl md:text-3xl text-magnolia-green font-light mt-6">
                Oficio
              </h3>
              <p className="font-body text-base text-magnolia-ink/70 mt-4 leading-relaxed max-w-xs mx-auto">
                Trabajamos con las manos y con el conocimiento que dan los anos.
                No buscamos atajos: cuidamos cada tallo, cada composicion, cada
                detalle del montaje.
              </p>
            </motion.div>

            {/* Value 3 - Cercania */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0.3}
              className="text-center"
            >
              <CercaniaSvg className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
              <h3 className="font-display text-2xl md:text-3xl text-magnolia-green font-light mt-6">
                Cercania
              </h3>
              <p className="font-body text-base text-magnolia-ink/70 mt-4 leading-relaxed max-w-xs mx-auto">
                Nos gusta el trato directo. Conocer a quien nos encarga un
                proyecto, entender sus tiempos, acompanar el proceso sin prisas.
                Eso se nota en el resultado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━ 5. CTA Contacto ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-magnolia-green py-24 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <svg
          className="absolute top-8 left-8 w-16 h-16 opacity-10"
          viewBox="0 0 100 100"
          fill="var(--magnolia-cream)"
          aria-hidden="true"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>
        <svg
          className="absolute bottom-12 right-12 w-24 h-24 opacity-10"
          viewBox="0 0 200 200"
          fill="var(--magnolia-cream)"
          aria-hidden="true"
        >
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(120 100 100)" />
          <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" transform="rotate(240 100 100)" />
        </svg>

        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="font-accent text-lg italic text-magnolia-cream/50 block mb-2">
              Empecemos
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-cream font-light leading-tight">
              Nos encantaria
              <br />
              escucharte
            </h2>
            <p className="font-body text-lg text-magnolia-cream/70 mt-6 max-w-md mx-auto leading-relaxed">
              Si tienes un proyecto, una idea o simplemente curiosidad,
              escribenos. Nos tomamos un cafe y hablamos de flores.
            </p>
            <div className="mt-10">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-magnolia-cream text-magnolia-green font-body text-sm tracking-widest uppercase hover:bg-magnolia-pink transition-colors"
              >
                Contacto
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
