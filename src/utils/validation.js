export const initialValues = {
  fullName: "",
  email: "",
  age: "",
  phone: "",
  zone: "",
  password: "",
  consent: false,
};

export function validateField(name, value) {
  const clean = typeof value === "string" ? value.trim() : value;
  const rules = {
    fullName: () => {
      if (!clean) return "Ingresa tu nombre completo.";
      if (clean.length < 3) return "El nombre debe tener al menos 3 caracteres.";
      if (!/^[a-záéíóúüñ' -]+$/i.test(clean)) return "Usa únicamente letras, espacios, apóstrofes o guiones.";
      if (clean.split(/\s+/).length < 2) return "Incluye al menos un nombre y un apellido.";
      return "";
    },
    email: () => !clean ? "Ingresa tu correo electrónico." : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(clean) ? "Escribe un correo válido, por ejemplo: nombre@correo.com." : "",
    age: () => clean === "" ? "Ingresa tu edad." : !Number.isInteger(Number(clean)) ? "La edad debe ser un número entero." : Number(clean) < 18 || Number(clean) > 90 ? "La edad debe estar entre 18 y 90 años." : "",
    phone: () => {
      const digits = String(clean).replace(/\D/g, "");
      if (!digits) return "Ingresa un número de teléfono.";
      if (digits.length !== 10) return "El teléfono debe tener exactamente 10 dígitos.";
      return !digits.startsWith("0") ? "El teléfono debe comenzar con 0." : "";
    },
    zone: () => clean ? "" : "Selecciona dónde cuidarás el árbol.",
    password: () => !clean ? "Crea una contraseña." : clean.length < 8 ? "La contraseña debe tener al menos 8 caracteres." : !/[a-záéíóúüñ]/i.test(clean) || !/\d/.test(clean) ? "Combina al menos una letra y un número." : /\s/.test(clean) ? "La contraseña no puede contener espacios." : "",
    consent: () => value ? "" : "Debes aceptar para continuar.",
  };
  return rules[name]?.() ?? "";
}

export function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  return [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 10)].filter(Boolean).join(" ");
}
