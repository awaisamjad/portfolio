import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Awais Amjad's Portfolio",
  EMAIL: "awaisamjad08@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Check out my stuff!",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked professionally.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and possibly demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "GitHub",
    HREF: "https://github.com/awaisamjad"
  },
  { 
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/awais-amjad-145aa7215/",
  },
  {
    NAME: "YouTube",
    HREF: "https://www.youtube.com/@awaisamjad5157",
  }
];
