import { useState } from "react";

const EMAIL = "jpldevelopments@gmail.com"; // <-- cambiá esto

export default function Contacto() {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar:", err);
    }
  };

  return (
    <div className="stack">
      <div className="pagehead">
        <h1 className="h1">Contacto</h1>
        <p className="muted">Escribime por email y te respondo con demo + alcance.</p>
      </div>

      <section className="card">
        <h2 className="h2">Email</h2>
        <p className="muted" style={{ marginTop: 0 }}>{EMAIL}</p>

        <div className="row">
          <button className="btn btn--primary" onClick={copiarEmail}>
            {copiado ? "¡Copiado!" : "Copiar email"}
          </button>
        </div>
      </section>
    </div>
  );
}
