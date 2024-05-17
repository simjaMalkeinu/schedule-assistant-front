import React from "react";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="background-image"></div>
        <div className="login-form-container">
          <h2>Inicio de Sesion</h2>
          <div className="login-icon"></div>
          <form>
            <input type="number" placeholder="Boleta" />
            <input type="password" placeholder="Contraseña" />
            <button id="login-btn" type="submit">
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
