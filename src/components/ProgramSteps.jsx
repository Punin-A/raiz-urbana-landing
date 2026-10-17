const steps = [
  ["01", "Cuéntanos sobre ti", "Completa una postulación breve y elige el espacio que tienes disponible."],
  ["02", "Recibe tu propuesta", "Te sugerimos una especie y compartimos su guía personalizada de cuidado."],
  ["03", "Hazla parte del barrio", "Riega, observa y registra sus cambios. Nosotros te acompañamos en el camino."],
];

export default function ProgramSteps() {
  return (
    <section className="section-pad steps-section" id="como-funciona">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5 position-lg-sticky">
            <p className="section-kicker text-leaf">Tu camino verde</p>
            <h2 className="section-title text-white">Tres pasos.<br />Un cambio que <em>crece.</em></h2>
            <p className="text-white-50 mt-4 steps-intro">No necesitas experiencia previa, herramientas especiales ni una gran extensión. Solo un espacio posible y ganas de cuidarlo.</p>
            <a href="#postulacion" className="link-leaf mt-3 d-inline-flex align-items-center gap-2">Comenzar ahora <span aria-hidden="true">↘</span></a>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="steps-list">
              {steps.map(([number, title, text]) => (
                <article className="step-item" key={number}>
                  <span className="step-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
