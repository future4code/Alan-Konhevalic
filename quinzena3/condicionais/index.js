/**
 * Exercício 1:
 * Aparece uma janela para o usuario para digitar um número. Após isso, ele converte o valor para tipo Number.
 * Se o número for par, ele imprime "passou no teste". Se for ímpar, imprime "Não passou no teste".
 */

 /**
  * Exercício 2:
  * a) Serve para imprimir o preço de uma fruta conforme a escolha do usuario.
  * b) O preço da fruta Maçã é R$2.25
  * c) Não acontece a pausa do código após a escolha da fruta, então acaba-se imprimindo o valor padrão 
  */

/**
 * Exercício 3)
 * a) Mostrando uma janela para o usuario e convertendo o valor que ele digitar para o tipo Number
 * b)Esse número passou no teste. Se fosse -10, daria erro no console.
 * c) Não é impresso a variavel "mensagem", pois ela está dentro do escopo de uma função, e o comando para imprimir o conteúdo dela está fora.
 */


/**
 * Exercício 4
let idade = Number(prompt("Digite sua idade: "))

 if (idade >=18) {
     console.log("Você pode dirigir")
 } else {
     console.log("Você não pode dirigir.")
 }


 */

 /**
  * Exercício 5
let turno = prompt("Em qual turno você estuda? Digite M para Manhã, V para Vespertino e N para Noturno:")

 if (turno == ("M" && 'm') ) {
     console.log("Bom dia")
 } else if (turno == ("V" && 'v') ) {
    console.log("Boa tarde")
} else if (turno == ("N" && 'n')) {
    console.log("Boa noite")
} else {
    console.log("Oops, parece que você digitou algo errado")
}

  */

/**
 * Exercício 6
 let turno = prompt("Em qual turno você estuda? Digite M para Manhã, V para Vespertino e N para Noturno:")
let frase
switch (turno) {
    case "M":
        frase = "Bom dia"
        break
    case "m":
        frase = "Bom dia"
        break
    case "V":
        frase = "Boa tarde"
        break
    case "v":
            frase = "Boa tarde"
            break
    case "N":
        frase = "Boa noite"
        break
    case "n":
            frase = "Boa noite"
            break
    default:
        frase = "Oops, parece que você digitou algo errado"
}

console.log(frase)
 */


 /**
  * Exercicio 7
let filme = prompt("Qual o gênero do filme?")
let ingresso = Number(prompt("Qual o valor do ingresso?"))

if ( (filme=="Fantasia") && (ingresso<15)) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
  */


  /**
   * Desafio 1
    let filme = prompt("Qual o gênero do filme?")
  let ingresso = Number(prompt("Qual o valor do ingresso?"))
  let snack = prompt("Qual snack vocÊ irá comprar para acompanhar o filme?")
  
  if ( (filme=="Fantasia") && (ingresso<15)) {
      console.log("Bom filme! com " + snack)
  } else {
      console.log("Escolha outro filme :(" )
  }

   */


   /**
    * Desafio 2
    */

let nome = prompt("Qual seu nome?")
let jogo = prompt("Tipo de jogo: Nacional ou Internacional?")
let etapa = prompt("Qual a etapa do jogo: SF, DT ou FI?")
let categoria = Number(prompt("Qual a categoria: 1, 2, 3 ou 4?"))
let quantidade = Number(prompt("Quantidade de ingressos você deseja comprar?"))
let valor
let total 

if (jogo === "Nacional") {
    if (categoria === 1) {
        switch (etapa) {
            case "SF":
                valor = 1320
                break;
            case "DT":
                valor = 660
                break;
            case "FI":
                valor = 1980
                break;
            default:
                break;
        }
    } else if (categoria === 2) {
            switch (etapa) {
                case "SF":
                    valor = 880
                    break;
                case "DT":
                    valor = 440
                    break;
                case "FI":
                    valor = 1320
                    break;
                default:
                    break;
            }
    } else if (categoria === 3) {
        switch (etapa) {
            case "SF":
                valor = 550
                break;
            case "DT":
                valor = 330
                break;
            case "FI":
                valor = 880
                break;
            default:
                break;
        }
    } else if (categoria === 4) {
        switch (etapa) {
            case "SF":
                valor = 220
                break;
            case "DT":
                valor = 170
                break;
            case "FI":
                valor = 330
                break;
            default:
                break;
        }
    }
} else {
    if (categoria === 1) {
        switch (etapa) {
            case "SF":
                valor = 1320*4,1
                break;
            case "DT":
                valor = 660 *4,1
                break;
            case "FI":
                valor = 1980*4,1
                break;
            default:
                break;
        }
    } else if (categoria === 2) {
            switch (etapa) {
                case "SF":
                    valor = 880*4,1
                    break;
                case "DT":
                    valor = 440*4,1
                    break;
                case "FI":
                    valor = 1320*4,1
                    break;
                default:
                    break;
            }
    } else if (categoria === 3) {
        switch (etapa) {
            case "SF":
                valor = 550*4,1
                break;
            case "DT":
                valor = 330*4,1
                break;
            case "FI":
                valor = 880*4,1
                break;
            default:
                break;
        }
    } else if (categoria === 4) {
        switch (etapa) {
            case "SF":
                valor = 220*4,1
                break;
            case "DT":
                valor = 170*4,1
                break;
            case "FI":
                valor = 330*4,1
                break;
            default:
                break;
        }
    }
}

total = quantidade * valor


console.log("---Dados da Compra---")
console.log("Nome do cliente: ", nome)
console.log("Tipo de jogo: ", jogo)
console.log("Etapa do jogo: ", etapa)
console.log("Categoria: ", categoria)
console.log("Quantidade de ingressos: ", quantidade)
console.log("---Valores---")
console.log("Valor do ingresso: ", valor)
console.log("Valor total: ", total)


