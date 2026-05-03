import {
  HeroHome,
  ProjectsGrid,
  ServicesStrip,
  UpcomingWorkshops,
  AboutPreview,
  CtaFinal,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ProjectsGrid />
      <ServicesStrip />
      <UpcomingWorkshops />
      <AboutPreview />
      <CtaFinal />
    </>
  );
}
