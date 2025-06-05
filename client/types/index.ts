type Image = {
  id: string;
  documentId: string;
  url: string;
  alternativeText: string | null;
  name: string;
};

type ComponentType =
  | "blocks.hero"
  | "blocks.section-heading"
  | "blocks.content-with-image"
  | "blocks.featured-experience"
  | "blocks.featured-projects";

export type NavLink = {
  href: string;
  label: string;
  isExternal: boolean;
  style: "PRIMARY" | "SECONDARY";
};

export type Logo = {
  image: Image;
  link: NavLink;
};

export type Navigation = {
  navItems: NavLink[];
};

export type SocialLinks = {
  socialLink: NavLink[];
};

export type Technology = {
  id: string;
  documentId: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  image: Image;
  technologies: Technology[];
};

interface Base<T extends ComponentType, D extends object = object> {
  __component: T;
  id: string;
  createdAt: string;
  updatedAt: string;
  data: D;
}

export type Block =
  | HeroProps
  | SectionHeadingProps
  | ContentWithImageProps
  | FeaturedExperienceProps
  | FeaturedProjectsProps;

export interface HeroProps extends Base<"blocks.hero"> {
  badge: string;
  heading: string;
  content: string;
  cta?: NavLink;
  image?: Image;
}

export interface SectionHeadingProps extends Base<"blocks.section-heading"> {
  heading: string;
  subHeading: string;
  badge: string;
  sectionLink: string;
  centered?: boolean;
}

export interface ContentWithImageProps
  extends Base<"blocks.content-with-image"> {
  badge: string;
  heading: string;
  content: string;
  isReversed?: boolean;
  sectionLink?: string;
  image: Image;
  links?: NavLink[];
}

export interface Experience {
  id: string;
  documentId: string;
  description: string;
  startDate: string;
  endDate: string;
  role: string;
  company: string;
  technologies: Technology[];
}

export interface FeaturedExperienceProps
  extends Base<"blocks.featured-experience"> {
  experiences: Experience[];
}

export interface GlobalPageProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: Logo;
  navigation: Navigation;
  socialLinks: SocialLinks;
  text: string;
}

export interface FeaturedProjectsProps
  extends Base<"blocks.featured-projects"> {
  projects: Project[];
}
