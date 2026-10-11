import Reveal from "./Reveal";

export default function SectionHeading({ label, title, subtitle, center = false }) {
  return (
    <Reveal className={`heading ${center ? "center" : ""}`}>
      <span className="eyebrow">
        {!center && <i className="eyebrow-line" />}
        {label}
      </span>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </Reveal>
  );
}