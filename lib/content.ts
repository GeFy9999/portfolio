export type Lang = "fr" | "en";

interface Fact {
  num: string;
  label: string;
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface ProjectText {
  linkLabel: string;
  alt: string;
  points: string[];
}

interface TimelineItem {
  date: string;
  title: string;
  sub: string;
  desc?: string;
}

interface LangBadge {
  name: string;
  level: string;
}

export interface Content {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    lead: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    text: string;
    facts: Fact[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  projectsTitle: string;
  projects: Record<string, ProjectText>;
  experience: {
    title: string;
    eduHeading: string;
    edu: TimelineItem[];
    workHeading: string;
    work: TimelineItem[];
    languages: LangBadge[];
  };
  contact: {
    title: string;
    lead: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
}

export const content: Record<Lang, Content> = {
  fr: {
    nav: {
      about: "Profil",
      skills: "Compétences",
      projects: "Projets",
      experience: "Parcours",
      contact: "Contact",
    },
    hero: {
      eyebrow: "// disponible pour un premier emploi en développement",
      role: "Développeur Full-Stack Junior",
      lead: "Diplômé en Programmation informatique de La Cité collégiale, spécialisé en React, TypeScript, Node.js et Next.js. J'aime construire des applications complètes, du frontend jusqu'à la base de données, et les déployer en production.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Me contacter",
    },
    about: {
      title: "Profil",
      text: "Développeur full-stack junior basé à Gatineau, passionné par la construction d'applications web complètes — de l'interface jusqu'à la base de données. Expérience pratique avec des projets réels déployés en production, incluant authentification, PWA, et intégration d'API. Français langue maternelle, anglais intermédiaire.",
      facts: [
        { num: "3", label: "projets déployés" },
        { num: "107+", label: "commits sur Libéo" },
        { num: "2026", label: "diplômé, La Cité collégiale" },
      ],
    },
    skills: {
      title: "Compétences techniques",
      groups: [
        { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
        { title: "Backend", items: ["Node.js", "Express.js", "REST API", "Prisma ORM"] },
        { title: "Bases de données", items: ["SQLite", "MongoDB", "Microsoft SQL Server"] },
        { title: "Outils", items: ["Git", "GitHub", "Jira", "VS Code", "Vite", "PWA"] },
        { title: "Autres", items: ["Python", "C#", "T-SQL", "Agile/Scrum"] },
      ],
    },
    projectsTitle: "Projets",
    projects: {
      gymtrack: {
        linkLabel: "gymstrack.com",
        alt: "Aperçu de l'écran de connexion de GymTrack",
        points: [
          "Application full-stack de suivi fitness (PWA) hébergée en production sur serveur dédié",
          "Authentification complète (email/mot de passe + Google OAuth), dashboard, recherche parmi 873 exercices, suivi de records personnels",
          "Page statistiques avec graphique de poids corporel et volume par muscle, workflow Git feat/ → dev → main",
        ],
      },
      gymfox: {
        linkLabel: "gym-fox-app.vercel.app",
        alt: "Aperçu de la page d'accueil de GymFox",
        points: [
          "Site e-commerce frontend pour accessoires de gym, déployé sur Vercel",
          "Support PWA avec bannière d'installation, internationalisation partielle (navbar et hero)",
        ],
      },
      libeo: {
        linkLabel: "GitHub",
        alt: "Libéo",
        points: [
          "Application bancaire simulée développée en partenariat avec un collègue (107 commits)",
          "Gestion de profils clients, comptes multiples, virements, paiements, dépôts, assistant IA",
          "Responsable du frontend : stylisation, système de design, backlog Jira (8 épiques, 118 sous-tâches)",
        ],
      },
    },
    experience: {
      title: "Parcours",
      eduHeading: "Formation",
      edu: [
        {
          date: "2026",
          title: "Diplôme en Programmation informatique",
          sub: "La Cité collégiale, Ottawa",
          desc: "Applications web, mobiles et autonomes · Bases de données · IA · Tests logiciels · Agile",
        },
        {
          date: "2023",
          title: "Diplôme d'études secondaires",
          sub: "École secondaire Hormisdas-Gamelin",
        },
      ],
      workHeading: "Expérience professionnelle",
      work: [
        {
          date: "2025 – présent",
          title: "Service à la clientèle & Approvisionnement",
          sub: "IGA",
          desc: "Service à la clientèle, livraison et approvisionnement du magasin",
        },
        {
          date: "2021 – 2025",
          title: "Service à la clientèle & Cuisinier",
          sub: "Tim Hortons",
          desc: "4 ans d'expérience en service à la clientèle et cuisine, ouvertures/fermetures, livraisons",
        },
      ],
      languages: [
        { name: "Français", level: "langue maternelle" },
        { name: "Anglais", level: "intermédiaire" },
      ],
    },
    contact: {
      title: "Contact",
      lead: "Ouvert aux opportunités de premier emploi en développement web. N'hésite pas à me contacter.",
      form: {
        name: "Nom",
        email: "Courriel",
        message: "Message",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoyé ! Je te réponds dès que possible.",
        error: "Une erreur est survenue. Écris-moi directement à zachary.belley@outlook.com.",
      },
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Background",
      contact: "Contact",
    },
    hero: {
      eyebrow: "// available for a first developer role",
      role: "Junior Full-Stack Developer",
      lead: "Graduate in Computer Programming from La Cité collégiale, specialized in React, TypeScript, Node.js and Next.js. I like building complete applications, from the frontend down to the database, and shipping them to production.",
      ctaProjects: "See my projects",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About",
      text: "Junior full-stack developer based in Gatineau, passionate about building complete web applications — from the interface down to the database. Hands-on experience with real projects deployed to production, including authentication, PWAs, and API integration. Native French speaker, intermediate English.",
      facts: [
        { num: "3", label: "deployed projects" },
        { num: "107+", label: "commits on Libéo" },
        { num: "2026", label: "graduate, La Cité collégiale" },
      ],
    },
    skills: {
      title: "Technical Skills",
      groups: [
        { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
        { title: "Backend", items: ["Node.js", "Express.js", "REST API", "Prisma ORM"] },
        { title: "Databases", items: ["SQLite", "MongoDB", "Microsoft SQL Server"] },
        { title: "Tools", items: ["Git", "GitHub", "Jira", "VS Code", "Vite", "PWA"] },
        { title: "Other", items: ["Python", "C#", "T-SQL", "Agile/Scrum"] },
      ],
    },
    projectsTitle: "Projects",
    projects: {
      gymtrack: {
        linkLabel: "gymstrack.com",
        alt: "Screenshot of GymTrack's sign-in screen",
        points: [
          "Full-stack fitness tracking application (PWA) hosted in production on a dedicated server",
          "Full authentication (email/password + Google OAuth), dashboard, search across 873 exercises, personal record tracking",
          "Stats page with body weight chart and volume-per-muscle breakdown, Git workflow feat/ → dev → main",
        ],
      },
      gymfox: {
        linkLabel: "gym-fox-app.vercel.app",
        alt: "Screenshot of GymFox's homepage",
        points: [
          "E-commerce frontend for gym accessories, deployed on Vercel",
          "PWA support with install banner, partial internationalization (navbar and hero)",
        ],
      },
      libeo: {
        linkLabel: "GitHub",
        alt: "Libéo",
        points: [
          "Simulated banking application built in partnership with a colleague (107 commits)",
          "Client profile management, multiple accounts, transfers, payments, deposits, AI assistant",
          "Frontend lead: styling, design system, Jira backlog (8 epics, 118 sub-tasks)",
        ],
      },
    },
    experience: {
      title: "Background",
      eduHeading: "Education",
      edu: [
        {
          date: "2026",
          title: "Diploma in Computer Programming",
          sub: "La Cité collégiale, Ottawa",
          desc: "Web, mobile and standalone applications · Databases · AI · Software testing · Agile",
        },
        {
          date: "2023",
          title: "High School Diploma",
          sub: "École secondaire Hormisdas-Gamelin",
        },
      ],
      workHeading: "Work Experience",
      work: [
        {
          date: "2025 – present",
          title: "Customer Service & Supply",
          sub: "IGA",
          desc: "Customer service, delivery and store supply management",
        },
        {
          date: "2021 – 2025",
          title: "Customer Service & Cook",
          sub: "Tim Hortons",
          desc: "4 years of experience in customer service and kitchen work, opening/closing shifts, deliveries",
        },
      ],
      languages: [
        { name: "French", level: "native speaker" },
        { name: "English", level: "intermediate" },
      ],
    },
    contact: {
      title: "Contact",
      lead: "Open to first developer job opportunities. Feel free to reach out.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you as soon as possible.",
        error: "Something went wrong. Email me directly at zachary.belley@outlook.com.",
      },
    },
  },
};
