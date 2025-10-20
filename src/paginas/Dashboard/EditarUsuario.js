import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarUsuario() {
  const urlBase = `${process.env.REACT_APP_BACKEND_URL}/usuario`;
  let navegacion = useNavigate();

  const { id } = useParams();

  const [usuario, setUsuario] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    telefono: "",
    email: "",
    password:"",
    rol: "",
  });

  const { nombre, dni, direccion, telefono,password, email, rol } = usuario;

  useEffect(() => {
    cargarUsuario();
  }, []);

  const cargarUsuario = async () => {
    const resultado = await axios.get(`${urlBase}/${id}`);
    setUsuario(resultado.data);
  };

  const onInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`${urlBase}/${id}`, usuario);
    //redirigimos a la pagina de inicio
    navegacion("/usuario");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">EDITAR USUARIO</h5>
              <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Escriba su nombre completo"
                    value={nombre}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dni" className="form-label">
                    DNI
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dni"
                    name="dni"
                    placeholder="Escriba su dni"
                    value={dni}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">
                    Direccion
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    name="direccion"
                    placeholder="Escriba su direccion actual"
                    value={direccion}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    placeholder="Escriba su numero de telefono"
                    value={telefono}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Escriba su email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Escriba su contraseña"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <select
                    class="form-select"
                    name="rol"
                    value={rol}
                    onChange={(e)=> onInputChange(e)}
                  >
                    <option selected>Seleccione rol de usuario</option>
                    <option value="ADMIN">Administrador</option>
                    <option value="USUARIO">Usuario</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Editar usuario
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
