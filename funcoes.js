"use strict"
//classic function

// function soma (a,b){
//     return a + b;
// }

//chamar a função
// soma (4,9);

//anonymous ou expression function
// const soma = function (a,b){
//     return a + b;
// }
// soma (3,5);

//arrow function
// const soma = (a,b) => {
//     return a + b;
// }

//outro jeito da função passada
// const soma = (a,b) => a + b;

//quando se recebe apenas uma variavel não necessita de parenteses
// const quadrado = numero => numero * numero;

//EXERCICIO1
const numeros = [3,12,81,13,20,17]
    // for(var i = 0;i < numeros.length ; i++){
    //     numeros[i] = numeros[i] + 100;
    //     console.log(numeros[i])
    // }

//Outra alternativa do EXERCICIO1
const adicionar100 = (numeros) => numeros + 100;
const numeros100 = numeros.map(adicionar100);
console.log(numeros100)

//EXERCICIO2
//    const buscarPares = (value) => {if(value %2 == 0)
//    return value;
//    }
// var numerosPares = numeros.filter(buscarPares);
// console.log(numerosPares);

//Outra alternativa do EXERCICIO2
const buscarPares = (numero) => numero%2 ==0;
const numerosPares = numeros.filter(buscarPares)
console.log(numerosPares);

//EXERCICIO3
// var total = 0;
//     for(var i = 0;i < numeros.length ; i++){
//         total  += numeros[i];
//     }
// console.log(total)

//Outra alternativa do EXERCICIO3

const somar = (a,b) => a+b
const total = numeros.reduce(somar, 0)
console.log(total)

//EXERCICIO4
const quadrado = (num) => num **2
const numerosQuadrado = numeros.map(quadrado)
console.log(numerosQuadrado)

//EXERCICIO5
const eMenorQue20 = (num) => num<20
const numerosMenoresque20 = numeros.filter(eMenorQue20)
console.log(numerosMenoresque20)

//EXERCICIO6
const calculo = numeros.filter(eMenorQue20).map(quadrado).reduce(somar)
console.log(calculo)

//EXERCICIO7
const desconto20 = (numero) => numero * 0.8
const desconto = numeros.map(desconto20)
console.log(desconto)

//EXERCICIO8
const eImpares = (num) => num%2 != 0;
const resultado = numeros.filter(eImpares).map(desconto20)
console.log(resultado)