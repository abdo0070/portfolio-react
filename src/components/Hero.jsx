import React from "react";
import { HERO } from "../constants";
import myImg from "../assets/abdo.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="flex lg:min-h-screen flex-col md:flex-row items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full md:w-1/2">
          <h2 className="p-1 md:p-2 text-2xl font-bold md:text-5xl lg:text-8xl">
            {HERO.name}
          </h2>
          <p className="p-1 md:p-2 text-xl tracking-tighter lg:text-4xl">
            {HERO.greet}
          </p>
          <p className="mb-4 p-1 md:p-2 text-sm">{HERO.description}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full md:w-1/2 lg:p-8 h-full flex items-center">
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={myImg}
              alt="my_img"
              width={550}
              height={550}
              className="rounded-3xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
