import React from 'react'
import CriarViagem from '../CreateTripPage/CriarViagem'
import Detalhes from '../TripDetailsPage/Detalhes'

function Administrar() {
    return (
      <div >
        <h1>Gerenciar Viagens</h1>
        <CriarViagem />
        <Detalhes />
      </div>
    );
  }
  
  export default Administrar;