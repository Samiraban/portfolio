import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import hero from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
            Full Stack Developer
          </span>

          <h1>
            Hi, I'm <span>Samira Ban</span>
          </h1>

          <h2>MERN Stack Developer</h2>

          <p>
            Passionate Full Stack Developer specializing in React,
            Node.js, Express, MongoDB and modern web technologies.
            I build responsive, secure and scalable applications
            with clean UI/UX.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-social">

            <a
              href="https://github.com/Samiraban"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/samira-ban-335/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=samiraban38@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  title="Email"
>
  <FaEnvelope />
</a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image">
            <img
              src={hero}
              alt="Samira Ban"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}