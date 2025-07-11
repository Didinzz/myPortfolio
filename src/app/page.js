import AboutMe from "@/components/AboutMe";
import Contac from "@/components/Contac";
import Github from "@/components/Github";
import HeroSection from "@/components/hero/HeroSection";
import Lanyard from "@/components/Lanyard";
import MyProject from "@/components/MyProject";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <MyProject />
      <MySkills />
      <Github />
      <Contac />
      {/* <Lanyard /> */}
    </main>
  );
}
