import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { skills } from "../../utils";

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export const timelineVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const About: React.FC = () => {
  return (
    <section id="aboutme" className="mb-20">
      <motion.div
        className="flex flex-row items-center text-3xl sm:text-4xl font-bold text-light dark:text-dark mb-6"
        variants={timelineVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <FaUserGraduate />
        <span className="ml-4">About Me</span>
      </motion.div>
      <motion.div
        className="text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <p className="text-secondaryLight dark:text-secondaryDark text-start mb-6">
          I recently graduated from&nbsp;
          <a
            href="https://www.fsu.edu"
            rel="noreferrer"
            target="_blank"
            className="text-primaryLight dark:text-primaryDark font-bold link-underline"
          >
            Florida State University
          </a>
          &nbsp;with a degree in Computer Science, where I developed a strong
          passion for full-stack development.
        </p>
        <p className="mb-6">
          Here are some technologies I have been recently working with:
        </p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills?.map((skill, i) => (
            <motion.div
              key={i}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${skill.image}-colored.svg`}
                  width="24"
                  height="24"
                  alt={skill.name}
                />
                <span className="text-secondaryLight dark:text-secondaryDark">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6">
          Outside of coding, I enjoy playing video games and listening to music.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
