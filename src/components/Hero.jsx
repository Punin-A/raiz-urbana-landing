const Leaf = ({ className }) => (
  <span className={`hero-leaf ${className}`} aria-hidden="true">
    <svg viewBox="0 0 120 170"><path d="M104 8C48 19 8 64 17 116c7 39 43 55 70 34 33-26 25-88 17-142Z" /><path d="M28 143c20-38 42-68 69-104" /></svg>
  </span>
);

export default function Hero() {
  return (
    <section className="hero d-flex align-items-center" id="inicio">
      <Leaf className="hero-leaf--one" />
      <Leaf className="hero-leaf--two" />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="eyebrow mb-3"><span /> Programa barrial 2026</p>
            <h1 className="display-2">Tu barrio puede respirar <em>mejor.</em></h1>
            <p className="hero-copy">Apadrina un árbol joven cerca de ti. Te ayudamos a elegir la especie y te acompañamos para que cada pequeño cuidado se convierta en un barrio más vivo.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 pt-2">
              <a className="btn btn-leaf btn-lg" href="#postulacion">Apadrinar un árbol <span aria-hidden="true">→</span></a>
              <a className="btn btn-outline-light btn-lg" href="#programa">Conocer el programa</a>
            </div>
            <div className="hero-proof d-flex flex-wrap gap-4 mt-5" aria-label="Características del programa">
              <span><strong>2 min</strong> para postular</span>
              <span><strong>100%</strong> acompañamiento</span>
              <span><strong>Local</strong> y comunitario</span>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-visual" aria-label="Ilustración de un árbol creciendo en la ciudad" role="img">
              <div className="sun" />
              <div className="tree-crown tree-crown--1" />
              <div className="tree-crown tree-crown--2" />
              <div className="tree-crown tree-crown--3" />
              <div className="tree-trunk" />
              <div className="ground"><span /><span /><span /></div>
              <div className="visual-note"><small>Todo comienza con</small><strong>una semilla</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
