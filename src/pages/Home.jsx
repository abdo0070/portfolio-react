import { Banner } from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExp from "../components/WorkExp";

export const Home = () => {
  return (
    <main className="relative h-full w-full overflow-y-auto antialiased  bg-gradient-to-r from-slate-950 to-slate-800">
      <div className=" w-full z-10 flex flex-col items-center pt-0-4 space-y-8">
        <Navbar />
        <Hero />
        <Banner />
        <Projects />
        <Skills />
        <WorkExp />
        <Education />
        <Contact/>
        <Footer />
      </div>
    </main>
  );
};
