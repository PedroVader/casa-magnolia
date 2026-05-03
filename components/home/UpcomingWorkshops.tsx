"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Workshop {
  slug: string;
  title: string;
  date: string;
  location: string;
  price: string;
}

// Placeholder - will be replaced with CMS data
const placeholderWorkshops: Workshop[] = [
  {
    slug: "corona-primavera",
    title: "Corona de Primavera",
    date: "24 mayo 2025",
    location: "Estudio, Bilbao",
    price: "85",
  },
  {
    slug: "ramo-silvestre",
    title: "Ramo Silvestre",
    date: "14 junio 2025",
    location: "Estudio, Bilbao",
    price: "75",
  },
  {
    slug: "centro-mesa-verano",
    title: "Centro de Mesa de Verano",
    date: "28 junio 2025",
    location: "Estudio, Bilbao",
    price: "90",
  },
];

export function UpcomingWorkshops() {
  const workshops = placeholderWorkshops;

  return (
    <section className="bg-magnolia-pink/30 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative element */}
      <svg
        className="absolute top-10 right-10 w-24 h-24 opacity-10"
        viewBox="0 0 100 100"
        fill="var(--magnolia-terracota)"
      >
        <path d="M50 5c3 20 15 30 35 35-20 3-32 15-35 35-3-20-15-32-35-35 20-5 32-15 35-35z" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="font-accent text-lg italic text-magnolia-terracota/70">
              Aprende con nosotras
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light mt-1">
              Proximos talleres
            </h2>
          </div>
          <Link
            href="/talleres"
            className="hidden md:inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-magnolia-green hover:text-magnolia-terracota transition-colors"
          >
            Todos los talleres
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/talleres/${workshop.slug}`}
                className="group block bg-magnolia-cream p-6 md:p-8 transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="font-display text-3xl md:text-4xl text-magnolia-green block leading-none">
                  {workshop.date.split(" ")[0]}
                </span>
                <span className="font-body text-sm text-magnolia-ink/50 tracking-wide uppercase mt-1 block">
                  {workshop.date.split(" ").slice(1).join(" ")}
                </span>

                <h3 className="font-display text-xl md:text-2xl text-magnolia-ink mt-4">
                  {workshop.title}
                </h3>

                <div className="flex items-center gap-1 mt-2 text-magnolia-ink/50">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M24 4C16 4 10 10.5 10 18c0 10 14 26 14 26s14-16 14-26C38 10.5 32 4 24 4z" />
                    <circle cx="24" cy="18" r="5" />
                  </svg>
                  <span className="font-body text-sm">{workshop.location}</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-display text-2xl text-magnolia-green">
                    {workshop.price}&euro;
                  </span>
                  <span className="font-body text-xs tracking-widest uppercase text-magnolia-green opacity-60 group-hover:opacity-100 transition-opacity">
                    Reservar
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
