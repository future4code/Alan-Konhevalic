import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Match = styled.div`
    display: flex;
    justify-content: space-around;
`


export default function DarMatch({naoGostei, gostei}) {
    const resetar = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/clear')
    }

    return (
        <Match>
            <button onClick={naoGostei}>Nao gostei</button>
            <button onClick={gostei}>Gostei</button>
            <button onClick={resetar}>Limpar matches</button>
        </Match>
    )
}