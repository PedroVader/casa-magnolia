"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Workshop {
  slug: string;
  title: string;
  date: string;
  location: string;
  price: string;
  image: string;
}

// Placeholder - will be replaced with CMS data
const placeholderWorkshops: Workshop[] = [
  {
    slug: "corona-primavera",
    title: "Corona de Primavera",
    date: "24 mayo 2025",
    location: "Estudio, Bilbao",
    price: "85",
    image: "/images/workshop-group.jpg",
  },
  {
    slug: "ramo-silvestre",
    title: "Ramo Silvestre",
    date: "14 junio 2025",
    location: "Estudio, Bilbao",
    price: "75",
    image: "/images/workshop-studio.jpg",
  },
  {
    slug: "centro-mesa-verano",
    title: "Centro de Mesa de Verano",
    date: "28 junio 2025",
    location: "Estudio, Bilbao",
    price: "90",
    image: "/images/workshop-class.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function UpcomingWorkshops() {
  const workshops = placeholderWorkshops;

  return (
    <section className="bg-magnolia-cream py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-accent text-lg italic text-magnolia-terracota/70"
            >
              Aprende con nosotras
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light mt-1"
            >
              Proximos talleres
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/talleres"
              className="hidden md:inline-flex items-center gap-2 font-hand text-lg text-magnolia-green hover:text-magnolia-terracota transition-colors"
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
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.slug}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotate: index % 2 === 0 ? -1.5 : 1.5,
                boxShadow: "0 16px 32px rgba(44, 62, 40, 0.12)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <Link
                href={`/talleres/${workshop.slug}`}
                className="group block bg-white border border-magnolia-line overflow-hidden"
              >
                {/* Workshop image */}
                <div className="aspect-[3/2] relative overflow-hidden">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover img-zoom group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl md:text-4xl text-magnolia-green leading-none">
                      {workshop.date.split(" ")[0]}
                    </span>
                    <span className="font-body text-sm text-magnolia-ink/50 tracking-wide uppercase">
                      {workshop.date.split(" ").slice(1).join(" ")}
                    </span>
                  </div>

                  <div className="separator my-4" />

                  <h3 className="font-display text-xl md:text-2xl text-magnolia-ink">
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
                    <span className="font-hand text-lg text-magnolia-green/50 group-hover:text-magnolia-green transition-colors">
                      Reservar
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
