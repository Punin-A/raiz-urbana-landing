import { useMemo, useState } from "react";
import { formatPhone, initialValues, validateField } from "../utils/validation";

const fields = [
  { name: "fullName", label: "Nombre completo", placeholder: "Ej. Andrea Morales", type: "text", col: "col-12", autoComplete: "name" },
  { name: "email", label: "Correo electrónico", placeholder: "tu@correo.com", type: "email", col: "col-12", autoComplete: "email" },
  { name: "age", label: "Edad", placeholder: "18–90", type: "number", col: "col-md-5", min: 18, max: 90 },
  { name: "phone", label: "Teléfono", placeholder: "098 765 4321", type: "tel", col: "col-md-7", autoComplete: "tel" },
];

export default function ApplicationForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const passwordLevel = useMemo(() => {
    const value = values.password;
    if (!value) return 0;
    const validBase = value.length >= 8 && /[a-záéíóúüñ]/i.test(value) && /\d/.test(value);
    if (validBase && (/[^a-záéíóúüñ\d\s]/i.test(value) || value.length >= 12)) return 3;
    return validBase ? 2 : 1;
  }, [values.password]);

  const updateValue = ({ target }) => {
    const { name, type, checked } = target;
    let value = type === "checkbox" ? checked : target.value;
    if (name === "phone") value = formatPhone(value);
    setValues((current) => ({ ...current, [name]: value }));
    setShowAlert(false);
  };

  const markTouched = ({ target }) => setTouched((current) => ({ ...current, [target.name]: true }));
  const errorFor = (name) => touched[name] ? validateField(name, values[name]) : "";
  const stateClass = (name) => !touched[name] ? "" : errorFor(name) ? "is-invalid" : "is-valid";

  const handleSubmit = (event) => {
    event.preventDefault();
    const allTouched = Object.keys(initialValues).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);
    const invalid = Object.keys(initialValues).some((name) => validateField(name, values[name]));
    if (invalid) {
      setShowAlert(true);
      window.setTimeout(() => document.querySelector(".is-invalid")?.focus(), 0);
      return;
    }
    setShowAlert(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setValues(initialValues);
    setTouched({});
    setSubmitted(false);
    setShowPassword(false);
  };

  const firstName = values.fullName.trim().split(/\s+/)[0];
  const strengthLabels = ["Usa una letra y un número", "Aún es demasiado corta", "Contraseña adecuada", "Contraseña fuerte"];

  return (
    <section className="section-pad form-section" id="postulacion">
      <div className="container">
        <div className="row g-0 application-shell">
          <div className="col-lg-5 form-story">
            <p className="section-kicker text-leaf">Súmate al programa</p>
            <h2>Planta hoy una historia que dará <em>sombra mañana.</em></h2>
            <p>Completa el formulario y da el primer paso. Esta demostración valida los datos en tu dispositivo; no los almacena ni los envía.</p>
            <div className="form-assurances">
              <span><i aria-hidden="true">✓</i> Postulación gratuita</span>
              <span><i aria-hidden="true">✓</i> Solo toma 2 minutos</span>
              <span><i aria-hidden="true">✓</i> Datos no almacenados</span>
            </div>
            <div className="story-quote">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p>Cada árbol que sobrevive sus primeros años cambia el paisaje de toda una cuadra.</p>
            </div>
          </div>
          <div className="col-lg-7 form-card">
            {submitted ? (
              <div className="success-panel d-flex flex-column align-items-center justify-content-center text-center" role="status" aria-live="polite">
                <span className="success-icon" aria-hidden="true">✓</span>
                <p className="section-kicker mb-2">Postulación recibida</p>
                <h2>¡Ya plantaste la primera semilla!</h2>
                <p><strong>{firstName}</strong>, revisamos tus datos correctamente. Esta demostración no almacena ni envía información.</p>
                <button className="btn btn-forest" type="button" onClick={resetForm}>Completar otra postulación</button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span className="form-step">Paso 1 de 1</span>
                  <h2>Cuéntanos sobre ti</h2>
                  <p>Todos los campos son obligatorios.</p>
                </div>
                {showAlert && <div className="alert alert-danger py-2 px-3 small" role="alert">Revisa los campos marcados antes de continuar.</div>}
                <form className="row g-3" onSubmit={handleSubmit} noValidate>
                  {fields.map((field) => (
                    <div className={field.col} key={field.name}>
                      <label className="form-label" htmlFor={field.name}>{field.label}</label>
                      <input
                        className={`form-control ${stateClass(field.name)}`}
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={values[field.name]}
                        onChange={updateValue}
                        onBlur={markTouched}
                        autoComplete={field.autoComplete}
                        min={field.min}
                        max={field.max}
                        aria-describedby={`${field.name}Error`}
                        aria-invalid={Boolean(errorFor(field.name))}
                      />
                      <div className="invalid-feedback" id={`${field.name}Error`}>{errorFor(field.name)}</div>
                    </div>
                  ))}

                  <div className="col-12">
                    <label className="form-label" htmlFor="zone">¿Dónde cuidarás el árbol?</label>
                    <select className={`form-select ${stateClass("zone")}`} id="zone" name="zone" value={values.zone} onChange={updateValue} onBlur={markTouched} aria-invalid={Boolean(errorFor("zone"))}>
                      <option value="">Selecciona el tipo de espacio</option>
                      <option value="vereda">Vereda frente a mi casa</option>
                      <option value="patio">Patio o jardín particular</option>
                      <option value="comunal">Área comunal o parque barrial</option>
                      <option value="escuela">Escuela, colegio o universidad</option>
                    </select>
                    <div className="invalid-feedback">{errorFor("zone")}</div>
                  </div>

                  <div className="col-12">
                    <div className="d-flex justify-content-between gap-3"><label className="form-label" htmlFor="password">Crea una contraseña</label><small className="text-secondary">Mínimo 8 caracteres</small></div>
                    <div className="input-group">
                      <input className={`form-control ${stateClass("password")}`} id="password" name="password" type={showPassword ? "text" : "password"} placeholder="8+ caracteres, letra y número" value={values.password} onChange={updateValue} onBlur={markTouched} autoComplete="new-password" aria-invalid={Boolean(errorFor("password"))} />
                      <button className="btn password-button" type="button" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>{showPassword ? "Ocultar" : "Mostrar"}</button>
                      <div className="invalid-feedback">{errorFor("password")}</div>
                    </div>
                    <div className={`strength strength--${passwordLevel}`} aria-live="polite"><span /><span /><span /><small>{strengthLabels[passwordLevel]}</small></div>
                  </div>

                  <div className="col-12 mt-4">
                    <div className="form-check">
                      <input className={`form-check-input ${stateClass("consent")}`} id="consent" name="consent" type="checkbox" checked={values.consent} onChange={updateValue} onBlur={markTouched} aria-invalid={Boolean(errorFor("consent"))} />
                      <label className="form-check-label" htmlFor="consent">Acepto recibir la guía de cuidado y comunicaciones relacionadas con el programa.</label>
                      <div className="invalid-feedback">{errorFor("consent")}</div>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <button className="btn btn-forest btn-lg w-100" type="submit">Enviar mi postulación <span aria-hidden="true">→</span></button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
