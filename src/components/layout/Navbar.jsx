import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scroll ? "navbar navbar-scroll" : "navbar"}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          Samira<span>Ban</span>
        </a>

        <nav className={open ? "nav active" : "nav"}>
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <button
            className="theme-button"
            onClick={toggleTheme}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}