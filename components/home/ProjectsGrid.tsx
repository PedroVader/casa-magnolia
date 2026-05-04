"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NumberLabel } from "@/components/ui";

interface FeaturedProject {
  slug: string;
  title: string;
  coverImage: string;
  category: string;
}

const placeholderProjects: FeaturedProject[] = [
  {
    slug: "boda-palacio-san-joseren",
    title: "Palacio San Joseren",
    coverImage: "/images/project-wedding-table.jpg",
    category: "Bodas",
  },
  {
    slug: "evento-hotel-carlton",
    title: "Hotel Carlton",
    coverImage: "/images/project-wedding-sign.jpg",
    category: "Eventos",
  },
  {
    slug: "editorial-primavera",
    title: "Editorial Primavera",
    coverImage: "/images/project-details.jpg",
    category: "Rodajes",
  },
  {
    slug: "mesa-casa-vasca",
    title: "Casa Vasca",
    coverImage: "/images/project-gerberas.jpg",
    category: "Table Setting",
  },
];

export function ProjectsGrid() {
  const projects = placeholderProjects;

  return (
    <section className="bg-magnolia-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="separator w-12 mb-6" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-magnolia-green font-light">
              Proyectos
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="hidden md:inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-magnolia-green hover:text-magnolia-terracota transition-colors"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
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
                <div className="aspect-[4/5] relative">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover img-zoom group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

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
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-white/70">
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
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-magnolia-green"
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
