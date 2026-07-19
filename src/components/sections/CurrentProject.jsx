import { FaCodeBranch, FaLaptopCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CurrentProject() {
  return (
    <section id="current-project">
      <div className="container">

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Currently Working On
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SkillBridge
        </motion.h2>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            style={{
              fontSize: "30px",
              marginBottom: "20px",
              color: "#2B2B2B",
            }}
          >
            MERN Stack Career Platform
          </h3>

          <p
            style={{
              fontSize: "17px",
              color: "#666",
              lineHeight: "30px",
            }}
          >
            SkillBridge is a full-stack web application currently under
            development. The platform is designed to connect students,
            graduates, and employers through internships, job opportunities,
            and skill development resources.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <span className="skill-badge">React</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Express.js</span>
            <span className="skill-badge">MongoDB</span>
            <span className="skill-badge">JWT Authentication</span>
            <span className="skill-badge">REST API</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "35px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <FaLaptopCode color="#8B5E3C" />
              <span>Modern MERN Architecture</span>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <FaCodeBranch color="#8B5E3C" />
              <span>Active Development</span>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <FaRocket color="#8B5E3C" />
              <span>Coming Soon</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}