import { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaDocker, FaNpm } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql, SiMongodb, SiPostman, SiSpringboot, SiExpress, SiVercel } from "react-icons/si";
import { skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = {
  react: FaReact, js: SiJavascript, html: FaHtml5, css: FaCss3Alt, tailwind: SiTailwindcss,
  node: FaNodeJs, spring: SiSpringboot, mysql: SiMysql, mongo: SiMongodb, java: FaJava,
  python: FaPython, git: FaGitAlt, github: FaGithub, postman: SiPostman, docker: FaDocker,
  express: SiExpress, vercel: SiVercel, npm: FaNpm,
};
const tabs = ["all", "frontend", "backend", "database", "tools"];

export default function Skills() {
  const [tab, setTab] = useState("all");
  const list = tab === "all" ? skills : skills.filter((s) => s.cat === tab);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          label="TECH STACK"
          title="A toolkit built for shipping, not showing off."
          subtitle="Technologies I reach for daily, organized by where they sit in the stack."
        />

        <div className="tabs">
          {tabs.map((t) => (
            <button key={t} className={`tab ${tab === t ? "on" : ""}`} onClick={() => setTab(t)}>
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        <Reveal>
          <div className="skill-grid">
            {list.map((s) => {
              const Icon = icons[s.icon];
              return (
                <div key={s.name} className="card skill">
                  <span className="skill-icon">{Icon ? <Icon /> : <small>{s.icon}</small>}</span>
                  <h4>{s.name}</h4>
                  <p className="mono-small">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}