import React from "react";
import { TimelineItem } from "../components";
import { motion } from "framer-motion";

export const timelineVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Timeline: React.FC<TimelineProps> = ({ items, title, titleIcon }) => {
  return (
    <section id="education" className="mb-20">
      <motion.div
        className="flex flex-row items-center text-3xl sm:text-4xl font-bold text-light dark:text-dark mb-6"
        variants={timelineVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {titleIcon}
        <span className="ml-4">{title}</span>
      </motion.div>

      <div className="space-y-2">
        {items.map((item, index: React.Key | number) => (
          <TimelineItem
            key={index}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
