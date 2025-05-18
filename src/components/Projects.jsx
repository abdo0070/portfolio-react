import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import Project from "./Project";
const Projects = () => {
  return (
    <div className="w-full text-white" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        className="mb-8 text-center font-semibold text-3xl lg:text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 md:gap-2 gap-1">
        {PROJECTS.map((p) => {
          return <Project project={p} key={p.id} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
