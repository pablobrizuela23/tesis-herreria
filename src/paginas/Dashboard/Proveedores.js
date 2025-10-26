import React, { useEffect, useState } from "react";
import "../../hojas-de-estilo/Proveedores.css";
import axios from "axios";
import ProveedorModal from "../../componentes/ProveedorModal";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function Proveedores() {
  const urlBase = `${process.env.REACT_APP_BACKEND_URL}/proveedor`;
  const [proveedores, setProveedores] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proveedorActual, setProveedorActual] = useState(null);
  const rol = localStorage.getItem("rolUsuario");

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

  useEffect(() => {
    cargarProveedores();
  }, []);

  const cargarProveedores = async () => {
    const resultado = await axios.get(urlBase);
    setProveedores(resultado.data);
  };

  const eliminarProveedor = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarProveedores();
  };

  const abrirModal = (proveedor = null) => {
    setProveedorActual(proveedor);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setProveedorActual(null);
    setModalAbierto(false);
  };

  const guardarProveedor = async (proveedor) => {
    if (proveedor.id) {
      await axios.put(`${urlBase}/${proveedor.id}`, proveedor);
    } else {
      await axios.post(urlBase, proveedor);
    }
    cerrarModal();
    cargarProveedores();
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="encabezado-contenedor d-flex align-items-center justify-content-between">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => abrirModal()}
        >
          AGREGAR
        </button>
        <h2 className="text-center flex-grow-1 m-0">GESTIÓN DE PROVEEDORES</h2>
      </div>

      <div className="container">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((proveedor, i) => (
              <tr key={i}>
                <td>{proveedor.id}</td>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.apellido}</td>
                <td>{proveedor.telefono}</td>
                <td>{proveedor.direccion}</td>
                <td>
                  <div className="text-center">
                    <button
                      className="btn btn-warning btn-sm me-3"
                      onClick={() => abrirModal(proveedor)}
                    >
                      EDITAR
                    </button>
                    <button
                      onClick={() => eliminarProveedor(proveedor.id)}
                      className="btn btn-danger btn-sm"
                      disabled={rol !== "ADMIN"} // bloquea para operarios
                    >
                      ELIMINAR
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Botones para exportar */}
        <div className="d-flex gap-2 mb-4">
          <button
            className="btn btn-primary"
            onClick={() => exportPDF(proveedores, "Proveedores")}
          >
            Exportar PDF
          </button>
          <button
            className="btn btn-success"
            onClick={() => exportExcel(proveedores, "Proveedores")}
          >
            Exportar Excel
          </button>
        </div>
      </div>

      {modalAbierto && (
        <ProveedorModal
          proveedor={proveedorActual}
          onClose={cerrarModal}
          onSave={guardarProveedor}
        />
      )}
    </div>
  );
}
