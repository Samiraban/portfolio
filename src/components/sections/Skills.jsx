import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiJavascript />, name: "JavaScript (ES6+)" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiFigma />, name: "Figma" },
  ];

  return (
    <section id="skills">
      <div className="container">

        <motion.h2
          className="title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical <span className="subtitle">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "700px",
            color: "#666",
            fontSize: "18px",
            lineHeight: "30px",
            marginBottom: "50px",
          }}
        >
          These are the technologies and tools I use to design, develop,
          deploy, and maintain modern full-stack web applications.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "25px",
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                padding: "35px 20px",
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  color: "#8B5E3C",
                  marginBottom: "20px",
                }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}