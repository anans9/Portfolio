import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { navlinks } from "../utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="flex flex-row items-center justify-between bg-primaryLight dark:bg-primaryDark px-3 md:px-4 py-1 md:py-2 rounded-full shadow-2xl">
      <div className="flex flex-row gap-3 items-center">
        {navlinks.map((link: NavLink, i: React.Key | number) => (
          <motion.div
            key={i}
            className="flex flex-row gap-2 items-center cursor-pointer"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <span className="inline-flex items-center text-dark">
              {link.icon}
            </span>
            <a
              href={link.href}
              rel={link.external ? "noopener noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
              className="text-[11px] lg:text-base lg:text-md text-dark link-underline"
            >
              {link.name}
            </a>
          </motion.div>
        ))}
      </div>
      <AnimatePresence initial={false}>
        <motion.button
          key={theme}
          onClick={toggleTheme}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.5 }}
          className="p-2"
        >
          {theme === "light" ? (
            <FaMoon className="text-dark hover:text-primaryLight text-sm md:text-base lg:text-lg" />
          ) : (
            <FaSun className="text-dark hover:text-primaryDark text-sm md:text-base lg:text-lg" />
          )}
        </motion.button>
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
