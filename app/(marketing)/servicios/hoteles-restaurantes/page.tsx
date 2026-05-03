"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

/* ─── Plan data ─── */
interface Plan {
  name: string;
  price: number;
  badge?: string;
  features: string[];
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: "Esencial",
    price: 290,
    features: [
      "1 arreglo semanal",
      "Flores de temporada",
      "Entrega y recogida incluidas",
      "Jarrón en préstamo",
      "Cambio semanal garantizado",
    ],
    highlighted: false,
  },
  {
    name: "Estandar",
    price: 520,
    badge: "Mas elegido",
    features: [
      "Hasta 3 arreglos semanales",
      "Flores de temporada premium",
      "Entrega y recogida incluidas",
      "Jarrones en préstamo",
      "Cambio semanal garantizado",
      "Propuesta estacional de color",
      "Contacto directo con florista",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: 890,
    features: [
      "Arreglos ilimitados",
      "Flores premium y de importacion",
      "Entrega y recogida incluidas",
      "Jarrones en préstamo",
      "Cambio semanal garantizado",
      "Direccion floral personalizada",
      "Contacto directo con florista",
      "Adaptacion a eventos especiales",
    ],
    highlighted: false,
  },
];

/* ─── FAQ data ─── */
interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Cual es la duracion minima de la suscripcion?",
    answer:
      "El compromiso minimo es de tres meses. Después, la suscripcion se renueva de mes a mes y puedes cancelar con 30 dias de antelacion.",
  },
  {
    question: "Que pasa si necesito flores extra para un evento puntual?",
    answer:
      "Los suscriptores tienen un 15% de descuento en servicios de eventos puntuales. Solo tienes que avisarnos con una semana de antelacion.",
  },
  {
    question: "Puedo cambiar de plan?",
    answer:
      "Si. Puedes subir o bajar de plan al inicio de cada mes natural. Solo avisanos antes del dia 25 del mes anterior.",
  },
  {
    question: "Que dia de la semana se hace la entrega?",
    answer:
      "Acordamos contigo un dia fijo de la semana. Normalmente lunes o martes, para que las flores esten perfectas toda la semana.",
  },
  {
    question: "Trabajais fuera de Bilbao?",
    answer:
      "Cubrimos Bilbao y un radio de 30 km. Para ubicaciones mas lejanas, consultanos y vemos la viabilidad.",
  },
];

/* ─── Cases data ─── */
const cases = [
  {
    name: "Hotel Tayko",
    location: "Bilbao",
    color: "bg-magnolia-green/15",
  },
  {
    name: "Restaurante Etxanobe",
    location: "Bilbao",
    color: "bg-magnolia-green/10",
  },
  {
    name: "Hotel Miro",
    location: "Bilbao",
    color: "bg-magnolia-green/20",
  },
];

/* ─── FAQ Accordion component (local) ─── */
function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-magnolia-green/15">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-5 text-left font-body text-lg transition-colors hover:text-magnolia-green"
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`ml-4 h-5 w-5 shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <path d="M12 20c4 5.5 8.2 9.8 12 10 3.8-.2 8-4.5 12-10" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="font-body text-base leading-relaxed text-magnolia-ink/70">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Page ─── */
export default function HotelesRestaurantesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-magnolia-green pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Decorative leaf */}
        <svg
          className="absolute top-20 right-4 md:right-16 w-36 md:w-56 h-36 md:h-56 opacity-10"
          viewBox="0 0 48 48"
          fill="none"
          stroke="var(--magnolia-cream)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 38c4-3.5 8.5-8 14-14.5c3-3.5 7.5-8.2 12-12.8c1.2-1.2 2.8-2.5 4-3.2" />
          <path d="M18 22c-3.2-1.5-6.8-1.2-8.2 0.5s0.8 4.5 4.2 5.8c1.5 0.6 3.2 0 4.5-1.2" />
          <path d="M14.5 23.5c1.8 1.2 3.5 2.5 4 4" />
          <path d="M27 18c1-3.5 3.5-5.8 5.5-5.5s2.2 3.8 0.5 7c-0.7 1.3-2.2 2-3.8 1.5" />
          <path d="M30.5 14.2c-1.2 1.8-2.5 3.8-3.2 5" />
          <path d="M14 30c-2.8 0.5-4.8 2.5-4.5 4.2s3.2 2 6 0.8c1.2-0.5 1.8-1.8 1.5-3.2" />
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
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-magnolia-cream leading-[0.95] font-light mt-4 max-w-4xl"
          >
            Flores frescas, cada semana,
            <br className="hidden md:block" />
            sin pensar en ellas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-magnolia-cream/70 mt-6 max-w-lg leading-relaxed"
          >
            Suscripcion mensual de flores para hoteles y restaurantes. Nosotras
            nos encargamos de todo: seleccion, entrega, colocacion y recogida.
          </motion.p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-magnolia-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-lg italic text-magnolia-green/60 tracking-wide">
              Muy sencillo
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Como funciona
            </h2>
          </motion.div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start mb-5">
                <div className="w-14 h-14 rounded-full bg-magnolia-green/10 flex items-center justify-center">
                  {/* Clipboard / plan icon */}
                  <svg viewBox="0 0 48 48" fill="none" stroke="var(--magnolia-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <path d="M9.5 12.5c0.2-1.5 1.2-2.2 2.8-2.5l23.5 0.2c1.5 0.2 2.5 1 2.8 2.5l0.2 25.5c-0.2 1.5-1.2 2.5-2.8 2.8l-23.8-0.2c-1.5-0.2-2.5-1.2-2.5-2.8l-0.2-25.5z" />
                    <path d="M17 7v6.5" />
                    <path d="M31 7.2v6.2" />
                    <path d="M9.8 18.5l28.5 0.2" />
                    <circle cx="16" cy="24.5" r="1.2" fill="var(--magnolia-green)" stroke="none" />
                    <circle cx="24.2" cy="24.2" r="1.2" fill="var(--magnolia-green)" stroke="none" />
                    <circle cx="32" cy="24.5" r="1.2" fill="var(--magnolia-green)" stroke="none" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-4xl md:text-5xl font-light leading-none text-magnolia-green/20 select-none">
                01.
              </span>
              <h3 className="font-display text-xl md:text-2xl text-magnolia-ink font-light mt-2">
                Elige tu plan
              </h3>
              <p className="font-body text-base text-magnolia-ink/70 leading-relaxed mt-3">
                Tres opciones adaptadas a distintos volumenes y necesidades. Sin
                permanencia mas alla de tres meses.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start mb-5">
                <div className="w-14 h-14 rounded-full bg-magnolia-green/10 flex items-center justify-center">
                  {/* Flower / delivery icon */}
                  <svg viewBox="0 0 48 48" fill="none" stroke="var(--magnolia-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <circle cx="24" cy="22" r="2.8" fill="var(--magnolia-green)" stroke="none" />
                    <path d="M22.5 20c-2.5-4.2-6.8-6.5-8.2-5.5s0.3 5.8 3.2 9.2c1.2 1.4 3.1 1.8 5 0.8" />
                    <path d="M25.8 19.5c1.8-4.5 5.6-7.3 7.2-6.5s0.5 5.5-2 9.3c-1 1.5-2.8 2.1-4.8 1.3" />
                    <path d="M26 23.8c4.3 1.2 7.8 4 7.5 5.8s-4.5 1.8-8.2 0.2c-1.5-0.7-2.5-2.2-2.2-4.2" />
                    <path d="M22 24.2c-4 2-5.8 5.5-4.8 7s4.8 0.2 7.5-2.5c1.1-1.1 1.3-3 0.2-4.5" />
                    <path d="M24 27c0.2 3-0.5 7.5 0 12.5c0.2 1.8-0.3 3.2 0.5 4" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-4xl md:text-5xl font-light leading-none text-magnolia-green/20 select-none">
                02.
              </span>
              <h3 className="font-display text-xl md:text-2xl text-magnolia-ink font-light mt-2">
                Visitamos cada semana
              </h3>
              <p className="font-body text-base text-magnolia-ink/70 leading-relaxed mt-3">
                Cada semana acudimos a tu espacio con flores frescas de
                temporada. Las colocamos y nos aseguramos de que todo quede
                perfecto.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start mb-5">
                <div className="w-14 h-14 rounded-full bg-magnolia-green/10 flex items-center justify-center">
                  {/* Recycle / swap icon */}
                  <svg viewBox="0 0 48 48" fill="none" stroke="var(--magnolia-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <path d="M16.5 42c-2.2-1-3.8-3.2-4.5-5.5l-1.8-6.5c-0.3-1.2 0.2-2 1.2-2.2s1.8 0.5 2.2 1.5l1.5 4" />
                    <path d="M18 21c-0.2-3-0.5-6.5-0.3-9.5c0.1-1.5 0.8-2.5 2-2.5s2 1 2 2.5l-0.2 9.5" />
                    <path d="M21.5 21l0.2-10.5c0.1-1.5 0.8-2.3 1.8-2.3s1.8 0.8 2 2.2l0.2 10.8" />
                    <path d="M25.8 21.5l0.5-8.8c0.1-1.5 0.8-2.2 1.8-2s1.5 1 1.5 2.5l-0.5 8.8" />
                    <path d="M15.2 33.5c-0.2-2 0-4.5 0.5-6.8c0.5-2.5 1-4.5 2.2-5.5c1.8-1.5 5.2-1.2 7.8-0.8c2.8 0.5 5.5 0.5 7 2c1.2 1.2 1.5 3 1 5.5c-0.8 3.5-1.5 6.2-3 8.5c-1.8 2.8-4.2 4.5-7 5c-2.5 0.5-5-0.2-7-1.5" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-4xl md:text-5xl font-light leading-none text-magnolia-green/20 select-none">
                03.
              </span>
              <h3 className="font-display text-xl md:text-2xl text-magnolia-ink font-light mt-2">
                Nos llevamos lo anterior
              </h3>
              <p className="font-body text-base text-magnolia-ink/70 leading-relaxed mt-3">
                Retiramos los arreglos de la semana pasada. Tu espacio siempre
                con flores frescas, sin que tengas que gestionar nada.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="bg-magnolia-green/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="font-accent text-lg italic text-magnolia-green/60 tracking-wide">
              Sin sorpresas
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Planes
            </h2>
            <p className="font-body text-base text-magnolia-ink/60 mt-4 max-w-md mx-auto">
              Precio mensual, todo incluido. Sin costes ocultos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col p-8 md:p-10 ${
                  plan.highlighted
                    ? "bg-magnolia-green text-magnolia-cream"
                    : "bg-white text-magnolia-ink"
                }`}
              >
                {plan.badge && (
                  <span className="absolute top-0 right-0 bg-magnolia-mustard text-magnolia-ink px-4 py-1.5 text-xs font-body tracking-widest uppercase">
                    {plan.badge}
                  </span>
                )}

                <h3
                  className={`font-display text-2xl md:text-3xl font-light ${
                    plan.highlighted ? "text-magnolia-cream" : "text-magnolia-ink"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl md:text-6xl font-light leading-none ${
                      plan.highlighted ? "text-magnolia-cream" : "text-magnolia-green"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`font-body text-base ${
                      plan.highlighted
                        ? "text-magnolia-cream/70"
                        : "text-magnolia-ink/60"
                    }`}
                  >
                    eur/mes
                  </span>
                </div>

                <div
                  className={`mt-6 mb-8 h-px ${
                    plan.highlighted ? "bg-magnolia-cream/20" : "bg-magnolia-ink/10"
                  }`}
                />

                <p
                  className={`font-body text-xs tracking-widest uppercase mb-4 ${
                    plan.highlighted
                      ? "text-magnolia-cream/60"
                      : "text-magnolia-ink/50"
                  }`}
                >
                  Lo que incluye
                </p>

                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          plan.highlighted
                            ? "text-magnolia-mustard"
                            : "text-magnolia-green"
                        }`}
                      >
                        <path d="M8.5 25.5c2.5 1.5 5 3.8 7.5 6.5c1.2 1.5 2.5 3 3.8 4.5c2-4 4.5-8.5 8-13c3.5-4.5 7.2-8.5 11.5-12c1-0.8 1.8-1.5 2.5-1.8" />
                      </svg>
                      <span
                        className={`font-body text-sm leading-relaxed ${
                          plan.highlighted
                            ? "text-magnolia-cream/85"
                            : "text-magnolia-ink/75"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 block text-center px-6 py-3.5 font-body text-sm tracking-widest uppercase transition-colors ${
                    plan.highlighted
                      ? "bg-magnolia-cream text-magnolia-green hover:bg-magnolia-pink"
                      : "bg-magnolia-green text-magnolia-cream hover:bg-magnolia-green/90"
                  }`}
                >
                  Suscribirse
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-magnolia-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="font-accent text-lg italic text-magnolia-green/60 tracking-wide">
              Resolvemos dudas
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Preguntas frecuentes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <FaqAccordion items={faqs} />
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-magnolia-green/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-lg italic text-magnolia-green/60 tracking-wide">
              Confian en nosotras
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-ink font-light leading-tight mt-1">
              Casos
            </h2>
          </motion.div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Placeholder image */}
                <div
                  className={`aspect-[4/3] ${caseItem.color} transition-transform duration-300 group-hover:scale-[1.02]`}
                />
                <div className="mt-4">
                  <h3 className="font-display text-xl text-magnolia-ink font-light">
                    {caseItem.name}
                  </h3>
                  <p className="font-body text-sm text-magnolia-ink/50 mt-1">
                    {caseItem.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-magnolia-green py-20 md:py-28 relative overflow-hidden">
        <svg
          className="absolute top-8 left-8 w-16 h-16 opacity-10"
          viewBox="0 0 100 100"
          fill="var(--magnolia-cream)"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>
        <svg
          className="absolute bottom-12 right-12 w-24 h-24 opacity-10"
          viewBox="0 0 48 48"
          fill="none"
          stroke="var(--magnolia-cream)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 38c4-3.5 8.5-8 14-14.5c3-3.5 7.5-8.2 12-12.8c1.2-1.2 2.8-2.5 4-3.2" />
          <path d="M18 22c-3.2-1.5-6.8-1.2-8.2 0.5s0.8 4.5 4.2 5.8c1.5 0.6 3.2 0 4.5-1.2" />
          <path d="M27 18c1-3.5 3.5-5.8 5.5-5.5s2.2 3.8 0.5 7c-0.7 1.3-2.2 2-3.8 1.5" />
        </svg>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-cream font-light leading-tight">
              Necesitas algo
              <br />
              a medida? Hablemos.
            </h2>
            <p className="font-body text-lg text-magnolia-cream/60 mt-6 max-w-md mx-auto">
              Si ninguno de los planes encaja con lo que necesitas, disenamos uno
              a medida para tu espacio.
            </p>
            <div className="mt-10">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-magnolia-cream text-magnolia-green font-body text-sm tracking-widest uppercase hover:bg-magnolia-pink transition-colors"
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
    </>
  );
}
