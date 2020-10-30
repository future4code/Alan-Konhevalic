import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	return (<div className={'icon-container'}>
		{/**
		 * a imagem recebe o icone referente à ele configurado
		 * atribui a função correta ao botão do icone
		 * e adiciona o contador 
		 */}	
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
	)
}
