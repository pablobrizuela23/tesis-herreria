import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../hojas-de-estilo/Proveedores.css";
import axios from "axios";

export default function Proveedores() {

  
    const urlBase = `${process.env.REACT_APP_BACKEND_URL}/proveedor`;
  
    const [proveedores, setProveedores] = useState([]);
  
    //cuando se carga la pagina se ejecuta este hook
    useEffect(() => {
      //este metodo se comunica con el backend
      cargarProveedores();
    }, []);
  //arreglo vacio para llamar solo una vez
  
    const cargarProveedores = async () => {
      const resultado = await axios.get(urlBase);
      console.log("Resultado de cargar proveedores");
      console.log(resultado.data);
      setProveedores(resultado.data);
    }
  
    const eliminarProveedor = async (id)=> {
      await axios.delete(`${urlBase}/${id}`);
      cargarProveedores();
    }

  return (
    <div className="container-fluid min-vh-100">
      <div className='encabezado-contenedor d-flex align-items-center justify-content-between '>
        <Link to="/crear-proveedor">
                    <button type="button" class="btn btn-success">AGREGAR
                    </button>
                  </Link>
        <h2 className="text-center flex-grow-1 m-0">GESTIÓN DE PROVEEDORES</h2>
      </div>

      <div className="container ">
        <table class="table table-striped table-hover align-middle ">
          <thead className="table-dark ">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Dirección</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {
              //iteramos el arreglo de proveedors
              //arriba pongo th vacios para que complete la cabecera de la tabla
              
              proveedores.map((proveedor, indice) => (
                <tr key={indice}>
                  <th scope="row">{proveedor.id}</th>
                  <td>{proveedor.nombre}</td>
                  <td>{proveedor.apellido}</td>
                  <td>{proveedor.telefono}</td>
                  <td>{proveedor.direccion}</td>

                  
                  <td>
                    <div className="text-center">
                      <Link
                        to={`/editar-proveedor/${proveedor.id}`}
                        className="btn btn-warning btn-sm me-3"
                      >
                        EDITAR
                      </Link>

                      <button
                        onClick={() => eliminarProveedor(proveedor.id)}
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
