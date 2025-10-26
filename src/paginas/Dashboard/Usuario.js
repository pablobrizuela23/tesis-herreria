import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../hojas-de-estilo/Usuario.css";
import axios from "axios";
import UsuarioModal from "../../componentes/UsuarioModal";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function Usuario() {
  const urlBase = `${process.env.REACT_APP_BACKEND_URL}/usuario`;
  const [usuarios, setUsuarios] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [usuarioActual, setUsuarioActual] = useState(null);

  // Exportar PDF
  const exportPDF = (data, title) => {
    if (data.length === 0) return; // evita errores si no hay datos

    const doc = new jsPDF();
    doc.text(title, 20, 10);

    const tableColumn = Object.keys(data[0]);
    const tableRows = data.map((item) => Object.values(item));

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save(`${title}.pdf`);
  };

  const exportExcel = (data, title) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, title);
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      `${title}.xlsx`
    );
  };

  //cuando se carga la pagina se ejecuta este hook
  useEffect(() => {
    //este metodo se comunica con el backend
    cargarUsuarios();
  }, []);
  //arreglo vacio para llamar solo una vez

  const cargarUsuarios = async () => {
    const resultado = await axios.get(urlBase);
    setUsuarios(resultado.data);
  };

  const eliminarUsuario = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarUsuarios();
  };

  const abrirModal = (usuario = null) => {
    setUsuarioActual(usuario);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setUsuarioActual(null);
    setModalAbierto(false);
  };

  const guardarUsuario = async (usuario) => {
    if (usuario.id) {
      await axios.put(`${urlBase}/${usuario.id}`, usuario);
    } else {
      await axios.post(urlBase, usuario);
    }
    cerrarModal();
    cargarUsuarios();
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="encabezado-contenedor d-flex align-items-center justify-content-between ">
        <button
          type="button"
          class="btn btn-success"
          onClick={() => abrirModal()}
        >
          AGREGAR
        </button>

        <h2 className="text-center flex-grow-1 m-0">GESTIÓN DE USUARIOS</h2>
      </div>

      <div className="container ">
        <table class="table table-striped table-hover align-middle ">
          <thead className="table-dark ">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">DNI</th>
              <th scope="col">Dirección</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Email</th>
              <th scope="col">Rol</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              //iteramos el arreglo de usuarios
              //arriba pongo th vacios para que complete la cabecera de la tabla

              usuarios.map((usuario, indice) => (
                <tr key={indice}>
                  <th scope="row">{usuario.id}</th>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.dni}</td>
                  <td>{usuario.direccion}</td>
                  <td>{usuario.telefono}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.rol}</td>

                  <td>
                    <div className="text-center">
                      <button
                        className="btn btn-warning btn-sm me-3"
                        onClick={() => abrirModal(usuario)}
                      >
                        EDITAR
                      </button>

                      <button
                        onClick={() => eliminarUsuario(usuario.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        {/* Botones para exportar */}
        <div className="d-flex gap-2 mb-4">
          <button
            className="btn btn-primary"
            onClick={() => exportPDF(usuarios, "Usuarios")}
          >
            Exportar PDF
          </button>
          <button
            className="btn btn-success"
            onClick={() => exportExcel(usuarios, "Usuarios")}
          >
            Exportar Excel
          </button>
        </div>
      </div>

      {modalAbierto && (
        <UsuarioModal
          usuario={usuarioActual}
          onClose={cerrarModal}
          onSave={guardarUsuario}
        />
      )}
    </div>
  );
}
