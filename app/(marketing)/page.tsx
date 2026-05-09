import {
  HeroHome,
  ProjectsGrid,
  ServicesStrip,
  AboutPreview,
  CtaFinal,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ProjectsGrid />
      <ServicesStrip />
      <AboutPreview />
      <CtaFinal />
    </>
  );
}
