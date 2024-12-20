import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    const title = document.title;
    document.title = `Page Not Found | ${title}`;
    return () => {
      document.title = title;
    };
  }, []);

  return (
    <section className="bg-light dark:bg-dark">
      <div className="flex justify-center items-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-primaryLight dark:text-primaryDark font-semibold text-9xl md:text-[150px] lg:text-[180px] xl:text-[240px] leading-none">
            404
          </h1>
          <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondaryLight dark:text-dark">
            Page Not Found
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="bg-transparent hover:bg-primaryLight dark:hover:bg-secondaryDark text-primaryLight dark:text-primaryDark font-bold py-2 px-4 border border-primaryLight dark:border-primaryDark rounded text-lg md:text-xl xl:text-2xl transition-colors duration-300"
            >
              Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
