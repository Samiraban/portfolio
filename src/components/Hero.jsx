import { FiArrowRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <Reveal>
          <span className="badge">
            <i className="pulse" /> AVAILABLE FOR OPPORTUNITIES
          </span>

       <h1 className="hero-title">
  Hi, I'm Samira Ban
  <span className="hero-role grad">
    Junior Full-Stack Developer.
  </span>
</h1>

          <p className="mono-label">{profile.subRole.toUpperCase()}</p>
          <p className="lead">{profile.intro}</p>

          <div className="tags">
            {profile.heroTags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">View Projects <FiArrowRight /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            <a href="#contact" className="btn btn-outline">Contact Me <FiArrowUpRight /></a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
            {profile.phone && (
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} aria-label="Phone"><FiPhone /></a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="window">
            <div className="window-bar">
              <span className="dots"><i /><i /><i /></span>
              <span className="file">profile.jpg</span>
              <span className="avail"><i className="mini-dot" /> available</span>
            </div>
            <div className="window-body">
              <div className="avatar-ring">
                <img src={profile.photo} alt={profile.name} />
              </div>
            </div>
            <div className="window-foot">
              <span>role: <b>{profile.role}</b></span>
              <span className="pill">● open to work</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}