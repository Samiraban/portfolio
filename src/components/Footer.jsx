import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <span className="logo">{profile.initials}<span>.</span></span>
        <p className="muted">Thoughtfully built, continuously improved.</p>
        <span className="mono-small">© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  );
}