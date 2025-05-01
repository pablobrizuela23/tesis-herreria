import React from 'react';
import { Link } from 'react-router-dom';
import "../../hojas-de-estilo/Cliente.css";

export default function Clientes() {
  return (
    <div className='container-fluid min-vh-100'>
        <div className='encabezado-contenedor d-flex align-items-center justify-content-between '>
          <Link to="#">
            <button type="button" class="btn btn-primary">Volver
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mauricio</td>
                  <td>Gonzalez</td>
                  <td>3549-896514</td>
                  <td>
                    <div className='text-center'>
                      <Link to="#"
                        className='btn btn-warning btn-sm me-3'>EDITAR</Link>

                      <button 
                        onClick=""
                        className='btn btn-danger btn-sm'
                        >Eliminar</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jorge</td>
                  <td>Torres</td>
                  <td>3549-658788</td>
                  <td>
                    <div className='text-center'>
                      <Link to="#"
                        className='btn btn-warning btn-sm me-3'>EDITAR</Link>

                      <button 
                        onClick=""
                        className='btn btn-danger btn-sm'
                        >Eliminar</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Laura</td>
                  <td>Morales</td>
                  <td>3549-457899</td>
                  <td>
                    <div className='text-center'>
                      <Link to="#"
                        className='btn btn-warning btn-sm me-3'>EDITAR</Link>

                      <button 
                        onClick=""
                        className='btn btn-danger btn-sm'
                        >Eliminar</button>
                    </div>
                  </td>
                </tr>
                
              </tbody>
          </table>
        </div>
    </div>
  )
}
