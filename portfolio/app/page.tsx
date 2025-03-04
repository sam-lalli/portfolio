import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TechnologiesSection from "@/components/technologies-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Marquee from "@/components/marquee"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <Marquee />
      <ContactSection />
    </div>
  )
}

