import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const WorkExp = () => {
  return (
    <div className="pt-20 text-white" id="work">
      <h2 className="text-center text-4xl font-semibold tracking-tighter">
        Work Experince
      </h2>

      <div className="md:space-y-6 space-y-3 py-10">
        {EXPERIENCES.map((e, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="lg:p-8 md:p-6 p-2 rounded-xl border border-stone-50/30 bg-white/10"
              key={i}
            >
              <h3 className="text-2xl font-semibold">{e.title}</h3>
              <p className="text-xl">{e.company}</p>
              <p className="text-sm text-stone-300">{e.duration}</p>
              <p className="mt-2 text-base">{e.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExp;
