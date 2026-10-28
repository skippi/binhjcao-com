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

export type Block =
  | { type: "p"; html: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; code: string };

export type Entry = {
  slug: string;
  title: string;
  date: string;
  description: string;
  blocks: Block[];
};

export const posts: Entry[] = [
  {
    slug: "hello-world",
    title: "hello world",
    date: "2026-10-28",
    description: "A placeholder post.",
    blocks: [
      {
        type: "p",
        html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        type: "p",
        html: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
