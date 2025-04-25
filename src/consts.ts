import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "David Zhu",
  EMAIL: "jiaqi.david.zhu@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "David Zhu is a hardware engineer with a passion for building products that help push the boundaries of technology.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/davidwuya"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jiaqidavid/",
  }
];
