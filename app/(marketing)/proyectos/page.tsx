"use client";

import { useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { NumberLabel } from "@/components/ui";

/* ─── Types ─── */
type ProjectCategory =
  | "todos"
  | "bodas"
  | "eventos"
  | "table-setting"
  | "rodajes"
  | "talleres";

interface Project {
  slug: string;
  title: string;
  location: string;
  date: string;
  category: ProjectCategory;
  color: string;
}

/* ─── Placeholder data (will be replaced with CMS data) ─── */
const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: "Todos", value: "todos" },
  { label: "Bodas", value: "bodas" },
  { label: "Eventos", value: "eventos" },
  { label: "Table Setting", value: "table-setting" },
  { label: "Rodajes", value: "rodajes" },
  { label: "Talleres", value: "talleres" },
];

const PROJECTS: Project[] = [
  {
    slug: "boda-palacio-san-joseren",
    title: "Palacio San Joseren",
    location: "Getxo, Bizkaia",
    date: "19\u00B705\u00B72024",
    category: "bodas",
    color: "bg-magnolia-green/20",
  },
  {
    slug: "evento-hotel-carlton",
    title: "Hotel Carlton",
    location: "Bilbao, Bizkaia",
    date: "03\u00B711\u00B72024",
    category: "eventos",
    color: "bg-magnolia-mustard/20",
  },
  {
    slug: "editorial-primavera",
    title: "Editorial Primavera",
    location: "Bermeo, Bizkaia",
    date: "22\u00B703\u00B72024",
    category: "rodajes",
    color: "bg-magnolia-terracota/20",
  },
  {
    slug: "mesa-casa-vasca",
    title: "Mesa Casa Vasca",
    location: "Lekeitio, Bizkaia",
    date: "14\u00B706\u00B72024",
    category: "table-setting",
    color: "bg-magnolia-blush/30",
  },
  {
    slug: "boda-finca-artea",
    title: "Finca Artea",
    location: "Mungia, Bizkaia",
    date: "07\u00B709\u00B72024",
    category: "bodas",
    color: "bg-magnolia-pink/40",
  },
  {
    slug: "taller-arreglos-silvestres",
    title: "Arreglos Silvestres",
    location: "Bilbao, Bizkaia",
    date: "28\u00B710\u00B72024",
    category: "talleres",
    color: "bg-magnolia-green/15",
  },
];

/* ─── Grid layout map: col-span assignments for the asymmetric editorial grid ─── */
const GRID_SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

const ASPECT_RATIOS = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[3/4]",
];

/* ─── Inner component that reads searchParams ─── */
function ProyectosContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCat =
    (searchParams.get("cat") as ProjectCategory) || "todos";
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(currentCat);

  const handleFilter = useCallback(
    (cat: ProjectCategory) => {
      setActiveFilter(cat);
      if (cat === "todos") {
        router.push("/proyectos", { scroll: false });
      } else {
        router.push(`/proyectos?cat=${cat}`, { scroll: false });
      }
    },
    [router],
  );

  const filteredProjects =
    activeFilter === "todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-magnolia-pink pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-accent text-lg italic text-magnolia-mustard tracking-wide"
          >
            Nuestro trabajo
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-7xl md:text-8xl lg:text-9xl text-magnolia-green font-light leading-[0.9] mt-2"
          >
            Proyectos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-6 max-w-lg font-body text-lg text-magnolia-ink/70 leading-relaxed"
          >
            Cada proyecto es una conversacion entre las flores, el espacio y las
            personas. Aqui reunimos todo lo que hemos creado.
          </motion.p>
        </div>
      </section>

      {/* ─── Filter pills ─── */}
      <section className="bg-magnolia-cream sticky top-0 z-30 border-b border-magnolia-green/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => handleFilter(cat.value)}
                  className={`px-4 py-2 text-xs font-body tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "bg-magnolia-green text-magnolia-cream"
                      : "border border-magnolia-green text-magnolia-green hover:bg-magnolia-green/5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── Projects grid ─── */}
      <section className="bg-magnolia-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-magnolia-ink/50 text-lg">
                No hay proyectos en esta categoria todavia.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {filteredProjects.map((project, index) => {
                const spanClass = GRID_SPANS[index % GRID_SPANS.length];
                const aspectClass =
                  ASPECT_RATIOS[index % ASPECT_RATIOS.length];

                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className={`col-span-1 ${spanClass}`}
                  >
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="group block relative"
                    >
                      {/* Image placeholder */}
                      <div
                        className={`${aspectClass} ${project.color} relative overflow-hidden`}
                      >
                        {/* Decorative placeholder icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-15">
                          <svg
                            viewBox="0 0 100 100"
                            fill="var(--magnolia-green)"
                            className="w-1/3"
                          >
                            <path d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z" />
                            <path
                              d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z"
                              transform="rotate(120 50 50)"
                            />
                            <path
                              d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z"
                              transform="rotate(240 50 50)"
                            />
                          </svg>
                        </div>

                        {/* Zoom container for hover effect */}
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-magnolia-green/0 group-hover:bg-magnolia-green/40 transition-colors duration-500" />

                        {/* Number in corner */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-6">
                          <NumberLabel
                            number={index + 1}
                            className="text-white/90 text-4xl md:text-5xl drop-shadow-lg"
                          />
                        </div>

                        {/* Title overlay on hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Card info below image */}
                      <div className="mt-3 md:mt-4">
                        <h3 className="font-body text-sm tracking-widest uppercase text-magnolia-ink">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="font-body text-xs text-magnolia-ink/50">
                            {project.location}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-magnolia-ink/30" />
                          <span className="font-body text-xs text-magnolia-ink/50">
                            {project.date}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ─── Page wrapper with Suspense for useSearchParams ─── */
export default function ProyectosPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-magnolia-pink flex items-center justify-center">
          <span className="font-accent text-lg italic text-magnolia-green/50">
            Cargando proyectos...
          </span>
        </div>
      }
    >
      <ProyectosContent />
    </Suspense>
  );
}
