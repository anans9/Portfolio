import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInitialContext } from "../../context/useInitialContext";
import { ProfileImg } from "../../assets";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const Intro: React.FC = () => {
  const { theme } = useInitialContext();
  const [key, setKey] = useState(theme);

  useEffect(() => {
    setKey(theme);
  }, [theme]);

  return (
    <motion.section
      id="intro"
      className="flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between text-center lg:text-left pt-10 mb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants} className="max-w-7xl mx-auto">
        <div className="font-semibold text-[5vw] md:text-4xl lg:text-6xl">
          <Typewriter
            key={key}
            onInit={(typewriter) => {
              const color = theme === "dark" ? "#64ffda" : "#D4AF37";
              typewriter
                .typeString(
                  `Hello, I am <span style="color: ${color};">${document.title}</span>.`
                )
                .start();
            }}
          />
          <p className="mt-4 text-base md:text-lg max-w-[90%] mx-auto lg:mx-0 text-secondaryLight dark:text-secondaryDark">
            I create web applications and have a strong interest in full-stack
            development, alongside a passion for artificial intelligence and
            machine learning.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center mt-8 py-2 px-4 text-base md:text-lg font-bold text-primaryLight hover:bg-primaryLight dark:text-primaryDark border-2 border-primaryLight dark:border-primaryDark rounded dark:hover:bg-secondaryDark"
          >
            <FaEnvelope /> <span className="ml-2">Say, hi!</span>
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mb-10 lg:mb-0 flex justify-center items-center"
      >
        <div className="p-2 border-2 w-[275px] h-[275px] border-primaryLight dark:border-primaryDark rounded-full shadow-xl flex justify-center items-center">
          <motion.img
            src={ProfileImg}
            alt="Suryansh"
            className="rounded-full w-[250px] h-[250px] object-cover"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
