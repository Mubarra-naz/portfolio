import LinkIcon from "@/components/links/LinkIcon";
import AboutSection from "@/views/AboutSection";
import BannerSection from "@/views/BannerSection";
import ContactSection from "@/views/ContactSection";
import ProjectsSection from "@/views/ProjectsSection";
import SkillsSection from "@/views/SkillsSection";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
