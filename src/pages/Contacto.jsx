const EMAIL = "jpldevelopments@gmail.com"; // <-- cambiá esto

export default function Contacto() {
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Consulta jpl-dev")}&body=${encodeURIComponent(
    "Hola, me interesa conversar sobre [producto/necesidad].\n\nDatos:\n- Empresa/Organización:\n- Rubro:\n- Objetivo:\n- Plazo:\n"
  )}`;

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
          <a className="btn btn--primary" href={mailto}>Redactar email</a>
          <a className="btn" href={`mailto:${EMAIL}`}>Abrir cliente</a>
        </div>
      </section>
    </div>
  );
}
