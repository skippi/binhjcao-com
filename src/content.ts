export const site = {
  name: "Justin Cao",
  handle: "binhjcao",
  url: "https://binhjcao.com",
  avatar: "https://www.gravatar.com/avatar/2f4599e2332b6cec9022b09aca611559?s=64",
  description: "Projects and writing by Justin Cao.",
};

export const socials = [
  { name: "Discord", href: "https://discord.com/users/177888205536886784/" },
  { name: "Email", href: "mailto:jbtcao@gmail.com" },
];

export const bio = {
  default: [`Here be dragons.`],
  long: [
    `Here be dragons. Old maps used that line for the water past the last known coast, where the drawing stopped and the rest was guesswork.`,
    `This page is that edge. A name, a few projects, and one post, with the blank space left on purpose. The dragons are the unfinished parts, and they are the reason the map is still worth opening.`,
  ],
};

export const projects = [
  {
    name: "vimty",
    href: "https://github.com/skippi/vimty",
    description: "Vim typing test",
    icon: "terminal",
    tags: ["Dev Tool", "Vim"],
  },
  {
    name: "osumix",
    href: "https://github.com/skippi/osumix",
    description: "Audio compiler for osu beatmaps",
    icon: "headphones",
    tags: ["Audio", "Tool"],
  },
  {
    name: "vnseg",
    href: "https://github.com/skippi/vnseg",
    description: "NLP experiment for semantic Vietnamese word parsing",
    icon: "cube",
    tags: ["NLP", "Experiment"],
  },
  {
    name: "portfolio",
    href: "https://binhjcao.com/",
    github: "https://github.com/skippi/skippi.github.io",
    description: "This webpage",
    icon: "layers",
    tags: ["Web", "Design"],
  },
];

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
