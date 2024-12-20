import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

export const itemVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const TimelineItem = ({
  item,
  isLast,
}: {
  item: TimelineItem;
  isLast: boolean;
}) => {
  return (
    <motion.div
      className="relative flex group"
      variants={itemVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {!isLast && (
        <div className="absolute left-7 top-12 w-0.5 h-full -ml-px bg-gray-300 dark:bg-[#ccd6f6]" />
      )}

      <div className="flex flex-col relative w-full pb-8">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 dark:bg-[#ccd6f6]">
            {item.icon || (
              <FaChevronRight className="w-4 h-4 text-gray-500 dark:text-gray-700" />
            )}
          </div>

          <div className="ml-4 flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
            {item.subtitle && (
              <p className="text-sm md:text-md text-secondaryLight dark:text-secondaryDark italic mt-2">
                {item.subtitle}
              </p>
            )}
            {item.date && (
              <p className="text-xs text-secondaryLight dark:text-secondaryDark italic mt-1">
                {item.date}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 ml-14">
          <p className="px-4 text-sm md:text-base text-secondaryLight dark:text-secondaryDark mt-2">
            {item.description}
          </p>

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 px-2">
              {item.tags.map((tag: string, index: React.Key | number) => (
                <span
                  key={index}
                  className="bg-primaryLight dark:bg-primaryDark text-dark rounded-full px-3 py-1 m-1 text-xs md:text-sm shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
