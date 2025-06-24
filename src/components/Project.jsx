import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Project = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <motion.img
        className="h-full w-full object-cover transition-transform duration-400"
        whileHover={{ scale: 1.1 }}
        src={project.image}
        alt={project.name}
      />
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-lg "
        initial={{ opacity: 0 }}
        whileTap={{opacity:1}}
        whileHover={{opacity:1}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center mb-2 text-xl">{project.name}</h2>
        <p className="text-center p-2 text-sm md:text-base">{project.description}</p>
        <a
          href={project.link}
          className="rounded-full hover:bg-gray-300 bg-white font-medium text-black px-4 py-2"
        >
          <div className="flex items-center">
            <span>View</span>
            <MdArrowOutward />
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Project;
