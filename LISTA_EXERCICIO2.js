
// // Callbacks


// // Funções recursivas

// // Crie uma função recursiva que exiba no console os números de 10 até 1 em ordem decrescente.

// // Funções assíncronas

// // Crie uma função assíncrona que aguarde 2 segundos e depois exiba no console: .
// // Crie uma função assíncrona que receba um número, aguarde 1 segundo e depois retorne o dobro desse número.
// // Crie uma função assíncrona que simule a consulta de um usuário em um sistema e exiba a mensagem: após 3 segundos.

// // setTimeout(() => {console.log("Executado após 3 segundos!")}, 3000)

// // EXERCÍCIO 1
// function ex1(a, b) {
//     return a + b

// }
// console.log("A soma dos seus 2 números é:", ex1(1, 2))

// // // EXERCÍCIO 2

// function ex2(a, b, c) {
//     let media = (a + b + c) / 3 
//     return media
// }

// console.log("A sua média é: ", ex2(7,7,7))

// // EXERCÍCIO 3

// const base = function(a, b) {
//     return a * b
// }
// let resultado = base(8, 6)

// console.log("A base do seu triângulo é de:", resultado)

// EXERCÍCIO 4

// const ex4 = function(a) {
//     if (a % 2 == 0){
//         return(`o número ${a} É par!`)
//     } else {
//        return(`o número ${a} é ímpar!`)
//     }
// }

// console.log(ex4(4))

// EXERCÍCIO 5
// const ex5 = (a, b) => {
//   if (a > b) {
//     return (`O número ${a} é maior que o número ${b}`);
//   } else {
//     return (`O número ${b} é maior que o número ${a}`);
//   }
// }

// console.log(ex5(1, 7))

// // EXERCÍCIO 6
// // Crie uma arrow function que receba um array de números e retorne apenas os números pares.

// let numero = null
// const ex6 = (array) => {
//     const numeropar = []
//     for(let i = 0; i < array.length; i++) {
//     let numero = array[i];
//     if (numero % 2 == 0) {
//         numeropar.push(numero)
//     }
// }
// return numeropar

// }
// const lista = [65, 22, 34, 57, 88, 90, 13]
// const pares = ex6(lista)
// console.log(`Os números pares são: ${pares}`)

// // // EXERCÍCIO 7

// (function() {
//   console.log("Esta função foi executada imediatamente!")
// })();

// // EXERCÍCIO 8 

// (function(a) {
//   console.log(a * a)
//   }) (5)

// // EXERCÍCIO 9 


// const mensagem = (nome) => {
//   console.log(`Bem-vindo, ${nome}!`)
// }

// const preparar = (nome, callback) => {
//   const nomeTratado = nome
//   callback(nomeTratado)
// }

// preparar("Marcos", mensagem)

// // EXERCÍCIO 10

// const dobrar = (numero) => {
//   return numero * 2
// };

// const listaDeNumeros = [1, 5, 10, 15, 20]
// const arrayComDobro = listaDeNumeros.map(dobrar)
// console.log(arrayComDobro)

// fiz essa sem callback pq achei interessante esse comando "map", que faz uma nova lista sem alterar a original


 // RECURSIVA


// function descrescente(a) {
//     if (a < 1){
//         return 1
//     }
//     console.log(a)
//     descrescente(a-1)
// }
// descrescente(10)

// ASSINCRONAS 1

// console.log("Iniciando o programa...");
// setTimeout(() => {console.log("Esta mensagem foi exibida após 3 segundos!"); }, 3000);
// console.log("O programa já terminou de executar suas tarefas síncronas.");

// // ASSINCRONAS 2

// const numero_2 = 15;
// console.log(`Agendando o cálculo para o número ${numero_2}...`);

// setTimeout(() => {
//   const resultado = numero_2 * 2;
//   console.log(`O resultado é ${resultado}.`);
// }, 1000);

// // ASSINCRONAS 3


// const idUsuario = 123;
// console.log(`Simulando consulta para o usuário ${idUsuario}...`);

// setTimeout(() => {
//   console.log(`Usuário ${idUsuario} encontrado!`);
// }, 3000);