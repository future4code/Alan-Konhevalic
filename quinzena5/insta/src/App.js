import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Formulario = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`
const Botao = styled.button`
width: 100px;
background-color: #66C4FF;
align-items:center;
border-radius:8px;
`
const Campo = styled.input`
height:20px;
margin-bottom:5px;
`
class App extends React.Component {
  state = {
    inputNomeUsuario:"",
    inputFotoUsuario:"",
    inputFotoPost:"",

    novoPost: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'konhevalic',
        fotoUsuario:'https://instagram.fbfh4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/41728106_2059289884134852_641310824282980352_n.jpg?_nc_ht=instagram.fbfh4-1.fna.fbcdn.net&_nc_ohc=kTOpabH72pYAX9-RWqx&oh=a2f35792769a44a7b34cc8505b00ad2b&oe=5FBF6428',
        fotoPost:'https://instagram.fbfh4-1.fna.fbcdn.net/v/t51.2885-15/e35/42702409_755111114838032_4089787588135228582_n.jpg?_nc_ht=instagram.fbfh4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UWwUNjHDAqQAX_kiVYS&_nc_tp=18&oh=0c2248cfc83c4dec47000533d2db275a&oe=5FBD93E6'
        
      },
      {
        nomeUsuario:'rafaelzntd',
        fotoUsuario:'https://instagram.fbfh4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119472916_176146844014558_8804997264322605288_n.jpg?_nc_ht=instagram.fbfh4-1.fna.fbcdn.net&_nc_ohc=OJLajn_udCsAX8M7yo7&oh=c81b210bdd0994db987955196fcc2997&oe=5FBF3165',
        fotoPost:"https://instagram.fbfh4-1.fna.fbcdn.net/v/t51.2885-15/e35/69186320_156311938783987_2929346403114094005_n.jpg?_nc_ht=instagram.fbfh4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=qXRQlcCBBGwAX_wj7Go&_nc_tp=18&oh=589845fcfd22e202a86dffdcc84acca2&oe=5FC0FB5C"
      },
    ]
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const novosPost = [...this.state.novoPost, novoPost]

    this.setState(
      {
        novoPost: novosPost,
        inputNomeUsuario:"",
        inputFotoUsuario:"",
        inputFotoPost:""
    })
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({inputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }


  render() {
    const listaDePosts = this.state.novoPost.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );

    });

    return (
      <div className={'app-container'}>
        {listaDePosts}

        <Formulario>
          <Campo
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"usuário"}
          />

          <Campo
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"foto do usuario"}
          />

          <Campo
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"foto do post"}
          />

          <Botao onClick={this.adicionaPost}>Postar</Botao>

        </Formulario>
          
    
      </div>
    );
  }
}

export default App;
