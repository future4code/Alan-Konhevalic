import React from 'react'
import Conteudo from './Components/Conteudo/Conteudo'
import styled from 'styled-components'

const Principal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`

function App() {
  return (
    <Principal>
      <Conteudo/>
    </Principal>
  );
}

export default App;
