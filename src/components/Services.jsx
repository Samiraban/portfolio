import { FiLayers, FiGlobe, FiBriefcase, FiServer, FiSend } from "react-icons/fi";
import { services } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = { layers: FiLayers, globe: FiGlobe, building: FiBriefcase, server: FiServer, rocket: FiSend };

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading label="SERVICES" title="What I build." />
        <Reveal>
          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = icons[s.icon];
              const n = String(i + 1).padStart(2, "0");
              return (
                <div key={s.title} className="service">
                  <span className="big-num">{n}</span>
                  <span className="skill-icon"><Icon /></span>
                  <p className="mono-small">{n}</p>
                  <h4>{s.title}</h4>
                  <p className="muted">{s.text}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}