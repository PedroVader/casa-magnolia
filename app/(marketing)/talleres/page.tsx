"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Workshop {
  slug: string;
  title: string;
  day: string;
  month: string;
  year: string;
  location: string;
  price: number;
  color: string;
}

// Placeholder -- will be replaced with CMS data
const workshops: Workshop[] = [
  {
    slug: "corona-primavera",
    title: "Corona de Primavera",
    day: "24",
    month: "mayo",
    year: "2025",
    location: "Estudio, Bilbao",
    price: 85,
    color: "bg-magnolia-green/15",
  },
  {
    slug: "ramo-silvestre",
    title: "Ramo Silvestre",
    day: "14",
    month: "junio",
    year: "2025",
    location: "Estudio, Bilbao",
    price: 75,
    color: "bg-magnolia-pink/40",
  },
  {
    slug: "centro-mesa-verano",
    title: "Centro de Mesa de Verano",
    day: "28",
    month: "junio",
    year: "2025",
    location: "Estudio, Bilbao",
    price: 90,
    color: "bg-magnolia-blush/30",
  },
  {
    slug: "guirnalda-seca",
    title: "Guirnalda de Flor Seca",
    day: "12",
    month: "julio",
    year: "2025",
    location: "Jardin Botanico, Bilbao",
    price: 95,
    color: "bg-magnolia-mustard/20",
  },
];

export default function TalleresPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-magnolia-cream pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Decorative star */}
        <svg
          className="absolute top-16 right-8 md:right-24 w-20 md:w-28 h-20 md:h-28 opacity-10"
          viewBox="0 0 100 100"
          fill="var(--magnolia-terracota)"
        >
          <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
        </svg>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-7xl md:text-8xl lg:text-9xl text-magnolia-green font-light leading-[0.9]"
          >
            Talleres
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-accent text-xl md:text-2xl italic text-magnolia-green/70 mt-4 max-w-lg"
          >
            Aprende el oficio floral con nosotras
          </motion.p>
        </div>
      </section>

      {/* ── Workshop Grid ── */}
      <section className="bg-magnolia-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/talleres/${workshop.slug}`}
                  className="group block transition-transform duration-300 hover:scale-[1.02]"
                >
                  {/* Image placeholder */}
                  <div
                    className={`aspect-[4/5] ${workshop.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        viewBox="0 0 200 260"
                        fill="none"
                        className="w-1/2 h-1/2 opacity-20"
                      >
                        <path
                          d="M100 30c-30 0-55 15-55 60 0 30 10 50 25 65s35 30 30 75c20-30 15-50 30-75s25-35 25-65c0-45-25-60-55-60z"
                          fill="var(--magnolia-green)"
                        />
                        <path
                          d="M80 130c-5-20-20-30-35-25s-15 25 0 40 35 15 35-15z"
                          fill="var(--magnolia-green)"
                          opacity="0.5"
                        />
                        <path
                          d="M120 130c5-20 20-30 35-25s15 25 0 40-35 15-35-15z"
                          fill="var(--magnolia-green)"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-magnolia-ink/0 transition-colors duration-300 group-hover:bg-magnolia-ink/5" />
                  </div>

                  {/* Card content */}
                  <div className="pt-5">
                    {/* Date */}
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl md:text-5xl text-magnolia-green leading-none">
                        {workshop.day}
                      </span>
                      <span className="font-body text-sm text-magnolia-ink/50 tracking-wide uppercase">
                        {workshop.month} {workshop.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-xl md:text-2xl text-magnolia-ink mt-3 leading-tight">
                      {workshop.title}
                    </h2>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 mt-2 text-magnolia-ink/50">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5 shrink-0"
                      >
                        <path d="M24 4C16 4 10 10.5 10 18c0 10 14 26 14 26s14-16 14-26C38 10.5 32 4 24 4z" />
                        <circle cx="24" cy="18" r="5" />
                      </svg>
                      <span className="font-body text-sm">
                        {workshop.location}
                      </span>
                    </div>

                    {/* Price + CTA */}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-display text-2xl text-magnolia-green">
                        {workshop.price}&euro;
                      </span>
                      <span className="font-body text-xs tracking-widest uppercase text-magnolia-green opacity-60 group-hover:opacity-100 transition-opacity">
                        Reservar plaza
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
