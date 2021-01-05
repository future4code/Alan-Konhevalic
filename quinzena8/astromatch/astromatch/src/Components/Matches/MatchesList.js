import React from 'react'
import styled from 'styled-components'

const List = styled.div`
    display: flex;
    justify-content: left;
    margin: 12px 8px;
    align-items: center;
    border-bottom: 1px solid gray;

    :hover {
        background-color: rgba(0, 0, 0, 0.1);
        transition: 0.2s;
    }
`
const Avatar = styled.img`
    border-radius: 50%;
    height: 50px;
`

export default function MatchesList(props) {
    return (
        <List key={props.matches.id}>
            <Avatar src={props.matches.photo} alt="" />
            <p>{props.matches.name}</p>
        </List>
    )
}