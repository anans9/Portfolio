import React from "react";
import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../../utils";

const hoverImageAnimation = {
  scale: 1.05,
  rotate: 5,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const tapImageAnimation = {
  scale: 0.95,
  rotate: 0,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-20">
      <div className="flex flex-col">
        <motion.div
          className="flex flex-row items-center text-3xl sm:text-4xl font-bold text-light dark:text-dark mb-6"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <FaCode />
          <span className="ml-4">Projects</span>
        </motion.div>

        {projects.map((project: Project, i: React.Key | number) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-8 py-4 items-start md:items-center"
          >
            <motion.div
              whileHover={hoverImageAnimation}
              whileTap={tapImageAnimation}
              className="col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-2 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <div className="w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover pointer-events-none"
                />
              </div>
            </motion.div>

            <motion.div
              className="col-span-9 md:col-span-8 lg:col-span-9 xl:col-span-10 flex flex-col justify-center items-start gap-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-2xl font-bold">{project.name}</p>
              <div className="flex flex-row gap-3 flex-wrap">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-1 m-1 text-sm shadow"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="text-lg text-secondaryLight dark:text-secondaryDark">
                {project.description}
              </p>
              <div className="flex flex-row gap-4">
                <a
                  href={project.links.github}
                  rel={project.links.github && "noopener noreferrer"}
                  target={project.links.github && "_blank"}
                  className="flex items-center text-dark bg-primaryLight dark:bg-primaryDark rounded-full px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-light dark:text-dark"
                >
                  <FaGithub size={18} />
                  <span className="ml-2 text-sm">Code</span>
                </a>
                <a
                  href={project.links.preview}
                  rel={project.links.preview && "noopener noreferrer"}
                  target={project.links.preview && "_blank"}
                  className="flex items-center text-dark bg-primaryLight dark:bg-primaryDark rounded-full px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-light dark:text-dark"
                >
                  <FaExternalLinkAlt size={18} />
                  <span className="ml-2 text-sm">Preview</span>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
