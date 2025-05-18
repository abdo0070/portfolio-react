import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Project = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <img
        className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-110"
        src={project.image}
        alt={project.name}
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0
        backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
      >
        <h2 className="text-center mb-2 text-xl">{project.name}</h2>
        <p className="text-center p-2">{project.description}</p>
        <a
          href={project.githubLink}
          className="rounded-full hover:bg-gray-300 bg-white font-medium text-black px-4 py-2"
        >
          <div className="flex items-center">
            <span>View</span>
            <MdArrowOutward />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
