import React from 'react'
import axios from 'axios'
import { axiosConfig, BASE_URL } from '../Constants/requests'

export default class AdicionarMusica extends React.Component {
    state = {
        inputNome:"",
        inputAutor:"",
        musicas: [ ]
    }

    componentDidMount = () => {
        this.adicionarMusica()
    }

    adicionarMusica = () => {
        const body = {nome: this.state.inputNome, autor: this.state.inputAutor }

        axios.post(`${BASE_URL}/:playlistId/tracks`, body, axiosConfig)
            .then(()=> {alert("Música adicionada!")
                        this.setState({inputNome:"", inputAutor:""})})
            .catch((erro)=>erro.message)
        console.log(body)
    }

    onChangeInputNome = (e) => {
        this.setState({inputNome: e.target.value})
    }

    onChangeInputAutor = (e) => {
        this.setState({inputAutor: e.target.value})
    }

    render() {
        const listaMusicas = this.state.musicas.map( (musica) => {
            return (
                <div>
                    <p>Título: {musica.name}</p>
                    <p>Autor: {musica.artist}</p>
                </div>
            )
        } )
        return(
            <div>
                <h3>Adicionar Música</h3>
                <label>Título:</label>
                <input type="text" value={this.state.inputNome} onChange={this.onChangeInputNome} />
                <label>Autor:</label>
                <input type="text" value={this.state.inputAutor} onChange={this.onChangeInputAutor} />
                <select>
                    
                </select>
                <button onClick={this.adicionarMusica}>Adicionar</button>
                {listaMusicas}
            </div>
        )
    }
}