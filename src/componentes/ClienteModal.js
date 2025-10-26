import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/ClienteModal.css";

export default function ClienteModal({ cliente, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
  });

  useEffect(() => {
    if (cliente) setFormData(cliente);
  }, [cliente]);

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
        <h4>{cliente ? "Editar Cliente" : "Agregar Cliente"}</h4>

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
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            required
          />
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección"
          />

          <div className="modal-botones">
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
