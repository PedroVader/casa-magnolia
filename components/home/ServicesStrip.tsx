"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceItem {
  src: string;
  alt: string;
  title: string;
  location: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    src: "/images/service-bouquet-niche.jpg",
    alt: "Ramo de peonías en hornacina de piedra",
    title: "Eventos",
    location: "Diseño floral para celebraciones",
    href: "/servicios/eventos",
  },
  {
    src: "/images/service-peony-garden.jpg",
    alt: "Ramo de peonías rosas en jardín",
    title: "Bodas",
    location: "Dirección floral integral",
    href: "/servicios/bodas",
  },
  {
    src: "/images/service-table-setting.jpg",
    alt: "Mesa puesta con vajilla artesanal y hortensias",
    title: "Hoteles & Restaurantes",
    location: "Suscripción de flores frescas",
    href: "/servicios/hoteles-restaurantes",
  },
];

/* ─── 8-pointed star burst path ─── */
const STAR =
  "M0,-1 L0.18,-0.28 L0.71,-0.71 L0.28,-0.18 L1,0 L0.28,0.18 L0.71,0.71 L0.18,0.28 L0,1 L-0.18,0.28 L-0.71,0.71 L-0.28,0.18 L-1,0 L-0.28,-0.18 L-0.71,-0.71 L-0.18,-0.28Z";

const stars = [
  { x: 85, y: 75, s: 32, r: -15 },
  { x: 260, y: 55, s: 24, r: 12 },
  { x: 420, y: 120, s: 38, r: -8 },
  { x: 160, y: 240, s: 28, r: 20 },
  { x: 350, y: 300, s: 34, r: -22 },
  { x: 75, y: 360, s: 20, r: 8 },
  { x: 460, y: 340, s: 26, r: -10 },
];

const dots = [
  { x: 170, y: 40 },
  { x: 30, y: 150 },
  { x: 330, y: 170 },
  { x: 210, y: 330 },
  { x: 455, y: 210 },
  { x: 120, y: 140 },
  { x: 400, y: 390 },
  { x: 250, y: 180 },
  { x: 480, y: 55 },
  { x: 60, y: 260 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function ServicesStrip() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Terracotta background ── */}
      <div className="absolute inset-0 bg-magnolia-terracota" />

      {/* ── Star pattern overlay ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="stars-bg"
            width="500"
            height="420"
            patternUnits="userSpaceOnUse"
          >
            {stars.map((st, i) => (
              <path
                key={i}
                d={STAR}
                fill="var(--magnolia-pink)"
                opacity="0.55"
                transform={`translate(${st.x} ${st.y}) scale(${st.s}) rotate(${st.r})`}
              />
            ))}
            {dots.map((dt, i) => (
              <circle
                key={`d${i}`}
                cx={dt.x}
                cy={dt.y}
                r="3.5"
                fill="var(--magnolia-pink)"
                opacity="0.45"
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stars-bg)" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-hand text-2xl text-magnolia-pink block mb-2"
        >
          Lo que hacemos
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-cream font-light mb-12 md:mb-16"
        >
          Servicios
        </motion.h2>

        {/* 3 vertical images in a row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={itemVariants}>
              <Link href={service.href} className="group block">
                {/* Image — portrait aspect ratio */}
                <div className="aspect-[3/4] relative overflow-hidden border-2 border-magnolia-cream/30 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Caption */}
                <div className="mt-4">
                  <h3 className="font-display text-xl md:text-2xl text-magnolia-cream group-hover:text-magnolia-pink transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-magnolia-cream/50 mt-1">
                    {service.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
