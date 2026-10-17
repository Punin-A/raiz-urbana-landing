import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-md-5"><a href="#inicio" className="text-decoration-none"><Brand light /></a></div>
          <div className="col-md-4 text-md-center"><p className="mb-0">Pequeños cuidados. Barrios más vivos.</p></div>
          <div className="col-md-3 text-md-end"><a href="#postulacion">Postúlate ahora ↗</a></div>
        </div>
        <div className="footer-bottom d-flex flex-column flex-sm-row justify-content-between gap-2">
          <span>© 2026 Raíz Urbana</span>
          <span>Proyecto académico · React + Bootstrap</span>
        </div>
      </div>
    </footer>
  );
}
