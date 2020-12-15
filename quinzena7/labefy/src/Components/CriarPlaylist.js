import React from 'react'
import axios from 'axios'
import { axiosConfig, BASE_URL } from '../Constants/requests'

export default class CriarPlaylist extends React.Component {
    state = {
        inputNome: "",
        playlists: []
    }

    componentDidMount = () => {
        this.pegarPlaylist()
    }

    adicionarPlaylist = () => {
       
        const body =  {
            name: this.state.inputNome  
        }
        
        axios.post(`${BASE_URL}/playlists`, body, axiosConfig)
            .then(()=> {alert("Playlist adicionada!")
                        this.setState({inputNome:""})
                        this.pegarPlaylist()
            })
            .catch((erro)=>erro.message)
    }

    onChangeInputPlaylist = (e) => {
        this.setState({inputNome: e.target.value})
    }

    pegarPlaylist = () => {
        axios.get(`${BASE_URL}/playlists`, axiosConfig)
            .then( (resposta) => {
                this.setState({playlists: resposta.data.result.list})
            })
            .catch((erro)=>erro.message)
    }

    deletarPlaylist = (playlistId) =>{
        axios.delete(`${BASE_URL}/playlists/${playlistId}`, axiosConfig)
        .then( () => { 
            this.pegarPlaylist()
            alert("Playlist deletada!")
            console.log(playlistId)
                             
        })
        .catch((erro)=>erro.message)
    }


    render() {
        const playlist = this.state.playlists.map( (musica) => {
            return (
                <div>
                    <p>Nome playlist: {musica.name} <button onClick={() => this.deletarPlaylist(musica.id)  }>Deletar</button></p>
                </div>
            )
        } )
        return (
            <div>
                <div>
                <h3>Criar Playlist</h3>
                <label>Nome da playlist</label>
                <input type="text" value={this.state.inputNome} onChange={this.onChangeInputPlaylist}/>
                <button onClick={this.adicionarPlaylist}>Criar</button>
                </div>
                {playlist}
            </div>
        )
    }
}