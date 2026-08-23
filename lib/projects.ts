export interface ProjectMeta {
  id: "gymtrackv2" | "gymfox" | "libeo";
  name: string;
  url: string;
  tech: string[];
  images: string[];
}

export const projects: ProjectMeta[] = [
  {
    id: "gymtrackv2",
    name: "GymTrack v2",
    url: "https://gymstrack.com",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Vite",
    ],
    images: [
      "/images/gymtrackv2/Screenshot 2026-08-21 123041.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123144.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123337.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123354.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123417.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123437.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123517.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123535.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123559.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123714.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123736.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 123951.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 124013.png",
      "/images/gymtrackv2/Screenshot 2026-08-21 124613.png",
    ],
  },
  {
    id: "gymfox",
    name: "GymFox",
    url: "https://gym-fox-app.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    images: [
      "/images/gymfox/1.jpg",
      "/images/gymfox/2.jpg",
      "/images/gymfox/3.jpg",
      "/images/gymfox/4.jpg",
      "/images/gymfox/5.jpg",
      "/images/gymfox/6.jpg",
      "/images/gymfox/7.jpg",
      "/images/gymfox/8.jpg",
    ],
  },
  {
    id: "libeo",
    name: "Libéo",
    url: "https://github.com/GeFy9999/Gestion-de-banque",
    tech: ["Next.js 16", "React 19", "Express", "SQLite (sql.js)", "Tailwind"],
    images: [
      "/images/libeo/1.jpg",
      "/images/libeo/2.jpg",
      "/images/libeo/3.jpg",
      "/images/libeo/4.jpg",
      "/images/libeo/5.jpg",
      "/images/libeo/6.jpg",
      "/images/libeo/7.jpg",
      "/images/libeo/8.jpg",
      "/images/libeo/9.jpg",
      "/images/libeo/10.jpg",
      "/images/libeo/11.jpg",
      "/images/libeo/12.jpg",
      "/images/libeo/13.jpg",
      "/images/libeo/14.jpg",
    ],
  },
];
