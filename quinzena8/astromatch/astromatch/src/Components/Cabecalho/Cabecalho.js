import React from 'react'
import styled from 'styled-components'

const Match = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    height: 50px;
    padding: 0 8px;
`

export default function Cabecalho(props) {
    return (
        <div>
            <Match>
                <button onClick={props.VaiParaEscolherPerfil}>Escolher</button>
                <span>ASTROMATCH</span>
                <button onClick={props.VaiParaListaMatches}>Matches</button>
            </Match>
        </div>
    )
}