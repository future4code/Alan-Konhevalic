/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo de Blackjack!")

let novoTotalJogador = 0
let novoTotalComputador = 0
let novaCartaJogador = ''
let novaCartaComputador = ''
let i = 0

//verificando se o usuario quer iniciar uma nova partida
if (confirm("Quer iniciar uma nova partida?")) {

   //sorteando 2 cartas para o jogador e somando seus valores
   let playerCarta1 = comprarCarta()
   let playerCarta2 = comprarCarta()
   let playerCartas = [playerCarta1.texto, playerCarta2.texto]
   let totalPlayer = [playerCarta1.valor, playerCarta2.valor]



   //sorteando 2 cartas para o computador e somando seus valores
   let computerCarta1 = comprarCarta()
   let computerCarta2 = comprarCarta()
   let computerCartas = [computerCarta1.texto, computerCarta2.texto]
   let totalComputer = [computerCarta1.valor, computerCarta2.valor]

   //se as duas cartas iniciadas pelo jogador forem Às, será sorteado novas cartas
   if ((playerCarta1.valor == 11) && (playerCarta1.valor == playerCarta2.valor)) {
      playerCarta1 = comprarCarta()
      playerCarta2 = comprarCarta()
   }

   if ((computerCarta1.valor == 11) && (computerCarta1.valor == computerCarta2.valor)) {
      computerCarta1 = comprarCarta()
      computerCarta2 = comprarCarta()
   }

   let mensagemInicial = (confirm
      //imprimindo as cartas sorteadas para o jogador e carta revelada do computador
      ("Suas cartas são:" +
         playerCarta1.texto +
         ' ' +
         playerCarta2.texto +
         ' . A carta revelada do computador é: ' +
         computerCarta1.texto +
         ' ' +
         " .Deseja comprar mais uma carta?"
      )
   )
   

   //laço enquanto verdadeiro, irá adicionar cartas
   if (mensagemInicial) {
      while (novoTotalJogador < 22 && (confirm("Comprar mais uma carta?"))) {
         //zera a soma anterior
         novoTotalJogador = 0
         //compra mais uma carta
         novaCartaJogador = comprarCarta()
         //adiciona uma carta no array do jogador que descreve a carta
         playerCartas.push(novaCartaJogador.texto)
         console.log(playerCartas)

         //insere o valor da nova carta no array do jogador
         totalPlayer.push(novaCartaJogador.valor)
         for (let i = 0; i < totalPlayer.length; i++) {
            novoTotalJogador = novoTotalJogador + totalPlayer[i]
         }
         alert("Sua pontuação no momento é: " + novoTotalJogador)
      }
      
      while ( novoTotalJogador < 22 && novoTotalComputador < 22 ) {
            //zera a soma anterior
         novoTotalComputador = 0
         //compra mais uma carta
         novaCartaComputador = comprarCarta()
         //adiciona uma carta no array do jogador que descreve a carta
         computerCartas.push(novaCartaComputador.texto)
         console.log(computerCartas)
     
         //insere o valor da nova carta no array do jogador
         totalComputer.push(novaCartaComputador.valor)
         for (let i = 0; i < totalComputer.length; i++) {
            novoTotalComputador = novoTotalComputador + totalComputer[i]
         }
         console.log("A pontuação do pc é: " + novoTotalComputador)
      }
   }



   if (!mensagemInicial && novoTotalJogador < 22) {
      novoTotalJogador = playerCarta1.valor + playerCarta2.valor
      alert("Sua pontuação é: " + novoTotalJogador)

      while ( novoTotalComputador < 22 ) {
         //zera a soma anterior
      novoTotalComputador = 0
      //compra mais uma carta
      novaCartaComputador = comprarCarta()
      //adiciona uma carta no array do jogador que descreve a carta
      computerCartas.push(novaCartaComputador.texto)
      console.log(computerCartas)
  
      //insere o valor da nova carta no array do jogador
      totalComputer.push(novaCartaComputador.valor)
      for (let i = 0; i < totalComputer.length; i++) {
         novoTotalComputador = novoTotalComputador + totalComputer[i]
      }
      console.log("A pontuação do pc foi: " + novoTotalComputador)
   }


   } else if (mensagemInicial && novoTotalJogador > 22) {
      alert("Estourou pontos. Sua pontuação foi: " + novoTotalJogador)
      novoTotalComputador = computerCarta1.valor + computerCarta2.valor
      console.log("A pontuação do pc éé: " + novoTotalComputador)
   } 






      //condicional para determinar quem ganhou o jogo
      if ( (novoTotalComputador > novoTotalJogador) && ( novoTotalComputador < 22 )) {
         alert("A sua pontuação foi: " + novoTotalJogador + " e a pontuação do computador foi: " + novoTotalComputador +  " O computador ganhou!!!")
      } else if ( (novoTotalJogador > novoTotalComputador) && ( novoTotalJogador < 22 )) {
         alert("A sua pontuação foi: " + novoTotalJogador + " e a pontuação do computador foi: " + novoTotalComputador +  "Parabéns! Você ganhou")
      } else if ( (novoTotalJogador > 22) && (novoTotalComputador < 22) )  {
         alert("A sua pontuação foi: " + novoTotalJogador + " e a pontuação do computador foi: " + novoTotalComputador +  "Computador ganhou!!")
      } else if ( (novoTotalComputador > 22) && (novoTotalJogador < 22) ) {
         alert("A sua pontuação foi: " + novoTotalJogador + " e a pontuação do computador foi: " + novoTotalComputador +  "Parabéns! Você ganhou!!")
      }

   } else {
      //caso o jogador tenha clicado em não continuar o jogo, irá aparecer esta mensagem
      console.log("O jogo acabou")
}
