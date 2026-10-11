import { FaGraduationCap, FaTrophy } from "react-icons/fa";
import { experience, education, achievements } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading label="EXPERIENCE" title="Where the work has happened." />

        <div className="timeline">
          {experience.map((e) => (
            <Reveal key={e.title} className="t-item">
              <span className="t-dot" />
              <p className="mono-small">{e.date}</p>
              <h3>{e.title}</h3>
              <p className="company">{e.company} — {e.mode}</p>
              <p className="muted">{e.summary}</p>
              <ul className="bullets">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <hr className="divider" />

        <Reveal>
          <p className="mono-label sub-label">EDUCATION</p>
          <div className="row-item">
            <span className="row-icon"><FaGraduationCap /></span>
            <div>
              <h4>{education.school}</h4>
              <p className="muted">{education.degree}</p>
              <p className="mono-small">{education.meta}</p>
            </div>
          </div>
        </Reveal>

        {achievements.length > 0 && (
          <>
            <hr className="divider" />
            <Reveal>
              <p className="mono-label sub-label">ACHIEVEMENTS &amp; LEADERSHIP</p>
              {achievements.map((a) => (
                <div key={a.title} className="row-item">
                  <span className="row-icon"><FaTrophy /></span>
                  <div>
                    <h4>{a.title}</h4>
                    <p className="muted">{a.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}