import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const tabs = [
  { id: "all", label: "ALL" },
  { id: "enterprise", label: "ENTERPRISE" },
  { id: "fullstack", label: "FULL STACK" },
];

function Preview({ slug }) {
  return (
    <div className="preview">
      <span className="path">/ {slug}</span>
      <div className="skeleton"><i /><i /><i /><i /></div>
    </div>
  );
}

function Status({ p }) {
  return (
    <div className="chips-row">
      {p.featured && <span className="chip-green strong">Featured</span>}
      <span className="chip-green">{p.type === "enterprise" ? "Enterprise" : "Full Stack"}</span>
      <span className={p.status === "Shipped" ? "chip-green" : "chip-outline small"}>{p.status}</span>
    </div>
  );
}

function Block({ label, children }) {
  return (
    <div className="cs-block">
      <p className="mono-label">{label}</p>
      {children}
    </div>
  );
}

function CaseStudy({ p, onClose }) {
  const c = p.caseStudy;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close icon-btn" onClick={onClose} aria-label="Close"><FiX /></button>
        <Status p={p} />
        <h2>{p.title}</h2>

        <Block label="OVERVIEW"><p>{c.overview}</p></Block>
        <Block label="PROBLEM"><p>{c.problem}</p></Block>
        <Block label="SOLUTION"><p>{c.solution}</p></Block>
        <Block label="ARCHITECTURE">
          <ol className="steps">
            {c.architecture.map((a, i) => (
              <li key={a}><span>{i + 1}</span>{a}</li>
            ))}
          </ol>
        </Block>
        <Block label="TECHNOLOGIES">
          <div className="chips-row">{p.tech.map((t) => <span key={t} className="chip-green mono">{t}</span>)}</div>
        </Block>
        <Block label="KEY FEATURES">
          <ul className="bullets">{c.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </Block>
        <Block label="CHALLENGES & ENGINEERING DECISIONS"><p>{c.challenges}</p></Block>
        <Block label="RESULTS"><p>{c.results}</p></Block>
        <Block label="LESSONS LEARNED"><p>{c.lessons}</p></Block>
      </div>
    </div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(null);

  const list = projects.filter((p) => tab === "all" || p.type === tab);
  const featured = list.find((p) => p.featured);
  const rest = list.filter((p) => p !== featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          label="PROJECTS"
          title="Selected engineering work."
          subtitle="Each project below is a real, ongoing platform — shown with the actual problem it solves, not just a screenshot."
        />

        <div className="tabs">
          {tabs.map((t) => (
            <button key={t.id} className={`tab ${tab === t.id ? "on" : ""}`} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        {featured && (
          <Reveal>
            <article className="card featured">
              <div className="featured-media"><Preview slug={featured.slug} /></div>
              <div className="featured-body">
                <Status p={featured} />
                <h3>{featured.title}</h3>
                <p className="muted">{featured.short}</p>
                <ul className="bullets">{featured.bullets?.map((b) => <li key={b}>{b}</li>)}</ul>
                <div className="chips-row">{featured.tech.map((t) => <span key={t} className="chip-outline small mono">{t}</span>)}</div>
                <div className="btn-row" style={{ marginTop: 8 }}>
                  <button className="btn btn-primary" onClick={() => setOpen(featured)}>Case Study</button>
                  {featured.url && (
                    <a className="btn btn-outline" href={featured.url} target="_blank" rel="noreferrer">Visit site ↗</a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="project-grid">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="card project">
                <div className="project-media"><Preview slug={p.slug} /></div>
                <div className="project-body">
                  <Status p={p} />
                  <h3>{p.title}</h3>
                  <p className="muted">{p.short}</p>
                  <div className="chips-row">{p.tech.map((t) => <span key={t} className="chip-outline small mono">{t}</span>)}</div>
                  <div style={{ display: "flex", gap: 18 }}>
                    <button className="link-btn" onClick={() => setOpen(p)}>Case Study</button>
                    {p.url && (
                      <a className="link-btn" href={p.url} target="_blank" rel="noreferrer">Visit site ↗</a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <CaseStudy p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}