/**
 * Exercício 1)
 * 
 * a) Será impresso 10, e depois será impresso 50
 * 
 * b)Aconteceria a mesma coisa
 */

 /**
  * Exercício 2)
  * 
  * a) Darvas, Goli, Joao
  * 
  * b)Imprimiria Amanda, Caio, null
  *  */


/**
 * Exercicio 3)
 * 
 * O usuario insere um array e devolve um array só com os números pares elevado ao quadrado.
 * 
 * const arrayDeNumerosParesAoQuadrado
 */


/**
 * Exercíco 4a)
 * function apresentacao() {
     console.log("Eu sou Alan, tenho 23 anos, moro em Curitiba e sou estudante.")
 }

 apresentacao()
 */

 /**
  * Exercício 4b)
  
 function apresentacaoComParametros(nome='', 
                                    idade=0, 
                                    cidade='', 
                                    estudante=true) {
    if (estudante == true) {
        estudante = "sou"
    } else {
        estudante = "não sou"
    }
     console.log("Eu sou " + nome + ", tenho " + idade + ", moro em " + cidade + ", e " + estudante + " estudante")
 }
 
 apresentacaoComParametros("Alan", 23, "Curitiba", true)

  */

/**
 * Exercício 5a)

 function somar(a, b) {
    return a + b
}

let soma = somar(3,12)

console.log(soma)

 */

/**
 * Exercício 5b)
 function compararNumeros(a, b) {
    return (a>b==true || a==b==true)
}


console.log(compararNumeros(2,3))
 */

/**
 * Exercício 5c)
 
 function imprimir10Vezes(palavra){
    for(let i=0; i<10; i++){
        console.log(palavra)
    }
}

imprimir10Vezes("Olá, essa string será impressa 10x")

 */

/**
 * Exercicio 6a)
 const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let quantidadeDeElementos = () => {
    console.log( array.length)
}

quantidadeDeElementos(array)
 */

 /**
  * Exercicio 6b)
  const retornaPar = (par) => {
    return (par%2==0 == true)
}

console.log(retornaPar(6))
  */

/**
 * Exercício 6c)


let arrayDePares = (array) => {
    for (let i=0; i<array.length; i++) {
        if(array[i]%2==0){
            let novoArray = []
            novoArray.push(array[i])
        }
    }
    console.log(novoArray.length)
}

arrayDePares([2,4,6,8,10,11,12,13,14])

 */


/**
 * Exercíco 6d)

const retornaPar = (par) => {
    return par%2==0 == true 
}

function arrayDePares(array) {
    let novoArray = []
    for (let i=0; i<array.length; i++) {
           if(retornaPar([i])){
               novoArray.push(array[i])
           }
        }
    console.log(novoArray.length)
    }

arrayDePares([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
 */


