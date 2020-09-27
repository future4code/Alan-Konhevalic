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


// console.log("Bem vindo ao jogo de Blackjack!")



// //verificando se o usuario quer iniciar uma nova partida
// if (confirm("Quer iniciar uma nova partida?")) {

//    //caso o jogador tenha optado por jogar, o jogo acontecerá nessa condição
//    console.log("Iniciando uma nova rodada")

//    //sorteando 2 cartas para o jogador e somando seus valores
//    let playerCarta1 = comprarCarta()
//    let playerCarta2 = comprarCarta()
//    let totalPlayer = playerCarta1.valor + playerCarta2.valor

//    //imprimindo as cartas sorteadas para o jogador com a soma dos valores
//    console.log("Usuário - cartas: " + playerCarta1.texto + ' ' + playerCarta2.texto + ' ' + "pontuação: " + totalPlayer)
      
//    //sorteando 2 cartas para o computador e somando seus valores
//    let computerCarta1 = comprarCarta()
//    let computerCarta2 = comprarCarta()
//    let totalComputer = computerCarta1.valor + computerCarta2.valor

//    //imprimindo as cartas sorteadas para o computador com a soma dos valores
//    console.log("Computador - cartas: " + computerCarta1.texto + ' ' + computerCarta2.texto + ' ' + "pontuação: " + totalComputer)
      
//    //condicional para determinar quem ganhou o jogo
//    if (totalComputer > totalPlayer) {
//       console.log("O computador ganhou!!!")
//    } else if (totalPlayer > totalComputer) {
//       console.log("Parabéns! Você ganhou")
//    } else {
//       console.log("Empate")
//    }
   
// } else {
//    //caso o jogador tenha clicado em não continuar o jogo, irá aparecer esta mensagem
//    console.log("O jogo acabou")
// }

