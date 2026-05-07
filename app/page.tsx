import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import FeaturedProjects from "@/components/FeaturedProjects";
import MoreProjects from "@/components/MoreProjects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Achievements />
        <FeaturedProjects />
        <MoreProjects />
        <TechStack />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
