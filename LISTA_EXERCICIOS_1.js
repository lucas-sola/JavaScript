// // EM ORDEM CONFORME O QUE FOI PEDIDO NO CLASSROOM

// // EXERCICIO 1

// let num1 = 3
// let num2 = 5;
// let resultado = num1 + num2;
// console.log("A soma de", num1, "e", num2, "é:", resultado);


// // EXERCICIO 2

// let base = 4;
// let altura = 6;
// let area = base * altura;
// console.log("A área do retângulo é:", area);


// // EXERCICIO 3

// let Graus = 30;
// let fahrenheit = (Graus * 9/5) + 32;
// console.log(Graus, "graus Celsius é equivalente a ", fahrenheit, "graus Fahrenheit");

// // EXERCICIO 4

// let numero1 = 10;
// let numero2 = 2;
// let numero3 = 5;
// let media = (numero1 + numero2 + numero3) / 3;
// console.log("A média dos números é:", media);

// // EXERCICIO 5

// let numero4 = 8;
// let numero5 = 12;
// console.log("A multiplicação de", numero4, "e", numero5, "é:", numero4 * numero5);



// // ------------------------------------------------------------------------ //

// //EXERCÍCIO 1 

// let num = 8
// if (num >0) {
//     console.log("O número é positivo");
// } else if (num < 0) {
//     console.log("O número é negativo");
// } else {
//     console.log("O número é zero");
// }

// // EXERCÍCIO 2

// idade = 18;

// if (idade >= 18) {
//     console.log("Você é maior de idade");
// } else {
//     console.log("Você é menor de idade");
// }

// // EXERCÍCIO 3

// let num1_2 = 1
// if (num1_2 % 2 == 0) {
//     console.log("O número é par");
// } else {
//     console.log("O número é ímpar");
// }

// // EXERCÍCIO 4

// let nota = 7;
// let nota2 = 10;

// if (nota >= 7) {
//     console.log("aprovado");
// } else  {
//     console.log("reprovado");
// }

// // EXERCÍCIO 5
 
// let numero1_2 = 2
// let numero2_2 = 6
// let numero3_2 = 28

// if (numero1_2 > numero2_2 && numero1 > numero3_2) {
//     console.log(numero1_2, "É o maior número");
// } else if (numero2_2 > numero3_2) {
//     console.log(numero2_2, "É o maior número")
// }
//   else {
//     console.log(numero3_2, "É o maior número") }



// // ------------------------------------------------------------------------ //
// // EXERCÍCIO 1

// let simular = 11

// if (simular < 12) {
//     console.log("Criança")
// }
// else if (simular >= 12 && simular < 18) {
//     console.log("Adolescente")
// }
// else if (simular > 17 && simular < 59 ) {
//     console.log("Adulto") }
// else ; {
//     console.log("Idoso") }

// // EXERCÍCIO 2

// let ano = 2025

// if (ano / 4 == 0 && ano % 100 != 0 | ano % 400 == 0) {
//     console.log("Bissexto")
// } 
// else {
//     console.log("Não é bissexto")
// }

// // EXERCÍCIO 3 

// let numerro1 = 5
// let numerro2 = 2
// let operacao = "+";
// switch (operacao) {
//     case "+":
//         console.log("Você selecionou soma, o resultado é:", numerro1 + numerro2 );
//         break;
//     case "-":
//         console.log("Você selecionou subtração, o resultado é:", numerro1 - numerro2);
//         break;
//     case "*":
//         console.log("Você selecionou multiplicação, o resultado é:", numerro1 * numerro2);
//         break;
//     case "/":
//         console.log("Você selecionou divisão, o resultado é:", numerro1 / numerro2);
//         break;
//         default:
//             console.log("Seleção inválida, o resultado é:");
// }

// // EXERCÍCIO 4

// let dia = 5;
// switch (dia) {
//     case 1:
//         console.log("Segunda-feira");
//         break;
//     case 2:
//         console.log("Terça-feira");
//         break;
//     case 3:
//         console.log("Quarta-feira");
//         break;
//     case 4:
//         console.log("Quinta-feira");
//         break;
//     case 5:
//         console.log("Sexta-feira");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//     console.log("Dia inválido");
//         }

// // EXERCÍCIO 5

// let numeroex = 5;
// switch (numeroex) { 
//     case 1:
//         console.log("A sua nota foi: F");
//         break;
//     case 2:
//         console.log("A sua nota foi: F");
//         break;
//     case 3:
//         console.log("A sua nota foi: D");
//         break;
//     case 4:
//         console.log("A sua nota foi: D");
//         break;
//     case 5:
//         console.log("A sua nota foi: C");
//         break;
//     case 6:
//         console.log("A sua nota foi: C");
//         break;
//     case 7:
//         console.log("A sua nota foi: B");
//         break;
//     case 8:
//         console.log("A sua nota foi: B");
//         break;
//     case 9: 
//         console.log("A sua nota foi: A");
//         break;
//     case 10:
//         console.log("A sua nota foi: A");
//         break;
//     default:
//     console.log("Número inválido");
//         }

// // ------------------------------------------------------------------------ //
// // EXERCÍCIO 1

// for (let i=1; i < 11; i++)
//     console.log(i)

// // // EXERCÍCIO 2

// let soma = 0 
// for (let i = 0; i < 101; i++)
//     soma += i
//     console.log(soma)


// // // EXERCÍCIO 3

// const numero = 9
// for (let i = 1; i <= 10; i++) 
//   console.log(`${numero} x ${i} = ${numero * i}`);

// // // EXERCÍCIO 4 

// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }
// // EXERCÍCIO 5

// for (x = 0; x < 51; x++) {
//     if (x % 2 == 0){ 
//         console.log("O número", x, "é par!"); }
//     else console.log("O número", x, "é ímpar!")
// }

// // EXERCÍCIO 6

// const numerro =  6
// let fatorial = 1

// for (let i = numerro; i >= 1; i --){
//     fatorial = fatorial * i
// }
// console.log("O fatorial de", numerro, "é aproximadamente", fatorial)
// // ------------------------------------------------------------------------ //
// // EXERCÍCIO 1

// // let lista1 = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"]
// // for(i = 0; i < 6; i++); {
// //     lista1.forEach(pr => console.log(pr))
// // }

// let lista1 = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"]
// for(i = 0; i <= 4; i++) {
//     console.log(lista1[i])
// }

// // EXERCÍCIO 2

// let lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < lista2.length; i++) {
//     let numeroAtual = lista2[i];
//     if (numeroAtual % 2 == 0 ) {
//         console.log(numeroAtual)
//     }
// }

// // EXERCÍCIO 3

// // let soma = 0
// // let lista3 = [1,2,3,4,5,6,7,8,9,10] 
// // for (let i = 0; i < lista3.lenght; i++) {
// //     soma = soma + lista3 [i]
// // }
// // console.log(soma)
// let lista3 = [10, 5, 20, 15, 30];

// let soma1 = 0;

// for (let i = 0; i < lista3.length; i++) {
//   soma1 += lista3[i]; 
// }
// console.log("A soma total é:", soma1);

// // EXERCÍCIO 4

// let lista4 = [5, 50, 1, 100, 25];

// lista4.sort((a, b) => b - a);

// console.log(lista4[0]);

// // EXERCÍCIO 5

// let lista5 = ["Laranja", "Pera", "Maçã", "Abacate",] 
// console.log(lista5.includes("Maçã"))

// EXERCÍCIO 6

let lista6 = [1,2,4,6,6,4,1,26,7,9,86,23,6,8]
console.log(lista6)
lista6.push(15)
console.log(lista6)

// EXERCÍCIO 7

// let lista7= [1,2,512,634,3,37,473,,234,67,62,5135]
// console.log(lista7)
// lista7.pop();
// console.log(lista7)


// ------------------------------------------------------------------------ //



// // DESAFIO
// const totalCabecas = 20;
// const totalPatas = 44;

// function encontrarAnimais (totalCabecas, totalPatas) {

// for (let numGalinhas = 0; numGalinhas <= totalCabecas; numGalinhas++) {
//     let numPorcos = totalCabecas - numGalinhas;
//     let patasCalculadas = (numGalinhas * 2) + (numPorcos * 4);
//     if (patasCalculadas === totalPatas) {
//       return {
//         galinhas: numGalinhas,
//         porcos: numPorcos
//       };
//     }
//   }

//   return "Os dados informados não correspondem a uma combinação válida de animais.";
// }

// const resultado1 = encontrarAnimais(totalCabecas, totalPatas);

// if (typeof resultado1 === 'string') {
//   console.log(resultado1);
// } else {
//   console.log(`No cercado existem:`);
//   console.log(`- ${resultado1.galinhas} galinhas`);
//   console.log(`- ${resultado1.porcos} porcos`); }