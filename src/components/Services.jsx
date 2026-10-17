const services = [
  {
    number: "01",
    title: "Una especie para tu espacio",
    text: "Recomendamos el árbol adecuado según la luz, el suelo y el lugar disponible.",
    icon: "M12 21V9m0 5c-5 0-7-3-7-7 5 0 7 3 7 7Zm0-5c0-4 2-7 7-7 0 4-2 7-7 7Z",
  },
  {
    number: "02",
    title: "Una guía fácil de seguir",
    text: "Recibes indicaciones simples de riego, protección y cuidado para cada etapa.",
    icon: "M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Zm3 4h7M8 12h7M8 16h4",
  },
  {
    number: "03",
    title: "Una comunidad que acompaña",
    text: "Conecta con otros guardianes y multiplica el impacto verde de tu zona.",
    icon: "M16 20a4 4 0 0 0-8 0m4-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 6a4 4 0 0 0-5-3.9M19 5.2a4 4 0 0 1 0 7.6M1 20a4 4 0 0 1 5-3.9M5 5.2a4 4 0 0 0 0 7.6",
  },
];

export default function Services() {
  return (
    <section className="section-pad bg-cream" id="programa">
      <div className="container">
        <div className="row align-items-end mb-5 g-4">
          <div className="col-lg-7">
            <p className="section-kicker">Cuidar también es pertenecer</p>
            <h2 className="section-title">No entregamos árboles.<br />Creamos <em>guardianes.</em></h2>
          </div>
          <div className="col-lg-5">
            <p className="section-copy mb-0">Transformamos la intención de ayudar en un plan concreto, cercano y sostenible. Tú pones el compromiso; nosotros, las herramientas.</p>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.number}>
              <article className="service-card h-100">
                <div className="d-flex align-items-center justify-content-between mb-5">
                  <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d={service.icon} /></svg></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
