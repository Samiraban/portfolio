
import {
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        {/* LEFT SIDE — KEEP EXISTING CONTENT */}
        <Reveal>
          <span className="badge">
            <i className="pulse" />
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <h1 className="hero-title">
            Hi, I'm Samira Ban
            <span className="hero-role grad">
              Junior Full-Stack Developer.
            </span>
          </h1>

          <p className="mono-label">
            {profile.subRole.toUpperCase()}
          </p>

          <p className="lead">{profile.intro}</p>

          <div className="tags">
            {profile.heroTags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me <FiArrowUpRight />
            </a>
          </div>

          <div className="socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            )}

            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>

            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                aria-label="Phone"
              >
                <FiPhone />
              </a>
            )}
          </div>
        </Reveal>

        {/* RIGHT SIDE — ANIMATED PROFILE PHOTO */}
        <Reveal delay={0.15}>
          <div className="orbit-profile">
            <div className="orbit-status">
              <span className="orbit-status-dot" />
              AVAILABLE FOR WORK
            </div>

            {/* Decorative orbit rings */}
            <div className="orbit-ring orbit-ring-outer" />
            <div className="orbit-ring orbit-ring-middle" />
            <div className="orbit-ring orbit-ring-inner" />

            {/* Rotating technology labels */}
            <div className="orbit-track orbit-track-outer">
              <span className="orbit-node node-react">React</span>
              <span className="orbit-node node-js">JS</span>
              <span className="orbit-node node-api">API</span>
            </div>

            <div className="orbit-track orbit-track-inner">
              <span className="orbit-node node-node">Node</span>
              <span className="orbit-node node-db">DB</span>
            </div>

            {/* Your original profile photo */}
            <div className="orbit-avatar">
              <div className="orbit-avatar-glow" />

              <img
                src={profile.photo}
                alt={profile.name}
                className="orbit-photo"
              />

              <div className="orbit-avatar-caption">
                <span className="caption-dot" />
                <span>{profile.role}</span>
              </div>
            </div>

            {/* Floating decorative accents */}
            <span className="orbit-spark spark-one">✦</span>
            <span className="orbit-spark spark-two">+</span>
            <span className="orbit-spark spark-three">✧</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
