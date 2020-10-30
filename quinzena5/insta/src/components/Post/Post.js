import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { tsImportEqualsDeclaration } from '@babel/types'

class Post extends React.Component {
  //declaração estado inicial 
  state = {
    //utilizado para alterar a cor do icone de curtida
    curtido: false,
    //atribuida ao contador
    numeroCurtidas: 0,
    //abre o campo de comentarios. se estiver true, o campo já fica aberto
    comentando: false,
    //atribui ao contador 
    numeroComentarios: 0,

  }


  onClickCurtida = () => {
    //se o estado curtido for false
    if (!this.state.curtido) {
      this.setState({
        //soma à variável
        numeroCurtidas: this.state.numeroCurtidas + 1,
        //altera o estado para true
        curtido: !this.state.curtido
      })
    } else {
      //se o estador for true
      this.setState({
        //diminui a variavel
        numeroCurtidas: this.state.numeroCurtidas - 1,
        //altera a variável para false
        curtido: !this.state.curtido
    })
    
  }
}

  onClickComentario = () => {
    this.setState({
      //altera o estado da propriedade "comentando"
      //inicialmente estava falso. essa função torna o resultado falso
      //ou seja, tornar falso o que está falso, deixa-o verdadeiro
      comentando: !this.state.comentando

    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    //se o estado curtido for verdadeiro, o ícone será preto
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    
    //se o estado da variavel COMENTANDO for true
    //fica true quando executa a função onClickComentario
    //ou seja, ao clicar no ícone, a variável ficará true
    //ficando true, aparecerá o componente SecaoCompentario
    if(this.state.comentando) {
      //variavel lÊ a atualização da função aoEnviarComentario
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return (
      <div className={'post-container'}>
        <div className={'post-header'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

        <div className={'post-footer'}>
          <IconeComContador
          //variavel recebe o icone de curtida
            icone={iconeCurtida}
            //variavel recebe a função de clicar no botao de curtir
            onClickIcone={this.onClickCurtida}
            //variavel somador de curtida
            valorContador={this.state.numeroCurtidas}
          />
          
          <IconeComContador
          //análogo à curtida, mas com comentários
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </div>
        {componenteComentario}
      </div>
    )
  }
}

export default Post