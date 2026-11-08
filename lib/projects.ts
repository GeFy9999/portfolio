export const GYMSTRACK_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.gymstrack.app";
export const GYMSTRACK_VIDEO = "/images/GymsTrack V3/gymstrack-ad-en.mp4";

export interface ProjectMeta {
  id: "gymstrack" | "gymfox" | "libeo" | "fornello";
  name: string;
  url: string;
  tech: string[];
  images: string[];
  video?: string;
  github?: string;
  featured?: boolean;
}

export const projects: ProjectMeta[] = [
  {
    id: "gymstrack",
    name: "GymsTrack",
    url: GYMSTRACK_PLAY_STORE_URL,
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Android",
    ],
    github: "https://github.com/GeFy9999/gym-track-v1",
    featured: true,
    video: GYMSTRACK_VIDEO,
    images: [
      "/images/GymsTrack V3/gymstrack-banner-en-1024x500.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 001838.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 001905.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 001931.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 001948.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 002004.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 002035.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 002051.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 002106.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 002119.png",
      "/images/GymsTrack V3/Screenshot 2026-10-06 002131.png",
    ],
  },
  {
    id: "fornello",
    name: "Fornello",
    url: "https://demo-vitrine-six.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    images: [
      "/images/fornello/Screenshot 2026-09-04 211705.png",
      "/images/fornello/Screenshot 2026-09-04 211746.png",
      "/images/fornello/Screenshot 2026-09-04 211757.png",
      "/images/fornello/Screenshot 2026-09-04 211806.png",
      "/images/fornello/Screenshot 2026-09-04 211814.png",
      "/images/fornello/Screenshot 2026-09-04 211826.png",
      "/images/fornello/Screenshot 2026-09-04 211838.png",
      "/images/fornello/Screenshot 2026-09-04 211848.png",
      "/images/fornello/Screenshot 2026-09-04 211857.png",
      "/images/fornello/Screenshot 2026-09-04 211909.png",
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
