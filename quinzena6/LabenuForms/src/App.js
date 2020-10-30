import React from 'react'
import Etapa1 from './Componentes/Etapa1'
import Etapa2 from './Componentes/Etapa2'
import Etapa3 from './Componentes/Etapa3'
import Etapa4 from './Componentes/Etapa4'
import './App.css';
import styled from 'styled-components'

const Botao = styled.button``

const Formulario = styled.div`
  text-align: center;
`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    }
      
    )
  }


 renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>
        
      case 2:
        return <Etapa2/>
        
      case 3:
        return <Etapa3/>

      default:
        return <Etapa4/>
    }
  }

  
  render() {
    return (
      <div>
        
        <Formulario>
          {this.renderizaEtapa()}
          <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>
        </Formulario>
          
          
          
        
  
        
  
      </div>
    );  
  }
  
}

export default App;
