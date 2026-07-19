import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
};

const linkStyle = {
  color: "#8B5E3C",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s",
};

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginTop: "50px",
          }}
        >
          {/* LEFT CARD */}

          <motion.div
            className="card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginBottom: "30px",
              }}
            >
              Contact Information
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                fontSize: "18px",
              }}
            >
              {/* EMAIL */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <FaEnvelope color="#8B5E3C" size={20} />

                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=samiraban38@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  samiraban38@gmail.com
</a>
              </div>

              {/* PHONE */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <FaPhone color="#8B5E3C" size={20} />

                <a
                  href="tel:+9779714473363"
                  style={linkStyle}
                >
                  +977 9714473363
                </a>
              </div>

              {/* LOCATION */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <FaMapMarkerAlt color="#8B5E3C" size={20} />

                <span>Biratnagar, Nepal</span>
              </div>

              {/* GITHUB */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <FaGithub color="#8B5E3C" size={20} />

                <a
                  href="https://github.com/Samiraban"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  github.com/Samiraban
                </a>
              </div>

              {/* LINKEDIN */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <FaLinkedin color="#8B5E3C" size={20} />

                <a
                  href="https://www.linkedin.com/in/samira-ban-335/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  linkedin.com/in/samira-ban-335
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}

          <motion.div
            className="card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginBottom: "30px",
              }}
            >
              Send a Message
            </h3>

            <form>
              <input
                type="text"
                placeholder="Full Name"
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Email Address"
                style={inputStyle}
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                style={inputStyle}
              />

              <button
                type="submit"
                className="primary-btn"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}