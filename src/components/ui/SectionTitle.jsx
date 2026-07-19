export default function SectionTitle({
  subtitle,
  title,
  description,
}) {
  return (
    <>
      <p className="section-subtitle">
        {subtitle}
      </p>

      <h2 className="section-title">
        {title}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </>
  );
}