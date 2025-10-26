import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/UsuarioModal.css";

export default function UsuarioModal({ usuario, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    telefono: "",
    email: "",
    password: "",
    rol: "",
  });

  useEffect(() => {
    if (usuario) setFormData(usuario);
  }, [usuario]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <h4>{usuario ? "Editar Usuario" : "Agregar Usuario"}</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            placeholder="Dni"
            required
          />
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección"
          />
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
          />
          <select
            className="form-select"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
          >
            <option value="">Seleccione rol de usuario</option>
            <option value="ADMIN">Administrador</option>
            <option value="USUARIO">Usuario</option>
          </select>

          <div className="modal-botones">
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
