import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const urlLogin = `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`;
    //const urlLogin = "http://localhost:8080/api/auth/login"

    axios.post(urlLogin, { email, password })
      .then(res => {
        console.log("Login OK", res.data);

        // Guardar usuario completo en localStorage
        localStorage.setItem("usuarioLogueado", JSON.stringify(res.data));
        // Guardar solo el rol si querés usarlo para mostrar/habilitar opciones
        localStorage.setItem("rolUsuario", res.data.rol);

        navigate("/dashboard");
      })
      .catch(err => {
        console.error("Error en login", err);
        alert("Credenciales incorrectas");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Inicio de Sesión</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
