"use client";
import { useState } from "react";

const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const rubrosIniciales = ["Gastos", "Ahorros", "Flujo restante", "Reservas"];

export default function Finanzas() {
  const [rubros, setRubros] = useState(rubrosIniciales);
  const [datos, setDatos] = useState(
    rubrosIniciales.map(() => meses.map(() => ""))
  );

  function actualizarCelda(rubroIndex, mesIndex, valor) {
    const nuevosDatos = [...datos];
    nuevosDatos[rubroIndex][mesIndex] = valor;
    setDatos(nuevosDatos);
  }

  function agregarRubro() {
    const nombre = prompt("Nombre del nuevo rubro:");
    if (nombre) {
      setRubros([...rubros, nombre]);
      setDatos([...datos, meses.map(() => "")]);
    }
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Finanzas
      </h1>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={celdaEncabezado}>Rubro</th>
              {meses.map((mes) => (
                <th key={mes} style={celdaEncabezado}>{mes}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rubros.map((rubro, rubroIndex) => (
              <tr key={rubro}>
                <td style={celdaRubro}>{rubro}</td>
                {meses.map((_, mesIndex) => (
                  <td key={mesIndex} style={celda}>
                    <input
                      type="text"
                      value={datos[rubroIndex][mesIndex]}
                      onChange={(e) => actualizarCelda(rubroIndex, mesIndex, e.target.value)}
                      style={{ width: "70px", border: "none", textAlign: "center" }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={agregarRubro} style={{
        marginTop: "20px",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#000",
        color: "#fff",
        cursor: "pointer"
      }}>
        + Agregar rubro
      </button>
    </div>
  );
}

const celdaEncabezado = {
  border: "1px solid #ddd",
  padding: "10px",
  backgroundColor: "#f4f4f5",
  fontWeight: "bold"
};

const celdaRubro = {
  border: "1px solid #ddd",
  padding: "10px",
  fontWeight: "bold",
  backgroundColor: "#fafafa"
};

const celda = {
  border: "1px solid #ddd",
  padding: "4px"
};


