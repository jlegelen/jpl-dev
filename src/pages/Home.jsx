import { Link } from "react-router-dom";

const EMAIL = "jpldevelopments@gmail.com"; // <-- cambiá esto

export default function Home() {
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Consulta jpl-dev")}`;

  return (
    <div className="stack">
      <section className="hero hero--pro">
        
        <h1 className="hero__title">
          Desarrollo <span className="grad">sitios web, ecommerce y sistemas</span> para
          mejorar procesos y hacer crecer negocios.
        </h1>

        <p className="hero__subtitle">
          Creo soluciones digitales listas para usar y también adaptadas a medida:
          páginas web profesionales, tiendas online, sistemas de reservas,
          presupuestos, facturación, reportes e integraciones. Enfoque en diseño,
          control, escalabilidad y resultados reales.
        </p>

        <div className="hero__actions">
          <Link className="btn btn--primary" to="/productos">
            Ver productos
          </Link>
          <a className="btn" href={mailto}>
            Contactar por email
          </a>
        </div>

        <div className="hero__stats">
          <div className="card stat">
            <div className="stat__kpi">Web</div>
            <div className="stat__label">Sitios modernos para mostrar y vender</div>
          </div>
          <div className="card stat">
            <div className="stat__kpi">Ecommerce</div>
            <div className="stat__label">Tiendas online con catálogo y carrito</div>
          </div>
          <div className="card stat">
            <div className="stat__kpi">Sistemas</div>
            <div className="stat__label">Herramientas para ordenar tu operación</div>
          </div>
        </div>
      </section>

      <section className="card">
  <div className="sectionHead">
    <div>
      <h2 className="h2">Productos y soluciones</h2>
      <p className="muted" style={{ margin: 0 }}>
        Software pensado para resolver necesidades reales de gestión, ventas y presencia digital.
      </p>
    </div>

    <Link className="btn btn--sm" to="/productos">
      Ver todos →
    </Link>
  </div>

  <div className="grid3">

    <div className="card productLite">
      <div className="pill">Web / Presencia digital</div>

      <h3 className="h3" style={{ marginTop: 10 }}>
        Desarrollo de Sitios Web
      </h3>

      <p className="muted">
        Sitios web modernos, rápidos y optimizados para celulares.
        Diseño profesional, formularios de contacto, integración con
        WhatsApp y posicionamiento en buscadores.
      </p>

      <div className="row">
        <Link
          className="btn btn--sm btn--primary"
          to="/productos/sitios-web"
        >
          Ver detalle
        </Link>

        <a
          className="btn btn--sm"
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(
            "Consulta Desarrollo Web (jpl-dev)"
          )}`}
        >
          Pedir demo
        </a>
      </div>
    </div>

    <div className="card productLite">
      <div className="pill">Reservas / Turnos</div>

      <h3 className="h3" style={{ marginTop: 10 }}>
        Sistema de Reservas
      </h3>

      <p className="muted">
        Calendario de turnos, disponibilidad automática, panel de usuario
        y administración completa para negocios y servicios.
      </p>

      <div className="row">
        <Link
          className="btn btn--sm btn--primary"
          to="/productos/reservas"
        >
          Ver detalle
        </Link>

        <a
          className="btn btn--sm"
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(
            "Demo Sistema de Reservas (jpl-dev)"
          )}`}
        >
          Pedir demo
        </a>
      </div>
    </div>

    <div className="card productLite">
      <div className="pill">Ventas / Cotizaciones</div>

      <h3 className="h3" style={{ marginTop: 10 }}>
        Sistema de Presupuestos
      </h3>

      <p className="muted">
        Creación rápida de presupuestos profesionales con generación de PDF,
        organización comercial y envío directo por WhatsApp.
      </p>

      <div className="row">
        <Link
          className="btn btn--sm btn--primary"
          to="/productos/presupuestos"
        >
          Ver detalle
        </Link>

        <a
          className="btn btn--sm"
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(
            "Demo Sistema de Presupuestos (jpl-dev)"
          )}`}
        >
          Pedir demo
        </a>
      </div>
    </div>

    <div className="card productLite">
      <div className="pill">Tienda online / Ventas</div>

      <h3 className="h3" style={{ marginTop: 10 }}>
        Ecommerce
      </h3>

      <p className="muted">
        Tienda online con catálogo, detalle de productos, carrito de compras
        y experiencia pensada para vender de forma simple y profesional.
      </p>

      <div className="row">
        <Link
          className="btn btn--sm btn--primary"
          to="/productos/ecommerce"
        >
          Ver detalle
        </Link>

        <a
          className="btn btn--sm"
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(
            "Consulta Ecommerce (jpl-dev)"
          )}`}
        >
          Pedir demo
        </a>
      </div>
    </div>

  </div>
</section>

      <section className="card">
        <div className="sectionHead">
          <div>
            <h2 className="h2">Qué ofrezco</h2>
            <p className="muted" style={{ margin: 0 }}>
              Desarrollo soluciones digitales orientadas a mejorar la gestión, vender más y profesionalizar tu negocio.
            </p>
          </div>
        </div>

        <div className="grid3">
          <div className="mini">
            <h3 className="h3">Desarrollo web</h3>
            <p className="muted">
              Sitios web modernos, claros y profesionales para mostrar servicios,
              generar confianza y captar consultas.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">Ecommerce</h3>
            <p className="muted">
              Tiendas online preparadas para exhibir productos, facilitar compras
              y acompañar el crecimiento comercial.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">Sistemas a medida</h3>
            <p className="muted">
              Soluciones personalizadas para reservas, presupuestos, clientes,
              facturación, reportes y automatización de procesos.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="sectionHead">
          <div>
            <h2 className="h2">Cómo funciona</h2>
            <p className="muted" style={{ margin: 0 }}>
              Una forma simple de implementar software útil y adaptable a cada operación.
            </p>
          </div>
        </div>

        <div className="grid3">
          <div className="mini">
            <h3 className="h3">1. Análisis</h3>
            <p className="muted">
              Revisamos tu necesidad: presencia web, ventas online o mejora de un
              proceso interno.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">2. Implementación</h3>
            <p className="muted">
              Se adapta un producto existente o se desarrolla una solución
              específica según tu operación.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">3. Evolución</h3>
            <p className="muted">
              La herramienta crece con tu negocio, incorporando nuevas funciones,
              integraciones y mejoras.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="sectionHead">
          <div>
            <h2 className="h2">Sectores donde estas soluciones generan valor</h2>
            <p className="muted" style={{ margin: 0 }}>
              Herramientas pensadas para negocios, profesionales, técnicos y organizaciones.
            </p>
          </div>
        </div>

        <div className="grid3">
          <div className="mini">
            <h3 className="h3">Comercios</h3>
            <p className="muted">
              Ecommerce, catálogos online, administración de ventas y herramientas
              para ordenar la operación comercial.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">Servicios y profesionales</h3>
            <p className="muted">
              Reservas, turnos, presupuestos, seguimiento de clientes y procesos
              más ágiles.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">Empresas y organizaciones</h3>
            <p className="muted">
              Sistemas con roles, trazabilidad, control y digitalización de tareas
              administrativas.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="h2">Pensado para</h2>

        <div className="grid3">
          <div className="mini">
            <h3 className="h3">Negocios que quieren vender más</h3>
            <p className="muted">
              Sitios web y ecommerce orientados a presencia digital y ventas.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">Equipos que necesitan orden</h3>
            <p className="muted">
              Sistemas para centralizar información, procesos y seguimiento.
            </p>
          </div>

          <div className="mini">
            <h3 className="h3">Operaciones que necesitan escalar</h3>
            <p className="muted">
              Soluciones preparadas para crecer con nuevas funciones e integraciones.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="sectionHead">
          <div>
            <h2 className="h2">¿Querés una web, un ecommerce o un sistema para tu negocio?</h2>
            <p className="muted" style={{ margin: 0 }}>
              Podemos implementar un producto existente, adaptarlo o desarrollar una solución a medida.
            </p>
          </div>

          <a
            className="btn btn--primary"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(
              "Consulta sobre desarrollo web, ecommerce o sistema (jpl-dev)"
            )}`}
          >
            Contactar
          </a>
        </div>
      </section>
    </div>
  );
}