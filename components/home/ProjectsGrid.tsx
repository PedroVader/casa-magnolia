"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeaturedProject {
  slug: string;
  title: string;
  category: string;
  image: string;
  bg: string;
}

const placeholderProjects: FeaturedProject[] = [
  {
    slug: "boda-palacio-san-joseren",
    title: "Palacio San Joseren",
    category: "Bodas",
    image: "/images/project-wedding-table.jpg",
    bg: "bg-magnolia-green/20",
  },
  {
    slug: "evento-hotel-carlton",
    title: "Hotel Carlton",
    category: "Eventos",
    image: "/images/project-details.jpg",
    bg: "bg-magnolia-mustard/20",
  },
  {
    slug: "editorial-primavera",
    title: "Editorial Primavera",
    category: "Rodajes",
    image: "/images/project-gerberas.jpg",
    bg: "bg-magnolia-green/20",
  },
  {
    slug: "mesa-casa-vasca",
    title: "Casa Vasca",
    category: "Table Setting",
    image: "/images/project-wedding-sign.jpg",
    bg: "bg-magnolia-terracota/20",
  },
];

/* Normalized wobbly clip-path coordinates (objectBoundingBox units 0–1)
   derived from the original 150×60 viewBox paths — gives each card a
   unique hand-drawn silhouette when clipping the photograph. */
const wobblyClipPaths = [
  "M0.027 0.1 Q0.333 0.033 0.973 0.083 Q0.987 0.5 0.98 0.917 Q0.533 0.967 0.027 0.933 Q0.013 0.5 0.027 0.1Z",
  "M0.033 0.067 Q0.5 0.117 0.973 0.067 Q0.993 0.417 0.98 0.933 Q0.467 0.9 0.027 0.95 Q0.013 0.467 0.033 0.067Z",
  "M0.02 0.083 Q0.4 0.05 0.98 0.1 Q0.993 0.533 0.987 0.917 Q0.6 0.967 0.02 0.917 Q0.007 0.417 0.02 0.083Z",
  "M0.033 0.1 Q0.533 0.05 0.98 0.083 Q0.987 0.467 0.973 0.933 Q0.433 0.967 0.033 0.917 Q0.02 0.583 0.033 0.1Z",
];

/* Small decorative doodle per card — a leaf, a petal, a swirl, a stem */
function Doodle({ index }: { index: number }) {
  const props = {
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  switch (index % 4) {
    case 0:
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8 text-current opacity-40" {...props}>
          <path d="M16 28 C16 20, 6 16, 4 8 C12 8, 16 14, 16 14 C16 14, 20 8, 28 8 C26 16, 16 20, 16 28Z" />
          <path d="M16 14v14" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8 text-current opacity-40" {...props}>
          <circle cx="16" cy="14" r="6" />
          <path d="M16 20v10M12 26l4 4 4-4" />
          <path d="M12 10c-1-3 1-6 4-6M20 10c1-3-1-6-4-6" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8 text-current opacity-40" {...props}>
          <path d="M8 24 C8 16, 16 12, 16 4" />
          <path d="M16 4 C10 8, 8 14, 12 18" />
          <path d="M16 4 C22 8, 24 14, 20 18" />
          <path d="M14 18 C10 22, 8 28, 14 30" />
          <path d="M18 18 C22 22, 24 28, 18 30" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8 text-current opacity-40" {...props}>
          <path d="M6 26 Q10 10, 16 6 Q22 10, 26 26" />
          <path d="M16 6v22" />
          <path d="M11 16c2 1 4 1 5 0M16 16c1 1 3 1 5 0" />
        </svg>
      );
  }
}

/* Slight static rotations so the cards feel casually placed */
const rotations = [-1.8, 1.2, -0.8, 2];

export function ProjectsGrid() {
  const projects = placeholderProjects;

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

        {/* ── Left border stripes (irregular vertical) ── */}
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

        {/* ── Inner wobbly edge (where stripes meet the cream center) ── */}
        <path
          d="M85 78 Q300 72, 600 76 Q900 72, 1115 78
             Q1120 250, 1118 400 Q1120 600, 1115 722
             Q900 728, 600 724 Q300 728, 85 722
             Q80 550, 82 400 Q80 200, 85 78 Z"
          fill="#F7F4EF"
        />

        {/* ── Starfish decorations ── */}
        {/* Top center */}
        <g transform="translate(580, 42) rotate(-12)" opacity="0.45">
          <path d="M0 -12 L3 -3 L12 -2 L5 4 L7 14 L0 8 L-7 14 L-5 4 L-12 -2 L-3 -3 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
        {/* Left middle */}
        <g transform="translate(38, 350) rotate(18)" opacity="0.4">
          <path d="M0 -14 L4 -4 L14 -2 L6 5 L8 16 L0 10 L-8 16 L-6 5 L-14 -2 L-4 -4 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
        {/* Right upper */}
        <g transform="translate(1162, 180) rotate(-25)" opacity="0.4">
          <path d="M0 -11 L3 -3 L11 -2 L5 4 L6 12 L0 7 L-6 12 L-5 4 L-11 -2 L-3 -3 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
        {/* Bottom right */}
        <g transform="translate(1050, 758) rotate(10)" opacity="0.4">
          <path d="M0 -13 L3 -4 L13 -2 L5 4 L7 14 L0 9 L-7 14 L-5 4 L-13 -2 L-3 -4 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
        {/* Bottom left */}
        <g transform="translate(150, 760) rotate(-8)" opacity="0.35">
          <path d="M0 -10 L2 -3 L10 -1 L4 4 L5 11 L0 7 L-5 11 L-4 4 L-10 -1 L-2 -3 Z" stroke="#7FBFBF" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl px-12 md:px-20 lg:px-24">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14 md:mb-20">
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

        {/* Hidden SVG defs for wobbly clip paths */}
        <svg className="absolute" width="0" height="0" aria-hidden="true">
          <defs>
            {wobblyClipPaths.map((d, i) => (
              <clipPath key={i} id={`wobbly-clip-${i}`} clipPathUnits="objectBoundingBox">
                <path d={d} />
              </clipPath>
            ))}
          </defs>
        </svg>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                rotate: 0,
                scale: 1.04,
                transition: { type: "spring", stiffness: 300, damping: 18 },
              }}
            >
              <Link
                href={`/proyectos/${project.slug}`}
                className="group block"
              >
                {/* Clipped image with wobbly hand-drawn shape */}
                <div className="relative" style={{ filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.25))" }}>
                <div
                  className={`relative aspect-square ${project.bg} overflow-hidden`}
                  style={{ clipPath: `url(#wobbly-clip-${index})` }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                  {/* Number watermark */}
                  <span className="absolute top-3 left-4 font-display text-4xl md:text-5xl text-white/20 leading-none">
                    0{index + 1}
                  </span>

                  {/* Doodle in corner */}
                  <span className="absolute top-3 right-4 text-white/70">
                    <Doodle index={index} />
                  </span>
                </div>
                </div>

                {/* Info below card */}
                <div className="mt-3 text-center">
                  <span className="font-hand text-sm md:text-base text-magnolia-terracota/70 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg md:text-xl text-magnolia-green leading-tight mt-0.5 group-hover:text-magnolia-terracota transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

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
