import { useState } from "react";
import Brand from "./Brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top site-navbar" data-bs-theme="dark" aria-label="Navegación principal">
      <div className="container">
        <a className="navbar-brand" href="#inicio" onClick={closeMenu} aria-label="Raíz Urbana, inicio">
          <Brand light />
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-controls="mainNavigation"
          aria-expanded={open}
          aria-label="Abrir o cerrar menú"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="mainNavigation">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item"><a className="nav-link" href="#programa" onClick={closeMenu}>El programa</a></li>
            <li className="nav-item"><a className="nav-link" href="#como-funciona" onClick={closeMenu}>Cómo funciona</a></li>
            <li className="nav-item"><a className="nav-link nav-cta ms-lg-2" href="#postulacion" onClick={closeMenu}>Quiero participar</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
