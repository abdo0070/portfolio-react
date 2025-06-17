import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="py-8 container text-white w-full" id="education">
      <h2 className="mb-4 text-center font-semibold text-3xl lg:text-4xl">
        Education
      </h2>

      {EDUCATION.map((edu, i) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="md:pb-3 p-1"
            key={i}
          >
            <h2 className="text-xl font-semibold">{edu.degree}</h2>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-1">{edu.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Education;
