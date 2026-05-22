import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos.js";

const EMAIL = "TU_MAIL@DOMINIO.com"; // <-- cambiá esto

export default function ProductoDetalle() {
  const { slug } = useParams();
  const p = productos.find((x) => x.slug === slug);

  if (!p) {
    return (
      <div className="stack">
        <h1 className="h1">Producto no encontrado</h1>
        <p className="muted">
          El producto que buscás no existe o fue movido.
        </p>
        <div className="row">
          <Link className="btn" to="/productos">
            Volver
          </Link>
        </div>
      </div>
    );
  }

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Consulta sobre ${p.nombre} (jpl-dev)`
  )}`;

  return (
    <div className="stack">
      <section className="card">
        {p.categoria && <div className="pill">{p.categoria}</div>}

        <div className="pagehead" style={{ paddingBottom: 0 }}>
          <h1 className="h1">{p.nombre}</h1>
          <p className="muted" style={{ maxWidth: 760 }}>
            {p.resumen}
          </p>
        </div>

        <div className="row">
          <a className="btn btn--primary" href={mailto}>
            Solicitar información
          </a>
          <Link className="btn" to="/productos">
            Ver otros productos
          </Link>
        </div>
      </section>

      <section className="card">
        <h2 className="h2">Descripción</h2>
        <p style={{ margin: 0, lineHeight: 1.7 }}>{p.descripcion}</p>
      </section>

      <section className="card">
        <h2 className="h2">Incluye</h2>

        <div className="grid3">
          {p.features.map((f) => (
            <div key={f} className="mini">
              <h3 className="h3" style={{ marginBottom: 8 }}>
                {f}
              </h3>
              <p className="muted" style={{ margin: 0 }}>
                Funcionalidad incluida dentro del producto para mejorar la
                operación y facilitar la gestión diaria.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="h2">Ideal para</h2>

        <div className="grid3">
          <div className="mini">
            <h3 className="h3">Empresas</h3>
            <p className="muted" style={{ margin: 0 }}>
              Negocios que necesitan digitalizar procesos y ordenar su operación.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">Profesionales</h3>
            <p className="muted" style={{ margin: 0 }}>
              Técnicos, estudios y servicios que buscan ahorrar tiempo y mejorar
              seguimiento.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">Organizaciones</h3>
            <p className="muted" style={{ margin: 0 }}>
              Equipos que requieren control, trazabilidad y herramientas
              adaptables.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="sectionHead">
          <div>
            <h2 className="h2">¿Querés ver este producto en funcionamiento?</h2>
            <p className="muted" style={{ margin: 0 }}>
              Podemos mostrar una demo o adaptar la solución a tu necesidad.
            </p>
          </div>

          <a className="btn btn--primary" href={mailto}>
            Contactar
          </a>
        </div>
      </section>
    </div>
  );
}