"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NumberLabel } from "@/components/ui";

interface FeaturedProject {
  slug: string;
  title: string;
  coverImage: string;
  category: string;
}

// Placeholder data - will be replaced with CMS data
const placeholderProjects: FeaturedProject[] = [
  {
    slug: "boda-palacio-san-joseren",
    title: "Palacio San Joseren",
    coverImage: "",
    category: "Bodas",
  },
  {
    slug: "evento-hotel-carlton",
    title: "Hotel Carlton",
    coverImage: "",
    category: "Eventos",
  },
  {
    slug: "editorial-primavera",
    title: "Editorial Primavera",
    coverImage: "",
    category: "Rodajes",
  },
  {
    slug: "mesa-casa-vasca",
    title: "Casa Vasca",
    coverImage: "",
    category: "Table Setting",
  },
];

export function ProjectsGrid() {
  const projects = placeholderProjects;

  return (
    <section className="bg-magnolia-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light">
            Proyectos
          </h2>
          <Link
            href="/proyectos"
            className="hidden md:inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-magnolia-green hover:text-magnolia-terracota transition-colors"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/proyectos/${project.slug}`}
                className="group block relative overflow-hidden"
              >
                <div className="aspect-[4/5] bg-magnolia-green/10 relative">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg viewBox="0 0 100 100" fill="var(--magnolia-green)" className="w-1/3">
                        <path d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z" />
                        <path d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z" transform="rotate(120 50 50)" />
                        <path d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z" transform="rotate(240 50 50)" />
                      </svg>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-magnolia-green/0 group-hover:bg-magnolia-green/30 transition-colors duration-500" />

                  {/* Number */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <NumberLabel
                      number={index + 1}
                      className="text-white/90 text-4xl md:text-5xl drop-shadow-lg"
                    />
                  </div>

                  {/* Title on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="font-body text-xs tracking-widest uppercase text-white/70">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-magnolia-green"
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
