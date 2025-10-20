import React, { useEffect, useState } from 'react';
import { Await, Link } from 'react-router-dom';
import "../../hojas-de-estilo/Cliente.css";
import axios from 'axios';

export default function Clientes() {

  const urlBase = `${process.env.REACT_APP_BACKEND_URL}/clientes`;

  const [clientes, setClientes] = useState([]);

  //cuando se carga la pagina se ejecuta este hook
  useEffect(() => {
    //este metodo se comunica con el backend
    cargarClientes();
  }, []);
//arreglo vacio para llamar solo una vez

  const cargarClientes = async () => {
    const resultado = await axios.get(urlBase);
    console.log("Resultado de cargar clientes");
    console.log(resultado.data);
    setClientes(resultado.data);
  }

  const eliminarCliente = async (id)=> {
    await axios.delete(`${urlBase}/${id}`);
    cargarClientes();
  }

  return (
    <div className='container-fluid min-vh-100'>
        <div className='encabezado-contenedor d-flex align-items-center justify-content-between '>
          <Link to="/crear-cliente">
            <button type="button" class="btn btn-success">AGREGAR
            </button>
          </Link>
          <h2 className='text-center flex-grow-1 m-0'>GESTION DE CLIENTES</h2>
        </div>

        <div className='container '>
            <table class="table table-striped table-hover align-middle">
              <thead className='table-dark'>
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
                clientes.map((cliente,indice) => (
                    <tr key={indice}>
                      <th scope="row">{cliente.id}</th>
                      <td>{cliente.nombre}</td>
                      <td>{cliente.apellido}</td>
                      <td>{cliente.telefono}</td>
                      <td>{cliente.direccion}</td>
                      <td>
                        <div className='text-center'>
                          
                          <Link 
                            to={`/editar/${cliente.id}`}
                            className='btn btn-warning btn-sm me-3'>
                              EDITAR
                          </Link>

                          <button 
                            onClick={()=>eliminarCliente(cliente.id)}
                            className='btn btn-danger btn-sm'
                            >Eliminar</button>
                        </div>
                      </td>
                    </tr>
                    ))
                
                    }
                
              </tbody>
          </table>
        </div>
    </div>
  )
}
