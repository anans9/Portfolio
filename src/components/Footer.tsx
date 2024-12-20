import React from "react";
import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <footer className="mb-10">
      <div className="flex flex-col md:hidden">
        <Socials />
      </div>
      <div className="text-secondaryLight dark:text-secondaryDark hover:text-primaryLight dark:hover:text-primaryDark">
        <p className="text-center text-bold">© {new Date().getFullYear()} {document.title}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
