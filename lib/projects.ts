export interface ProjectMeta {
  id: "gymtrack" | "gymfox" | "libeo";
  name: string;
  url: string;
  tech: string[];
  image?: { src: string };
  banner?: "bank";
}

export const projects: ProjectMeta[] = [
  {
    id: "gymtrack",
    name: "GymTrack",
    url: "https://gymstrack.com",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "SQLite", "Vite"],
    image: { src: "/images/gymtrack.jpg" },
  },
  {
    id: "gymfox",
    name: "GymFox",
    url: "https://gym-fox-app.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: { src: "/images/gymfox.jpg" },
  },
  {
    id: "libeo",
    name: "Libéo",
    url: "https://github.com/GeFy9999/Gestion-de-banque",
    tech: ["Next.js 16", "React 19", "Express", "SQLite (sql.js)", "Tailwind"],
    banner: "bank",
  },
];
