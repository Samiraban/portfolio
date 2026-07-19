import { FaGraduationCap, FaLaptopCode, FaCode, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend",
      text: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      text: "Node.js, Express.js, REST APIs, Authentication",
    },
    {
      icon: <FaCode />,
      title: "Database",
      text: "MongoDB, Mongoose, MySQL",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      text: "Bachelor of Science in Information Technology",
    },
  ];

  return (
    <section id="about">
      <div className="container">

        <motion.h2
          className="title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          About <span className="subtitle">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          style={{
            fontSize: "18px",
            lineHeight: "34px",
            color: "#555",
            maxWidth: "900px",
            marginBottom: "60px",
          }}
        >
          I am a Full Stack Developer with a Bachelor’s degree in Information
          Technology from ISMT College. I enjoy building secure, scalable,
          and user-friendly web applications using modern technologies such as
          React, Node.js, Express.js, and MongoDB.

          <br /><br />

          I continuously improve my skills by developing real-world projects
          that focus on performance, clean architecture, responsive design,
          and excellent user experience.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  fontSize: "40px",
                  color: "#8B5E3C",
                  marginBottom: "20px",
                }}
              >
                {card.icon}
              </div>

              <h3
                style={{
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}