import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRegStar
} from "react-icons/fa";

import { AppointBuzz, Ecommerce, Mmarin } from "../assets";

export const navlinks: NavLink[] = [
  {
    name: "About me",
    href: "#aboutme",
    external: false,
    icon: <FaUser className="text-[11px] lg:text-base lg:text-md" />,
  },
  {
    name: "Education",
    href: "#education",
    external: false,
    icon: <FaGraduationCap className="text-[11px] lg:text-base lg:text-md" />,
  },
  {
    name: "Projects",
    href: "#projects",
    external: false,
    icon: <FaCode className="text-[11px] lg:text-base lg:text-md" />,
  },
  {
    name: "Contact",
    href: "#contact",
    external: false,
    icon: <FaEnvelope className="text-[11px] lg:text-base lg:text-md" />,
  },
  {
    'name': 'Resume',
    'href': '/resume.pdf',
    'external': true,
    'icon': <FaRegStar className='text-[11px] lg:text-base lg:text-md' />
  }
];

export const skills: Skill[] = [
  {
    name: "Python",
    image: "python",
  },
  {
    name: "Go",
    image: "go",
  },
  {
    name: "C#",
    image: "csharp",
  },
  {
    name: "TypeScript",
    image: "typescript",
  },
  {
    name: "JavaScript",
    image: "javascript",
  },
  {
    name: "ReactJS",
    image: "react",
  },
  {
    name: "PostgreSQL",
    image: "postgresql",
  },
  {
    name: "NextJS",
    image: "nextjs",
  },
  {
    name: "FastAPI",
    image: "fastapi",
  },
  {
    name: "Flask",
    image: "flask",
  },
  {
    name: "NodeJS",
    image: "nodejs",
  },
  {
    name: "HTML & CSS",
    image: "html5",
  },
];

export const educationItems: EducationItem[] = [
  {
    title: "Bachelor's in Computer Science",
    subtitle: "Florida State University",
    description:
      "Studied software architecture and algorithms, building a strong foundation in programming, with a focus on full-stack development and machine learning (LLMs).",
    date: "2020 - 2023",
    tags: [
      "C++",
      "Python",
      "OOP",
      "Data Structures & Algorithms",
      "Web Development",
      "CI/CD Pipeline",
    ],
  }
];

export const projects = [
  {
    name: "AppointBuzz",
    image: AppointBuzz,
    description:
      "A cross-platform mobile application designed to manage and schedule appointments seamlessly. Built with Expo and React Native for a smooth user experience, leveraging TypeScript for strong typing and reliability. The backend is powered by FastAPI and Python, with SQL for efficient data management and storage.",
    tags: [
      "Expo",
      "React Native",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQL",
      "Google Cloud",
      "Docker",
    ],
    links: {
      github: "",
      preview: "",
    },
  },
  {
    name: "Eshop",
    image: Ecommerce,
    description:
      "A dynamic Ecommerce Application designed to enhance user engagement and improve transaction efficiency. Features include Spotify data analytics, robust backend with Python and Flask, and a responsive front-end using React and TailwindCSS. The system is backed by MongoDB, with Nginx and Gunicorn for reliable server performance.",
    tags: [
      "Python",
      "Flask",
      "React",
      "MongoDB",
      "Tailwind CSS",
      "Nginx",
      "Gunicorn",
      "Linode",
    ],
    links: {
      github: "https://github.com/anans9/Ecommerce-Application",
      preview: "",
    },
  },
  {
    name: "M.Marin Insurance",
    image: Mmarin,
    description:
      "Complete redesign of the M.Marin Inc website to offer a sleek, user-friendly interface with advanced animations for better engagement. Built with React, TailwindCSS, and JavaScript for a responsive experience, and Framer Motion for smooth visual effects.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
    links: { github: "", preview: "https://mmarininc.com" },
  },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/anans9",
    external: true,
    icon: (
      <FaGithub
        size={25}
        className="text-light dark:text-dark md:text-dark hover:text-primaryLight dark:hover:text-primaryDark"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/in/anans9",
    external: true,
    icon: (
      <FaLinkedin
        size={25}
        className="text-light dark:text-dark md:text-dark hover:text-primaryLight dark:hover:text-primaryDark"
      />
    ),
  },
  {
    href: "#contact",
    external: false,
    icon: (
      <FaEnvelope
        size={25}
        className="text-light dark:text-dark md:text-dark hover:text-primaryLight dark:hover:text-primaryDark"
      />
    ),
  },
];
