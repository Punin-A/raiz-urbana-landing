import test from "node:test";
import assert from "node:assert/strict";
import { formatPhone, validateField } from "../src/utils/validation.js";

test("acepta los datos válidos del formulario", () => {
  const validValues = {
    fullName: "Andrea Morales",
    email: "andrea@correo.com",
    age: "28",
    phone: "098 765 4321",
    zone: "patio",
    password: "Verde2026",
    consent: true,
  };

  for (const [name, value] of Object.entries(validValues)) {
    assert.equal(validateField(name, value), "");
  }
});

test("rechaza datos incompletos o fuera de rango", () => {
  assert.match(validateField("fullName", "Andrea"), /apellido/);
  assert.match(validateField("email", "correo-invalido"), /correo válido/);
  assert.match(validateField("age", "17"), /18 y 90/);
  assert.match(validateField("phone", "123"), /10 dígitos/);
  assert.match(validateField("password", "sinnumero"), /letra y un número/);
  assert.match(validateField("consent", false), /aceptar/);
});

test("formatea y limita el teléfono a diez dígitos", () => {
  assert.equal(formatPhone("098765432199"), "098 765 4321");
});
