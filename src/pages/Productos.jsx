import { Link } from "react-router-dom";
import { productos } from "../data/productos.js";

export default function Productos() {
  return (
    <div className="stack">

      <div className="pagehead">
        <h1 className="h1">Productos y soluciones</h1>
        <p className="muted">
          Herramientas digitales diseñadas para mejorar la gestión,
          organizar procesos y potenciar ventas.
        </p>
      </div>

      <div className="grid3">

        {productos.map((p) => (
          <Link
            key={p.slug}
            to={`/productos/${p.slug}`}
            className="card productLite"
          >

            {p.categoria && (
              <div className="pill">{p.categoria}</div>
            )}

            <h3 className="h3" style={{ marginTop: 10 }}>
              {p.nombre}
            </h3>

            <p className="muted">
              {p.resumen}
            </p>

            <div className="row">
              <span className="btn btn--sm btn--primary">
                Ver producto
              </span>

              <span className="btn btn--sm">
                Más información
              </span>
            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}