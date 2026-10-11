import { about } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading label="ABOUT" title={about.title} />
        <div className="about-grid">
          <Reveal>
            <p className="about-text">{about.text}</p>
            <div className="chips">
              {about.chips.map((c) => (
                <span key={c} className="chip-outline">{c}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card dev-card">
              <div className="dev-head mono-label">DEVELOPER PROFILE</div>
              {about.profile.map(([k, v]) => (
                <div key={k} className="dev-row">
                  <span className="mono-label">{k.toUpperCase()}</span>
                  <strong>{v}</strong>
                </div>
              ))}
              <div className="dev-tags">
                {about.tags.map((t) => (
                  <span key={t} className="chip-green">● {t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}