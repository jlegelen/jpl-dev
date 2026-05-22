import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header__inner">
          <div className="brand">
            <div className="brand__text">
              <div className="brand__name">jpl-developments</div>
              <div className="brand__tag">Productos web · Empresas & organizaciones</div>
            </div>
          </div>

          <nav className="nav">
            <NavLink to="/" end className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>
              Inicio
            </NavLink>
            <NavLink to="/productos" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>
              Productos
            </NavLink>
            <NavLink to="/contacto" className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"}>
              Contacto
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} jpl-dev</span>
          <span className="muted">React + Vite</span>
        </div>
      </footer>
    </div>
  );
}
