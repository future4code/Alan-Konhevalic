import React from 'react'
import './App.css';
import CriarPlaylist from './Components/CriarPlaylist'
import AdicionarMusica from './Components/AdicionarMusica'

class App extends React.Component {
  state = {
    adicionarMusica: true
  }

  adicionarMusica = () => {
    this.setState({adicionarMusica: !this.state.adicionarMusica})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.adicionarMusica}>{this.state.adicionarMusica ? "Adicionar Música" :  "Criar playlist"}</button>
        {this.state.adicionarMusica ? <CriarPlaylist/> : <AdicionarMusica/>}
      </div>
    );
  }
}

export default App;
