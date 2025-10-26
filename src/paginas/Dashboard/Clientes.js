import React, { useEffect, useState } from "react";
import "../../hojas-de-estilo/Cliente.css";
import axios from "axios";
import ClienteModal from "../../componentes/ClienteModal";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function Clientes() {
  const urlBase = `${process.env.REACT_APP_BACKEND_URL}/clientes`;
  const [clientes, setClientes] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [clienteActual, setClienteActual] = useState(null);
  const rol = localStorage.getItem("rolUsuario");

   // Exportar PDF
  const exportPDF = (data, title) => {
    if (data.length === 0) return; // evita errores si no hay datos

    const doc = new jsPDF();
    doc.text(title, 20, 10);

    const tableColumn = Object.keys(data[0]);
    const tableRows = data.map(item => Object.values(item));

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
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), `${title}.xlsx`);
};

  //cuando se carga la pagina se ejecuta este hook
  useEffect(() => {
    //este metodo se comunica con el backend
    cargarClientes();
  }, []);
  //arreglo vacio para llamar solo una vez

  const cargarClientes = async () => {
    const resultado = await axios.get(urlBase);
    setClientes(resultado.data);
  };

  const eliminarCliente = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarClientes();
  };

  const abrirModal = (cliente = null) => {
    setClienteActual(cliente);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setClienteActual(null);
    setModalAbierto(false);
  };

  const guardarCliente = async (cliente) => {
    if (cliente.id) {
      await axios.put(`${urlBase}/${cliente.id}`, cliente);
    } else {
      await axios.post(urlBase, cliente);
    }
    cerrarModal();
    cargarClientes();
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

        <h2 className="text-center flex-grow-1 m-0">GESTION DE CLIENTES</h2>
      </div>

      <div className="container ">
        <table class="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Telefono</th>
              <th scope="col">Direccion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              //iteramos el arreglo de clientes
              clientes.map((cliente, indice) => (
                <tr key={indice}>
                  <th scope="row">{cliente.id}</th>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.apellido}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.direccion}</td>
                  <td>
                    <div className="text-center">
                      <button
                        className="btn btn-warning btn-sm me-3"
                        onClick={() => abrirModal(cliente)}
                      >
                        EDITAR
                      </button>

                      <button
                        onClick={() => eliminarCliente(cliente.id)}
                        className="btn btn-danger btn-sm"
                        disabled={rol !== "ADMIN"} // bloquea para operarios
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
            onClick={() => exportPDF(clientes, "Clientes")}
          >
            Exportar PDF
          </button>
          <button
            className="btn btn-success"
            onClick={() => exportExcel(clientes, "Clientes")}
          >
            Exportar Excel
          </button>
        </div>
      </div>
      {modalAbierto && (
        <ClienteModal
          cliente={clienteActual}
          onClose={cerrarModal}
          onSave={guardarCliente}
        />
      )}
    </div>
  );
}
