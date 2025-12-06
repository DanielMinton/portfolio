import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { AgenticDemo } from "@/components/sections/AgenticDemo";
import { Playground } from "@/components/sections/Playground";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <AgenticDemo />
        <Playground />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
