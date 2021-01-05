import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Cabecalho from '../Cabecalho/Cabecalho'
import Matches from '../Matches/Matches'
import Perfil from '../Perfil/Perfil'


const ConteudoCard = styled.div`
      text-align: center;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      align-content: center;
      width: 300px;
      height: 500px;
`

function Conteudo() {
  const [selecionarPagina, setSelecionarPagina] = useState('')
  const renderizarPagina = () => {
    switch(selecionarPagina) {
      case 'perfil':
        return <Perfil />
      case 'lista-matches':
        return  <Matches/>
      default:
        return <Perfil />
    }
  }

  const VaiParaEscolherPerfil = () => {
    setSelecionarPagina('perfil')
  }

  const VaiParaListaMatches = () => {
    setSelecionarPagina('lista-matches')
  }
    
  return (
    <ConteudoCard>
      <Cabecalho VaiParaEscolherPerfil={VaiParaEscolherPerfil} VaiParaListaMatches={VaiParaListaMatches} />
      {renderizarPagina()}
    </ConteudoCard>
  );
}

export default Conteudo;
