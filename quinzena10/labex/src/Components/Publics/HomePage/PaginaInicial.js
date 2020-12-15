import React from 'react'
import ListaViagens from '../ListTripsPage/ListaViagens'
import Formulario from '../ApplicationFormPage/Formulario'
import Login from  '../LoginPage/Login'

function PaginaInicial() {
    return (
      <div >
        <h1>Pagina Inicial</h1>
        <ListaViagens/>
        <Formulario />
        <Login />
      </div>
    );
  }
  
  export default PaginaInicial;