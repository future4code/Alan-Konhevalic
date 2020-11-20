import React from 'react'
import './App.css';

import ListaUsuarios from './Components/ListaUsuarios'
import Usuario from './Components/Usuario'

class App extends React.Component {
  state = {
    telaDeUSuario: true
  }  

  mudaTela = () => {
    this.setState({telaDeUSuario: !this.state.telaDeUSuario})
  }

  render () {
    
    return (
      <div className="App">
        <button onClick={this.mudaTela}>{this.state.telaDeUSuario ? "Ver lista de usuarios" :  "Criar usuario"}</button>
        {this.state.telaDeUSuario ? <Usuario /> :  <ListaUsuarios/>}       
      </div>
    );
  }
}
  

export default App;
