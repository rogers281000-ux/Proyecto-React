// App.js
import React from "react";
import "./App.css";

function App() {
  const carreras = [
    {
      nombre: "Ingeniería en Software",
      descripcion:
        "Forma parte del futuro digital creando aplicaciones, sistemas inteligentes y soluciones tecnológicas innovadoras.",
    },
    {
      nombre: "Marketing Digital",
      descripcion:
        "Desarrolla estrategias de comunicación y publicidad online para conectar marcas con personas en todo el mundo.",
    },
    {
      nombre: "Diseño Gráfico y Multimedia",
      descripcion:
        "Expresa tu creatividad con herramientas digitales, animaciones y diseño visual profesional.",
    },
    {
      nombre: "Administración de Empresas",
      descripcion:
        "Aprende liderazgo, finanzas y gestión moderna para dirigir empresas exitosas.",
    },
  ];

  return (
    <div>
      <header className="header">
        <h1>Tecnológico Espíritu Santo</h1>
        <p className="subtitulo">Universidad Virtual de Excelencia</p>
      </header>

      <section className="carrera-list">
        {carreras.map((carrera, index) => (
          <div key={index} className="carrera-card">
            <h3>{carrera.nombre}</h3>
            <p>{carrera.descripcion}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        © 2025 <span>Tecnológico Espíritu Santo</span> | Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
