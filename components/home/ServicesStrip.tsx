"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCard {
  title: string;
  href: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    title: "Bodas",
    href: "/servicios/bodas",
    description: "Direccion floral integral para el dia mas importante.",
  },
  {
    title: "Eventos",
    href: "/servicios/eventos",
    description: "Lanzamientos, aperturas, cenas privadas y corporativos.",
  },
  {
    title: "Rodajes",
    href: "/servicios/rodajes",
    description: "Set design floral para producciones y editoriales.",
  },
  {
    title: "Hoteles y Restaurantes",
    href: "/servicios/hoteles-restaurantes",
    description: "Suscripcion mensual de flores frescas para tu espacio.",
  },
];

export function ServicesStrip() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="separator w-12 mb-6" />
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light mb-12 md:mb-16">
          Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-magnolia-cream border border-magnolia-line p-6 md:p-8 h-full transition-colors duration-300 hover:border-magnolia-green"
              >
                <span className="font-display text-2xl md:text-3xl text-magnolia-green block leading-tight">
                  {service.title}
                </span>
                <p className="font-body text-sm mt-3 text-magnolia-ink/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-magnolia-green/50 group-hover:text-magnolia-green transition-colors">
                  Descubrir
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M8 24h30M28 14l12 10-12 10" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
