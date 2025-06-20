import React from "react";
import { HERO } from "../constants";
import myImg from "../assets/abdo.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="flex w-10/12 container lg:min-h-screen flex-col md:flex-row items-center md:justify-between text-slate-300">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <h2 className="p-1 md:p-2 text-2xl font-bold md:text-5xl lg:text-8xl text-slate-100">
          {HERO.name}
        </h2>
        <p className="p-1 md:p-2 text-xl tracking-tighter lg:text-4xl text-slate-200">
          {HERO.greet}
        </p>
        <p className="mb-4 p-1 md:p-2 md:text-base ">{HERO.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 1, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 h-full flex items-center"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={myImg}
            alt="my_img"
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
