import React from 'react'
import axios from 'axios'

class ListaUsuarios extends React.Component {
  state = {
    listaUsuario: [],
  }  

  componentDidMount = () => {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
      "Authorization": 'alan-konhevalic-tang'
    }
   }).then( (resposta) => this.setState({listaUsuario: resposta.data})
    
   ).catch( (erro) => {alert(erro.message)} )
  }

  deletarUsuario = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        "Authorization": 'alan-konhevalic-tang'
      }
     }).then( () => {
      this.pegarUsuarios()
       alert("Usuario deletado com sucesso")
      }
     ).catch( (erro) => alert(erro.message) )
  }

  render () {
    const listaDeUsuarios = this.state.listaUsuario.map( (user)=>{
      return (
        <div key={user.id}>
          {user.name} 
          <button onClick={ ()=> {this.deletarUsuario(user.id)} }> Deletar </button>
        </div>)
   })

    return (
      <div className="ListaUsuarios">
        <h1>
          Lista de Usuários
        </h1>
        <p> {listaDeUsuarios} </p>  
      </div>
    );
  }
}
  

export default ListaUsuarios;
