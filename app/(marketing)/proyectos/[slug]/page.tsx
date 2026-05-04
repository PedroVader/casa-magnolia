import Link from "next/link";
import { Badge } from "@/components/ui";

/* ─── Types ─── */
interface ProjectDetail {
  slug: string;
  title: string;
  location: string;
  date: string;
  client: string;
  category: string;
  categorySlug: string;
  narrative: string[];
  credits: { role: string; name: string }[];
  galleryColors: string[];
}

/* ─── Placeholder data (will be replaced with CMS data) ─── */
const PROJECTS: Record<string, ProjectDetail> = {
  "boda-palacio-san-joseren": {
    slug: "boda-palacio-san-joseren",
    title: "Palacio San Joseren",
    location: "Getxo, Bizkaia",
    date: "19\u00B705\u00B72024",
    client: "Ane & Mikel",
    category: "Bodas",
    categorySlug: "bodas",
    narrative: [
      "El Palacio San Joseren, con sus jardines centenarios y la luz filtrada entre tilos, fue el escenario perfecto para una boda que pedia flores silvestres y una paleta de verdes apagados con toques de melocoton. Trabajamos con ramas de olivo, dalias en tonos nude, rosas de jardin y gramineas que parecian haber crecido alli mismo. Cada rincon del palacio conto con una intervencion floral pensada para dialogar con la arquitectura: desde la escalinata principal hasta las mesas del banquete, donde los centros bajos permitieron la conversacion y las velas crearon una atmosfera intima cuando cayo la noche.",
      "La ceremonia se celebro bajo un arco asimetrico de follaje que enmarcaba la ria al fondo. Quisimos que las flores contaran la historia de Ane y Mikel sin necesidad de palabras: un ramo de novia desestructurado, boutonnieres con ramitas de romero del propio jardin, y una mesa imperial de doce metros vestida con un camino vegetal que iba cambiando de textura y color desde un extremo al otro. Fue un proyecto de esos que nos recuerdan por que elegimos este oficio.",
    ],
    credits: [
      { role: "Fotografia", name: "Ane Lobo Studio" },
      { role: "Planificacion", name: "Casa Magnolia" },
      { role: "Catering", name: "Yandiola" },
      { role: "Papeleria", name: "Estudio Dos Puntos" },
      { role: "Musica", name: "Brassica Ensemble" },
      { role: "Vestido", name: "Lucia de Miguel Atelier" },
    ],
    galleryColors: [
      "bg-magnolia-green/15",
      "bg-magnolia-pink/40",
      "bg-magnolia-blush/30",
      "bg-magnolia-mustard/15",
      "bg-magnolia-green/10",
      "bg-magnolia-terracota/15",
      "bg-magnolia-pink/30",
      "bg-magnolia-blush/20",
    ],
  },
  "evento-hotel-carlton": {
    slug: "evento-hotel-carlton",
    title: "Hotel Carlton",
    location: "Bilbao, Bizkaia",
    date: "03\u00B711\u00B72024",
    client: "Bilbao Luxury Week",
    category: "Eventos",
    categorySlug: "eventos",
    narrative: [
      "Para la gala de apertura de la Bilbao Luxury Week, el Hotel Carlton nos dio carta blanca para transformar su salon principal en un jardin nocturno. Utilizamos grandes instalaciones colgantes de follaje verde oscuro con orquideas blancas y velas suspendidas, creando un dosel vegetal que flotaba sobre los asistentes. Las columnas del salon se envolvieron con guirnaldas de hiedra y eucalipto, y cada mesa redonda llevo un centro alto de cristal con flores sumergidas.",
      "El reto fue combinar la opulencia que el evento requeria con nuestra filosofia de diseno organico y cercano a la naturaleza. La solucion fue trabajar con una paleta monocromatica de verdes y blancos, dejando que la textura y la volumetria crearan el impacto visual. El resultado fue un espacio que se sentia a la vez sofisticado y salvaje, exactamente lo que el cliente buscaba para una noche donde la naturaleza y el lujo se dieron la mano.",
    ],
    credits: [
      { role: "Fotografia", name: "Jon Veral" },
      { role: "Direccion creativa", name: "Casa Magnolia" },
      { role: "Produccion", name: "Bilbao Events Co." },
      { role: "Iluminacion", name: "Luzentia" },
      { role: "Catering", name: "Hotel Carlton" },
    ],
    galleryColors: [
      "bg-magnolia-mustard/15",
      "bg-magnolia-green/15",
      "bg-magnolia-pink/30",
      "bg-magnolia-blush/25",
      "bg-magnolia-terracota/15",
      "bg-magnolia-green/20",
      "bg-magnolia-pink/40",
      "bg-magnolia-mustard/20",
    ],
  },
};

/* Fallback for slugs without specific data */
const DEFAULT_PROJECT: ProjectDetail = {
  slug: "proyecto",
  title: "Proyecto",
  location: "Bilbao, Bizkaia",
  date: "01\u00B701\u00B72024",
  client: "Cliente",
  category: "Bodas",
  categorySlug: "bodas",
  narrative: [
    "Este proyecto nacio de una conversacion larga sobre como las flores pueden transformar un espacio y contar una historia sin palabras. Trabajamos con una paleta de tonos naturales, eligiendo cada tallo con la intencion de que pareciera haber crecido alli. Los arreglos principales combinaron follaje local con flores de temporada, creando composiciones que dialogaban con la arquitectura del lugar y la luz cambiante de la tarde.",
    "Cada detalle fue pensado para que los invitados sintieran que entraban en un jardin secreto: los centros de mesa bajos con texturas silvestres, las guirnaldas que recorrian las vigas de madera, y un arco ceremonial asimetrico que enmarcaba el paisaje. Fue un proyecto donde la contencion y la abundancia encontraron su equilibrio perfecto.",
  ],
  credits: [
    { role: "Fotografia", name: "Estudio Ejemplo" },
    { role: "Planificacion", name: "Casa Magnolia" },
    { role: "Catering", name: "Nombre Catering" },
    { role: "Papeleria", name: "Estudio Grafico" },
  ],
  galleryColors: [
    "bg-magnolia-green/15",
    "bg-magnolia-pink/40",
    "bg-magnolia-blush/30",
    "bg-magnolia-mustard/15",
    "bg-magnolia-green/10",
    "bg-magnolia-terracota/15",
    "bg-magnolia-pink/30",
    "bg-magnolia-blush/20",
  ],
};

/* ─── Navigation slugs for prev/next ─── */
const PROJECT_ORDER = [
  "boda-palacio-san-joseren",
  "evento-hotel-carlton",
  "editorial-primavera",
  "mesa-casa-vasca",
  "boda-finca-artea",
  "taller-arreglos-silvestres",
];

const NAV_LABELS: Record<string, string> = {
  "boda-palacio-san-joseren": "Palacio San Joseren",
  "evento-hotel-carlton": "Hotel Carlton",
  "editorial-primavera": "Editorial Primavera",
  "mesa-casa-vasca": "Mesa Casa Vasca",
  "boda-finca-artea": "Finca Artea",
  "taller-arreglos-silvestres": "Arreglos Silvestres",
};

const NAV_COLORS: Record<string, string> = {
  "boda-palacio-san-joseren": "bg-magnolia-green/15",
  "evento-hotel-carlton": "bg-magnolia-mustard/15",
  "editorial-primavera": "bg-magnolia-terracota/15",
  "mesa-casa-vasca": "bg-magnolia-blush/25",
  "boda-finca-artea": "bg-magnolia-pink/30",
  "taller-arreglos-silvestres": "bg-magnolia-green/10",
};

/* ─── Gallery layout spans ─── */
const GALLERY_SPANS = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-12",
  "md:col-span-5",
];

const GALLERY_ASPECTS = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[1/1]",
  "aspect-[1/1]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[16/7]",
  "aspect-[4/5]",
];

/* ─── Page component ─── */
export default async function ProyectoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS[slug] ?? { ...DEFAULT_PROJECT, slug, title: slug };

  /* Navigation */
  const currentIndex = PROJECT_ORDER.indexOf(slug);
  const prevSlug =
    currentIndex > 0
      ? PROJECT_ORDER[currentIndex - 1]
      : PROJECT_ORDER[PROJECT_ORDER.length - 1];
  const nextSlug =
    currentIndex < PROJECT_ORDER.length - 1
      ? PROJECT_ORDER[currentIndex + 1]
      : PROJECT_ORDER[0];

  return (
    <>
      {/* ─── Header ─── */}
      <section className="bg-magnolia-cream pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-magnolia-ink/40">
              <li>
                <Link
                  href="/proyectos"
                  className="hover:text-magnolia-green transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-magnolia-ink/70">{project.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Title block */}
            <div className="lg:col-span-8">
              <Badge variant="muted">{project.category}</Badge>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-magnolia-green font-light leading-[0.9] mt-4">
                {project.title}
              </h1>
            </div>

            {/* Meta block */}
            <div className="lg:col-span-4">
              <dl className="space-y-3 font-body text-sm">
                <div className="flex items-baseline gap-3">
                  <dt className="tracking-widest uppercase text-magnolia-ink/40 w-24 shrink-0">
                    Cliente
                  </dt>
                  <dd className="text-magnolia-ink">{project.client}</dd>
                </div>
                <div className="flex items-baseline gap-3">
                  <dt className="tracking-widest uppercase text-magnolia-ink/40 w-24 shrink-0">
                    Lugar
                  </dt>
                  <dd className="text-magnolia-ink">{project.location}</dd>
                </div>
                <div className="flex items-baseline gap-3">
                  <dt className="tracking-widest uppercase text-magnolia-ink/40 w-24 shrink-0">
                    Fecha
                  </dt>
                  <dd className="text-magnolia-ink">{project.date}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Hero image placeholder ─── */}
      <section className="bg-magnolia-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="aspect-[16/7] bg-magnolia-green/10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg
                viewBox="0 0 200 200"
                fill="var(--magnolia-green)"
                className="w-1/4"
              >
                <path d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z" />
                <path
                  d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z"
                  transform="rotate(72 100 100)"
                />
                <path
                  d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z"
                  transform="rotate(144 100 100)"
                />
                <path
                  d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z"
                  transform="rotate(216 100 100)"
                />
                <path
                  d="M100 20c15 0 25 35 25 50s-10 20-25 20-25-5-25-20 10-50 25-50z"
                  transform="rotate(288 100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Narrative text ─── */}
      <section className="bg-magnolia-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {project.narrative.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-base md:text-lg text-magnolia-ink/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Editorial gallery ─── */}
      <section className="bg-magnolia-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            {project.galleryColors.map((color, i) => (
              <div
                key={i}
                className={`col-span-1 ${GALLERY_SPANS[i % GALLERY_SPANS.length]}`}
              >
                <div
                  className={`${GALLERY_ASPECTS[i % GALLERY_ASPECTS.length]} ${color} relative overflow-hidden`}
                >
                  {/* Decorative placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <svg
                      viewBox="0 0 100 100"
                      fill="var(--magnolia-green)"
                      className="w-1/4"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Credits block ─── */}
      <section className="bg-magnolia-pink/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl text-magnolia-green font-light">
              Creditos
            </h2>

            <div className="mt-2 mb-8 w-12 h-px bg-magnolia-mustard" />

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {project.credits.map((credit, i) => (
                <div key={i} className="flex flex-col">
                  <dt className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40">
                    {credit.role}
                  </dt>
                  <dd className="font-body text-base text-magnolia-ink mt-0.5">
                    {credit.name}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ─── Prev / Next navigation ─── */}
      <section className="bg-magnolia-cream py-12 md:py-16 border-t border-magnolia-green/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous project */}
            <Link
              href={`/proyectos/${prevSlug}`}
              className="group flex items-center gap-4 md:gap-6"
            >
              {/* Thumbnail placeholder */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 shrink-0 ${NAV_COLORS[prevSlug] ?? "bg-magnolia-green/10"} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <svg
                    viewBox="0 0 100 100"
                    fill="var(--magnolia-green)"
                    className="w-1/2"
                  >
                    <path d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z" />
                    <path
                      d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z"
                      transform="rotate(120 50 50)"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <span className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 group-hover:text-magnolia-green transition-colors">
                  Proyecto anterior
                </span>
                <p className="font-display text-lg md:text-xl text-magnolia-green font-light mt-0.5 group-hover:text-magnolia-terracota transition-colors">
                  {NAV_LABELS[prevSlug] ?? "Proyecto"}
                </p>
              </div>
            </Link>

            {/* Next project */}
            <Link
              href={`/proyectos/${nextSlug}`}
              className="group flex items-center gap-4 md:gap-6 md:flex-row-reverse md:text-right"
            >
              {/* Thumbnail placeholder */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 shrink-0 ${NAV_COLORS[nextSlug] ?? "bg-magnolia-green/10"} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <svg
                    viewBox="0 0 100 100"
                    fill="var(--magnolia-green)"
                    className="w-1/2"
                  >
                    <path d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z" />
                    <path
                      d="M50 15c-8 0-15 10-15 30s7 20 15 20 15 0 15-20-7-30-15-30z"
                      transform="rotate(120 50 50)"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <span className="font-body text-xs tracking-widest uppercase text-magnolia-ink/40 group-hover:text-magnolia-green transition-colors">
                  Siguiente proyecto
                </span>
                <p className="font-display text-lg md:text-xl text-magnolia-green font-light mt-0.5 group-hover:text-magnolia-terracota transition-colors">
                  {NAV_LABELS[nextSlug] ?? "Proyecto"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
