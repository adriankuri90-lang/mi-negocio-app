export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f5",
      fontFamily: "sans-serif",
      gap: "24px"
    }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Mi Negocio App
      </h1>
      <p style={{ color: "#555" }}>
        Todo lo de tu negocio, en un solo lugar.
      </p>
      <div style={{ display: "flex", gap: "16px" }}>
        <button style={{
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Finanzas
        </button>
        <button style={{
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          background: "linear-gradient(90deg, #6366f1, #ec4899)",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Inteligencia Artificial
        </button>
      </div>
    </div>
  );
}

