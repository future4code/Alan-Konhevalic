import React from 'react'
import styled from 'styled-components'

const Descricao = styled.div`
      text-align: left;
      max-height: 100px;
      display: flex;
      align-items: flex-start;
      padding: 0 8px;
      margin: 0;
`

const ImagemPerfil = styled.img`
    width: 100%;
    max-height: 250px;
`

export default function DescricaoPerfil(props) {
    return (
        <div>
            <ImagemPerfil src={props.escolherPerfil.photo}/>
            <Descricao >
                <p>{props.escolherPerfil.name }, {props.escolherPerfil.age} <br/>
                    {props.escolherPerfil.bio}
                </p>  
            </Descricao>
        </div>
    )
}