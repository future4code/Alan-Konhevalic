import React,  { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DescricaoPerfil from './DescricaoPerfil'
import DarMatch from '../DarMatch/DarMatch'

const PerfilContainer = styled.div`
    margin: 16px;
    border: 1px solid grey;
`


export default function Perfil() {
    const [escolherPerfil, setEscolherPerfil] = useState({}) 

    const pegarPerfilEscolhido = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/person')
        .then(response => setEscolherPerfil(response.data.profile))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        pegarPerfilEscolhido()
    }, [])

    const gostei = () => {
        const body = {
            "id": escolherPerfil.id,
            "choice": true
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/choose-person', body)
            .then(pegarPerfilEscolhido())
            .catch(err => console.log(err))
        setEscolherPerfil(undefined)
    }

    const naoGostei = () => {
        const body = {
            "id": escolherPerfil.id,
            "choice": false
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/choose-person', body)
            .then(pegarPerfilEscolhido())
            .catch(err => console.log(err))
            setEscolherPerfil(undefined)
    }

    return (
        <div>
            { escolherPerfil ? (
            <>
            <PerfilContainer>
                <DescricaoPerfil escolherPerfil={escolherPerfil}/>
            </PerfilContainer>
            <DarMatch gostei={gostei} naoGostei={naoGostei}/>
            </>
            ) : <p>carregando</p>}
        </div>
    )
}