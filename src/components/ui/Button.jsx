export default function Button({
  children,
  href,
  onClick,
  type = "primary",
}) {
  const className =
    type === "primary"
      ? "primary-btn"
      : "secondary-btn";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}