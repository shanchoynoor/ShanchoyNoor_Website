import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const YoutubeVideos = dynamic(() => import("@/components/sections/YoutubeVideos"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <YoutubeVideos />
      <Contact />
    </>
  );
}
