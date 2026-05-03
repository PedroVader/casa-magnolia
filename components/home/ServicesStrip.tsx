"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCard {
  title: string;
  href: string;
  color: string;
  bgColor: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    title: "Bodas",
    href: "/servicios/bodas",
    color: "text-magnolia-cream",
    bgColor: "bg-magnolia-terracota",
    description: "Direccion floral integral para el dia mas importante.",
  },
  {
    title: "Eventos",
    href: "/servicios/eventos",
    color: "text-magnolia-ink",
    bgColor: "bg-magnolia-pink",
    description: "Lanzamientos, aperturas, cenas privadas y corporativos.",
  },
  {
    title: "Rodajes",
    href: "/servicios/rodajes",
    color: "text-magnolia-cream",
    bgColor: "bg-magnolia-green",
    description: "Set design floral para producciones y editoriales.",
  },
  {
    title: "Hoteles y Restaurantes",
    href: "/servicios/hoteles-restaurantes",
    color: "text-magnolia-ink",
    bgColor: "bg-magnolia-mustard",
    description: "Suscripcion mensual de flores frescas para tu espacio.",
  },
];

export function ServicesStrip() {
  return (
    <section className="bg-magnolia-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light mb-12 md:mb-16">
          Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                className={`group block ${service.bgColor} p-6 md:p-8 h-full transition-transform duration-300 hover:scale-[1.02]`}
              >
                <span
                  className={`font-display text-2xl md:text-3xl ${service.color} block leading-tight`}
                >
                  {service.title}
                </span>
                <p
                  className={`font-body text-sm mt-3 ${service.color} opacity-80 leading-relaxed`}
                >
                  {service.description}
                </p>
                <div
                  className={`mt-6 flex items-center gap-2 font-body text-xs tracking-widest uppercase ${service.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                >
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
