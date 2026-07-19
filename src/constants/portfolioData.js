import hero from "../assets/images/hero.png";
import secureVault from "../assets/images/securevault.png";
import aiSolutions from "../assets/images/aisolutions.png";
import fitnessApp from "../assets/images/fitnessapp.png";

export const projects = [
  {
    id: 1,
    title: "SecureVault",
    description:
      "A secure authentication system featuring user registration, login, password hashing, session management, protected routes, and role-based authentication. Built with modern backend technologies and responsive frontend design.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],
    image: secureVault,
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 2,
    title: "AI Solutions",
    description:
      "A responsive AI-powered business website featuring modern UI, AI services, articles, gallery, admin dashboard, contact management, and interactive user experience.",
    tech: [
      "PHP",
      "JavaScript",
      "MySQL",
      "CSS",
    ],
    image: aiSolutions,
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Free Style Fitness",
    description:
      "A complete Android fitness application developed using Kotlin and Android Studio. Users can manage exercises, create workout routines, generate equipment checklists, and share workout plans via SMS using an intuitive Material Design interface.",
    tech: [
      "Kotlin",
      "Android Studio",
      "SQLite",
      "Material Design",
    ],
    image: fitnessApp,
    github: "#",
    demo: "#",
    featured: true,
  },
];