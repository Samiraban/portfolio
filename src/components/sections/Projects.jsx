import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import securevault from "../../assets/images/securevault.png";
import aisolutions from "../../assets/images/aisolutions.png";
import fitnessapp from "../../assets/images/fitnessapp.png";

const projects = [
  {
    title: "SecureVault",
    description:
      "A secure authentication platform featuring user registration, login, password hashing, JWT authentication, protected routes, and enterprise-level security. Built with a modern full-stack architecture.",

    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],

    image: securevault,

    github: "#",

    demo: "#",
  },

  {
    title: "AI Solutions",

    description:
      "A professional AI business website featuring modern UI, responsive layouts, service management, gallery, articles, feedback system, contact forms, and an administrator dashboard.",

    tech: ["PHP", "JavaScript", "MySQL", "CSS"],

    image: aisolutions,

    github: "#",

    demo: "#",
  },

  {
    title: "Fitness Mobile App",

    description:
      "A native Android fitness application developed in Android Studio using Kotlin. It includes authentication, workout routine management, exercise tracking, checklist generation, SMS sharing, and an intuitive mobile-first interface.",

    tech: [
      "Kotlin",
      "Android Studio",
      "SQLite",
      "Material Design",
    ],

    image: fitnessapp,

    github: "#",

    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">
          Featured <span className="subtitle">Projects</span>
        </h2>

        <p
          style={{
            maxWidth: "700px",
            color: "#666",
            marginBottom: "60px",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          These projects showcase my experience in full-stack web
          development, Android application development, secure
          authentication systems, database design, and responsive user
          interface development.
        </p>

        <div
          style={{
            display: "grid",
            gap: "50px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                alignItems: "center",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  objectFit: "cover",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              />

              <div>
                <h3
                  style={{
                    fontSize: "32px",
                    marginBottom: "20px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "30px",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "25px",
                    marginBottom: "30px",
                  }}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "#f3e7da",
                        color: "#8B5E3C",
                        padding: "10px 18px",
                        borderRadius: "40px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "18px",
                  }}
                >
                  <a href={project.github} className="primary-btn">
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="primary-btn"
                    style={{
                      background: "#fff",
                      color: "#8B5E3C",
                      border: "2px solid #8B5E3C",
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}