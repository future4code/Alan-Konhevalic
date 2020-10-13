/**
 * Exercício de interpretação de código:
 * 
 * 1)A função recebe um valor, emite um alert para o usuario digitar a cotação, e retorna o valor em reais.
 * 
 * 2)A função recebe dois parametros, um para o tipo de investimento, e o valor a ser investido. Com isso, é feito condicionais
 *   para multiplicar o valor a ser investido conforme o tipo de investimento. para novoMontante, será R$150 multiplicado por 1.1, por exemplo
 * 
 * 3) O código adiciona no array1 os números pares e no array2 os numeros impares do array "numeros"
 * 
 * 4)O código irá analisar os valores do array "numeros" e irá percorrer cada elemento. Irá imprimir na variavel numero1 o o menor valor do array
 *   e na variavel numero2 irá imprimir o maior valor do array
 */


/**
 * Exercícios de lógica de programação
 * 
 * 1)
 * let array = [10, 20, 30, 40, 50]
primeira forma:
for (let i=0; i< array.length; i++) {
    console.log(array[i])
}

segunda forma:
for (let numero in array) {
    console.log(array[numero])
}

terceira forma:
let numeros = 0
while (numeros < array.length) {
    numeros++
    console.log(array[numeros])
}
 * 
 * 
 * 2) a) false
 * 2) b) true
 * 2) c) true
 * 2) d) true
 * 2) e) false
 * 
 * 
 * 3) Não funciona pois não está incrementando a variável i. Adicionando uma linha para incremento, o código funciona.
 *    
 * 
 * const quantidadeDeNumerosPares = 5
let i = 0
while(i < quantidadeDeNumerosPares) {
    i++
  console.log(i*2)
}

 * 
 * 4) 
 * 
 * const a = 10
const b = 10
const c = 10

if ( (a==b && b==c && a==c)) {
    console.log("O triangulo é equilatero")
} else if ( (a==b || b==c || a==c) ) {
    console.log("O triângulo é isosceles.")
} else if ( (a!=b && b!=c && a!=c) ) {
    console.log("O triângulo é escaleno")
}
 * 
 * 5) 
 * 
 * 
 */

const primeiroNumero = 15
const segundoNumero = 30

if (primeiroNumero > segundoNumero) {
    console.log("O maior é: " + primeiroNumero)
} else {
    console.log("O maior é: " + segundoNumero)
}

if (primeiroNumero%segundoNumero ==0 ) {
    console.log(primeiroNumero + " é divisível por " + segundoNumero)
} else {
    console.log(primeiroNumero + " não é divisível por " + segundoNumero)
}

if (segundoNumero%primeiroNumero == 0) {
    console.log(segundoNumero + " é divisível por " + primeiroNumero)
} else {
    console.log(segundoNumero + " não é divisível por " + primeiroNumero)
}

let diferenca = 0
if (primeiroNumero > segundoNumero) {
    diferenca = primeiroNumero - segundoNumero
    console.log("A diferença entre eles é: " + diferenca)
} else {
    diferenca = segundoNumero - primeiroNumero
    console.log("A diferença entre eles é: " + diferenca)
}
