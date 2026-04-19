import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";

export default async function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Projects />
    </div>
  )
};