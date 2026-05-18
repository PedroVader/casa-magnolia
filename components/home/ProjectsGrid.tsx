"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeaturedProject {
  slug: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

const projects: FeaturedProject[] = [
  {
    slug: "evento-luz-natural",
    title: "Luz Natural",
    category: "Eventos",
    image: "/images/project-vase-light.jpg",
    href: "/proyectos/evento-luz-natural",
  },
  {
    slug: "ramo-silvestre",
    title: "Ramo Silvestre",
    category: "Ramos",
    image: "/images/project-wild-bouquet.jpg",
    href: "/proyectos/ramo-silvestre",
  },
  {
    slug: "mesa-artesanal",
    title: "Mesa Artesanal",
    category: "Table Setting",
    image: "/images/project-table-detail.jpg",
    href: "/proyectos/mesa-artesanal",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

/* Each card enters from a different direction — feels organic */
const cardEntrances = [
  { hidden: { opacity: 0, x: -30, y: 20, rotate: -1.5 }, visible: { opacity: 1, x: 0, y: 0, rotate: 0 } },
  { hidden: { opacity: 0, y: 40, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } },
  { hidden: { opacity: 0, x: 30, y: 20, rotate: 1.5 }, visible: { opacity: 1, x: 0, y: 0, rotate: 0 } },
];

const transitionSpring = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function ProjectsGrid() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Handcrafted SVG background frame */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {/* Cream background */}
        <rect width="1200" height="800" fill="#F7F4EF" />

        {/* ── Left border stripes ── */}
        <path d="M0 0 L0 800 L82 800 Q78 600, 80 400 Q82 200, 78 0 Z" fill="#8BA67A" opacity="0.55" />
        <path d="M18 0 Q16 200, 20 400 Q18 600, 16 800 L38 800 Q40 600, 36 400 Q38 200, 40 0 Z" fill="#F7F4EF" opacity="0.7" />
        <path d="M50 0 Q48 250, 52 500 Q50 700, 48 800 L68 800 Q70 650, 66 400 Q68 150, 70 0 Z" fill="#E8C4C4" opacity="0.3" />

        {/* ── Right border stripes ── */}
        <path d="M1200 0 L1200 800 L1118 800 Q1122 600, 1120 400 Q1118 200, 1122 0 Z" fill="#8BA67A" opacity="0.55" />
        <path d="M1182 0 Q1184 200, 1180 400 Q1182 600, 1184 800 L1162 800 Q1160 600, 1164 400 Q1162 200, 1160 0 Z" fill="#F7F4EF" opacity="0.7" />
        <path d="M1150 0 Q1152 250, 1148 500 Q1150 700, 1152 800 L1132 800 Q1130 650, 1134 400 Q1132 150, 1130 0 Z" fill="#E8C4C4" opacity="0.3" />

        {/* ── Top border stripes ── */}
        <path d="M0 0 L1200 0 L1200 75 Q900 72, 600 74 Q300 76, 0 72 Z" fill="#8BA67A" opacity="0.55" />
        <path d="M0 18 Q300 16, 600 20 Q900 18, 1200 16 L1200 38 Q900 40, 600 36 Q300 38, 0 40 Z" fill="#F7F4EF" opacity="0.7" />
        <path d="M0 48 Q400 46, 800 50 Q1000 48, 1200 46 L1200 64 Q1000 66, 800 62 Q400 64, 0 66 Z" fill="#E8C4C4" opacity="0.3" />

        {/* ── Bottom border stripes ── */}
        <path d="M0 800 L1200 800 L1200 725 Q900 728, 600 726 Q300 724, 0 728 Z" fill="#8BA67A" opacity="0.55" />
        <path d="M0 782 Q300 784, 600 780 Q900 782, 1200 784 L1200 762 Q900 760, 600 764 Q300 762, 0 760 Z" fill="#F7F4EF" opacity="0.7" />
        <path d="M0 752 Q400 754, 800 750 Q1000 752, 1200 754 L1200 736 Q1000 734, 800 738 Q400 736, 0 734 Z" fill="#E8C4C4" opacity="0.3" />

        {/* ── Inner wobbly edge ── */}
        <path
          d="M85 78 Q300 72, 600 76 Q900 72, 1115 78
             Q1120 250, 1118 400 Q1120 600, 1115 722
             Q900 728, 600 724 Q300 728, 85 722
             Q80 550, 82 400 Q80 200, 85 78 Z"
          fill="#F7F4EF"
        />

        {/* ── Starfish decorations ── */}
        <g transform="translate(580, 42) rotate(-12)" opacity="0.45">
          <path d="M0 -12 L3 -3 L12 -2 L5 4 L7 14 L0 8 L-7 14 L-5 4 L-12 -2 L-3 -3 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
        <g transform="translate(38, 350) rotate(18)" opacity="0.4">
          <path d="M0 -14 L4 -4 L14 -2 L6 5 L8 16 L0 10 L-8 16 L-6 5 L-14 -2 L-4 -4 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
        <g transform="translate(1162, 180) rotate(-25)" opacity="0.4">
          <path d="M0 -11 L3 -3 L11 -2 L5 4 L6 12 L0 7 L-6 12 L-5 4 L-11 -2 L-3 -3 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
        <g transform="translate(1050, 758) rotate(10)" opacity="0.4">
          <path d="M0 -13 L3 -4 L13 -2 L5 4 L7 14 L0 9 L-7 14 L-5 4 L-13 -2 L-3 -4 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
        <g transform="translate(150, 760) rotate(-8)" opacity="0.35">
          <path d="M0 -10 L2 -3 L10 -1 L4 4 L5 11 L0 7 L-5 11 L-4 4 L-10 -1 L-2 -3 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl px-12 md:px-20 lg:px-24">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-hand text-2xl text-magnolia-terracota/70 block mb-2"
            >
              Nuestro trabajo
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light">
              Proyectos
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="hidden md:inline-flex items-center gap-2 font-hand text-lg text-magnolia-green hover:text-magnolia-terracota transition-colors"
          >
            Ver todos
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

        {/* 3 vertical images in a row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: cardEntrances[index].hidden,
                visible: {
                  ...cardEntrances[index].visible,
                  transition: transitionSpring,
                },
              }}
            >
              <Link href={project.href} className="group block">
                {/* Image — portrait aspect ratio */}
                <div className="aspect-[3/4] relative overflow-hidden border border-magnolia-line/60 shadow-[0_6px_24px_rgba(0,0,0,0.15)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-105 group-hover:saturate-[1.1]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Soft warm veil on hover */}
                  <div className="absolute inset-0 bg-magnolia-pink/0 group-hover:bg-magnolia-pink/10 transition-colors duration-700" />
                </div>

                {/* Caption — gentle fade up */}
                <div className="mt-4 transition-all duration-500 group-hover:-translate-y-1">
                  <span className="font-hand text-sm text-magnolia-terracota/70 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-magnolia-green group-hover:text-magnolia-terracota transition-colors duration-500 leading-tight mt-0.5">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 font-hand text-lg text-magnolia-green"
          >
            Ver todos los proyectos
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
      </div>
    </section>
  );
}
