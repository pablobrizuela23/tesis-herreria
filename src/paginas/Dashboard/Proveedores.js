import React from 'react'
import { Link } from 'react-router-dom'
import "../../hojas-de-estilo/Proveedores.css"

export default function Proveedores() {
  return (
    <div className='container-fluid min-vh-100'>
            <div className='encabezado-contenedor d-flex align-items-center justify-content-between '>
              <Link to="#">
                <button type="button" class="btn btn-primary">Volver
                </button>
              </Link>
              <h2 className='text-center flex-grow-1 m-0'>GESTION DE PROVEEDORES</h2>
            </div>
    
            <div className='container '>
                <table class="table table-striped table-hover align-middle">
                  <thead className='table-dark'>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Telefono</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mauricio</td>
                      <td>Gonzalez</td>
                      <td>3549-896514</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jorge</td>
                      <td>Torres</td>
                      <td>3549-658788</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Laura</td>
                      <td>Morales</td>
                      <td>3549-457899</td>
                    </tr>
                  </tbody>
              </table>
            </div>
        </div>
  )
}
