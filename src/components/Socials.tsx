import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../utils";

const Socials: React.FC = () => {
  const hoverAnimation = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <div className="md:bg-primaryLight md:dark:bg-primaryDark md:px-1 md:py-3 md:rounded-full md:shadow-2xl">
      <div className="flex flex-row md:flex-col items-center justify-center pb-6 md:pb-0 md:px-2 gap-5">
        {socialLinks.map((link: SocialLink, i: React.Key | number) => (
          <motion.a
            key={i}
            href={link.href}
            rel={link.external ? "noopener noreferrer" : undefined}
            target={link.external ? "_blank" : undefined}
            whileHover={hoverAnimation}
            className="flex items-center justify-center"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
