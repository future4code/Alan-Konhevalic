import axios from 'axios'
import React from 'react'


class Usuarios extends React.Component {
  state = {
    nome: '',
    email: '',
  }

  
  onChangeInputName = (event) => {
    this.setState({
      nome: event.target.value   
    })
  }

  onChangeInputEmail = (event) => {
    this.setState({
      email: event.target.value

    })
  }

  adicionaUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        "Authorization": 'alan-konhevalic-tang'
      }
     }).then(() => {
      alert("Usuário cadastrado")
      this.setState({nome: "", email: ""})
    })
    .catch((erro) => console.log(erro.message))
  }

 
  render () {
    return (
      <div className="Usuarios">
        
          <label>Nome:</label>
          <input type="text" value={this.state.nome} onChange= {this.onChangeInputName}/> <br/>
          <label>Email:</label>
          <input type="email"  value={this.state.email} onChange={this.onChangeInputEmail} /> <br/>
          <button onClick={this.adicionaUsuario}>Adicionar</button>
        
      </div>
    );
  }
}
  

export default Usuarios;
