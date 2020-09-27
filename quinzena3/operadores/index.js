/**
 * Exercício 1) Irá imprimir de 1 a 
 * 
 * Exercício 2) 
 * a)Irá imprimir números acima de 18
 * b) Não, pois precisa colocar o comprimento do array, como mostrado no código abaixo:
 * const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero=0; numero < lista.length; numero++) {
  
		console.log(lista[numero])
}


Desafio 1) Imprime 4 linhas de *
 */
 
/**
 * Exercício 3
 * a) Imprime o array completo
 * const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    for (let i=0; i<array.length; i++) {
    console.log(array[i])
}

b) Imprime o array divido por 10
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i=0; i<array.length; i++) {
    console.log(array[i]/10)
}

c) Imprime em um novo array apenas os pares
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayPares = []
for (let i=0; i<array.length; i++) {
    if (array[i]%2==0) {
        arrayPares.push(array[i])
    }
}
console.log(arrayPares)

d)Imprime o index do array com seu respectivo valor
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayString = []
for (let i=0; i<array.length; i++) {
    let string = String(array[i])
    arrayString.push("o elemendo do index " + i + " é: " + string)
    }
console.log(arrayString)

e)Maior e menor número
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMinimo = 500
let valorMaximo = 0

for (let numero of array) {
    if(numero > valorMaximo) {
        valorMaximo = numero
    }
    if (numero < valorMinimo) {
        valorMinimo = numero  
    }
}
console.log(`O maior número é ${valorMaximo} e o valor mínimo é ${valorMinimo}`);
 */

 /**
  * Desafio 2
  * const numero = Number(prompt("Digite um número para outro jogador adivinhar: "))
let adivinhar = Number(prompt("Tente adivinhar o número do seu amigo"))
let i = 0

while (adivinhar != numero) {
    if (adivinhar < numero) {
        adivinhar = prompt(`O número chutado foi: ${adivinhar}, sendo menor do que deveria ser.`)
    } else if (adivinhar > numero) {
        adivinhar = prompt(`O número chutado foi: ${adivinhar}, sendo maior do que deveria ser.`)
    }
    i++
    } 

alert("Uauuu acertou, seus poderes de adivinhação são ótimos. Você fez " + i + " tentativas")


  */

/**
 * Desafio 3
 */


var aleatorio = Number(console.log(Math.floor(Math.random()*100)+1))
var adivinhar = Number(prompt("Tente adivinhar o número do seu amigo"))

console.log(typeof(aleatorio))
console.log(typeof(adivinhar))

if (aleatorio === adivinhar) {
    console.log("Voce acertou")
} else {
    console.log("Voce errou")
}

/*
let adivinhar = Number(prompt("Tente adivinhar o número do seu amigo"))
let i = 0

while (adivinhar != aleatorio) {
    if (adivinhar < aleatorio) {
        adivinhar = prompt(`O número chutado foi: ${adivinhar}, sendo menor do que deveria ser.`)
    } else if (adivinhar > aleatorio) {
        adivinhar = prompt(`O número chutado foi: ${adivinhar}, sendo maior do que deveria ser.`)
    }
    i++
    } 

alert("Uauuu acertou, seus poderes de adivinhação são ótimos. Você fez " + i + " tentativas")

*/