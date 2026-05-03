import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://casamagnolia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre-nosotras",
    "/proyectos",
    "/servicios",
    "/servicios/bodas",
    "/servicios/eventos",
    "/servicios/rodajes",
    "/servicios/hoteles-restaurantes",
    "/talleres",
    "/contacto",
    "/legal/aviso-legal",
    "/legal/privacidad",
    "/legal/cookies",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("legal") ? 0.3 : 0.8,
  }));

  // TODO: Fetch dynamic project and workshop slugs from Supabase/Payload
  // const projects = await getPublishedProjects();
  // const workshops = await getOpenWorkshops();
  //
  // const projectEntries = projects.map((p) => ({
  //   url: `${BASE_URL}/proyectos/${p.slug}`,
  //   lastModified: p.updatedAt,
  //   changeFrequency: "monthly" as const,
  //   priority: 0.7,
  // }));
  //
  // const workshopEntries = workshops.map((w) => ({
  //   url: `${BASE_URL}/talleres/${w.slug}`,
  //   lastModified: w.updatedAt,
  //   changeFrequency: "weekly" as const,
  //   priority: 0.7,
  // }));

  return [...staticEntries];
}
