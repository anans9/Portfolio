import React from "react";
import { Navbar, Socials, Footer } from "../components";
import { About, Contact, Education, Intro, Projects } from "../pages";

class Router extends React.Component<HomeProps, object> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    const { theme, setTheme } = this.props;
    return (
      <main className="bg-light text-light dark:bg-dark dark:text-dark">
        <div className="max-w-7xl mx-auto flex flex-col overflow-hidden">
          <div className="fixed top-0 left-0 right-0 z-10 py-4 justify-center items-center w-full flex">
            <Navbar theme={theme} setTheme={setTheme} />
          </div>
          <div className="flex flex-col px-5 md:px-6 lg:px-8 pt-20">
            <Intro />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Footer />
          </div>
          <div className="fixed top-1/2 transform -translate-y-1/2 left-2 z-10 py-4 justify-center items-start md:flex hidden">
            <Socials />
          </div>
        </div>
      </main>
    );
  }
}

export default Router;
