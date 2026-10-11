import { FiFolder, FiCode, FiHexagon, FiGitMerge } from "react-icons/fi";
import { projects, skills, services } from "../data/portfolio";

export default function Stats() {
  const items = [
    { icon: <FiFolder />, value: `${projects.length}+`, label: "PROJECTS BUILT" },
    { icon: <FiCode />, value: `${skills.length}+`, label: "TECHNOLOGIES" },
    { icon: <FiHexagon />, value: services.length, label: "TECHNICAL AREAS" },
    { icon: <FiGitMerge />, value: projects.filter((p) => p.status === "Shipped").length, label: "SHIPPED PROJECTS" },
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {items.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat-icon">{s.icon}</span>
            <strong>{s.value}</strong>
            <span className="mono-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}