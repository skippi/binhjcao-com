export const site = {
  name: "Justin Cao",
  handle: "binhjcao",
  url: "https://binhjcao.com",
  email: "hello@binhjcao.com",
  description: "Projects and writing by Justin Cao.",
};

export const socials = [
  { name: "Twitter", href: "https://x.com/binhjcao" },
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
  { name: "vimty", href: "https://github.com/skippi/vimty" },
  { name: "osumix", href: "https://github.com/skippi/osumix" },
  { name: "vnseg", href: "https://github.com/skippi/vnseg" },
  { name: "portfolio", href: "https://binhjcao.com/" },
];

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
