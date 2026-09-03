"use client";
import { useState } from "react";

export default function InteligenciaArtificial() {
  const [mensajes, setMensajes] = useState([
    { autor: "ia", texto: "Hola, soy tu asistente. Sube un archivo o escríbeme qué necesitas organizar." }
  ]);
  const [texto, setTexto] = useState("");

  function enviarMensaje() {
    if (texto.trim() === "") return;
    setMensajes([...mensajes, { autor: "usuario", texto: texto }]);
    setTexto("");
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      backgroundColor: "#fff",
      color: "#000",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        padding: "20px",
        borderBottom: "1px solid #eee",
        fontWeight: "bold",
        fontSize: "22px"
      }}>
        Inteligencia Artificial
      </div>

      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {mensajes.map((m, i) => (
          <div key={i} style={{
            marginBottom: "12px",
            textAlign: m.autor === "usuario" ? "right" : "left"
          }}>
            <span style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: "16px",
              background: m.autor === "usuario"
                ? "#000"
                : "linear-gradient(90deg, #6366f1, #ec4899)",
              color: "#fff",
              maxWidth: "70%"
            }}>
              {m.texto}
            </span>
          </div>
        ))}
      </div>

      <div style={{
        display: "flex",
        padding: "16px",
        borderTop: "1px solid #eee",
        gap: "10px"
      }}>
        <button style={{
          padding: "10px 14px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          cursor: "pointer"
        }}>
          📎
        </button>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe tu mensaje..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
        <button onClick={enviarMensaje} style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "linear-gradient(90deg, #6366f1, #ec4899)",
          color: "#fff",
          cursor: "pointer"
        }}>
          Enviar
        </button>
      </div>
    </div>
  );
}

