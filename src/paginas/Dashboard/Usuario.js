import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../hojas-de-estilo/Usuario.css";
import axios from "axios";

export default function Usuario() {
  const urlBase = `${process.env.REACT_APP_BACKEND_URL}/usuario`;

  const [usuarios, setUsuarios] = useState([]);

  //cuando se carga la pagina se ejecuta este hook
  useEffect(() => {
    //este metodo se comunica con el backend
    cargarUsuarios();
  }, []);
  //arreglo vacio para llamar solo una vez

  const cargarUsuarios = async () => {
    const resultado = await axios.get(urlBase);
    console.log("Resultado de cargar usuarios");
    console.log(resultado.data);
    setUsuarios(resultado.data);
  };

  const eliminarUsuario= async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarUsuarios();
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="encabezado-contenedor d-flex align-items-center justify-content-between ">
        <Link to="/crear-usuario">
          <button type="button" class="btn btn-success">
            AGREGAR
          </button>
        </Link>
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
              //iteramos el arreglo de proveedors
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
                      <Link
                        to={`/editar-usuario/${usuario.id}`}
                        className="btn btn-warning btn-sm me-3"
                      >
                        EDITAR
                      </Link>

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
      </div>
    </div>
  );
}
