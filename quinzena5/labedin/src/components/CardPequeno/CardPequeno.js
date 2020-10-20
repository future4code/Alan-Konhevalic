import React from 'react';
import './CardPequeno.css'

export default function CardPequeno(props){
    return (
        <div className="bigcard-container">
            <p> <strong>Email: </strong> {props.email} </p>
            <p> <strong>Endereço: </strong> {props.endereco} </p>
        </div>
    )
}