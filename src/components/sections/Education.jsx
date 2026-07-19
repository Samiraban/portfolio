import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education">
      <div className="container">

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Academic Background
        </motion.h2>

        <div className="card">

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "25px",
            }}
          >
            <FaGraduationCap
              style={{
                fontSize: "42px",
                color: "#8B5E3C",
              }}
            />

            <div>
              <h3 style={{ fontSize: "26px" }}>
                Bachelor of Science in Information Technology
              </h3>

              <p
                style={{
                  color: "#666",
                  marginTop: "6px",
                }}
              >
                ISMT College, Biratnagar
              </p>
            </div>
          </div>

          <p
            style={{
              color: "#555",
              lineHeight: "32px",
              fontSize: "17px",
            }}
          >
            Graduated with a strong foundation in software development,
            database systems, networking, web technologies, and object-oriented
            programming. Completed multiple practical projects focused on
            full-stack web development and modern application design.
          </p>

        </div>

      </div>
    </section>
  );
}