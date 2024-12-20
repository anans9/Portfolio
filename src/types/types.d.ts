interface HomeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

interface NavbarProps extends HomeProps {}

interface InitialContextProviderProps {
  children: ReactNode;
}

interface InitialContextState {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  activeSection: string;
}

interface NavLink {
  name: string;
  href: string;
  external: boolean;
  icon: ReactNode;
}

interface Skill {
  name: string;
  image: string;
}

interface EducationItem {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  tags: string[];
}

interface Project {
  name: string;
  image: string;
  description: string;
  tags: string[];
  links: {
    github: string;
    preview: string;
  };
}

interface SocialLink {
  href: string;
  external: boolean;
  icon: ReactNode;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type TimelineItem = {
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
  date?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  title?: string;
  titleIcon?: React.ReactNode;
};
