import { SKILLS } from "../constants";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="container w-10/12 text-white" id="skills">
      <h2 className="lg:mb-12 lg:mt-20 my-6 text-center text-4xl font-semibold">
        Skills
      </h2>
      <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30 ">
        {SKILLS.map((s, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3,delay:0.2 }}
              className="py-6 flex items-center justify-between border-b border-stone-50/30"
              key={index}
            >
              <div className="flex items-center">
                {s.icon}
                <h3 className="px-3 text-base lg:text-2xl ">{s.name}</h3>
              </div>
              <div className="font-semibold lg:text-xl">{s.experience}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
