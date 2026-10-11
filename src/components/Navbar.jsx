import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/portfolio";

const links = ["home", "about", "experience", "skills", "projects", "contact"];
const sectionIds = ["home", "about", "experience", "skills", "projects", "services", "github", "contact"];
const alias = { services: "projects", github: "projects" };

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(alias[current] || current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <header className="nav-wrap">
        <nav className="nav">
          <a href="#home" className="logo">
            {profile.initials}<span>.</span>
          </a>

          <ul className={`nav-links ${open ? "open" : ""}`}>
            {links.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {id[0].toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle dark / light mode"
              title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>

            {/* Download Resume: file lives in public/resume.pdf */}
            <a className="btn btn-outline nav-resume" href={profile.resume} download="Samira_Ban_Resume.pdf">
              Download Resume
            </a>

            <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Menu">
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}