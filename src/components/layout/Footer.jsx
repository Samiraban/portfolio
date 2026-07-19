export default function Footer() {
  return (
    <footer
      style={{
        padding: "35px 0",
        textAlign: "center",
        background: "#2B2B2B",
        color: "#fff",
        marginTop: "80px",
      }}
    >
      <div className="container">
        <p>
          © {new Date().getFullYear()} Samira Ban. All rights reserved.
        </p>
      </div>
    </footer>
  );
}