import React, { createContext, useState, useEffect, useCallback } from "react";

export const InitialContext = createContext<InitialContextState | undefined>(
  undefined
);

export const InitialContextProvider: React.FC<InitialContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections: string[] = ["aboutme", "education", "projects", "contact"];
    let currentSection = "";

    sections.forEach((section: string) => {
      const element = document.getElementById(section);
      const scrollPosition = window.scrollY;

      if (
        element &&
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        currentSection = section;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const preferredTheme = localTheme
      ? localTheme
      : mediaQuery.matches
      ? "dark"
      : "light";

    setTheme(preferredTheme);

    document.documentElement.classList.toggle(
      "dark",
      preferredTheme === "dark"
    );

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleHashChange = useCallback(() => {
    const id = window.location.hash.substring(1);
    if (id) {
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [handleHashChange]);

  const contextValue = {
    theme,
    setTheme,
    activeSection,
  };

  return (
    <InitialContext.Provider value={contextValue}>
      {children}
    </InitialContext.Provider>
  );
};
