// // var ola_pessoal = "Olá, pessoal!";
// // var ola_pessoal = "Olá, pessoal2!";
// // console.log(ola_pessoal);
// // while (true) {
// //     console.log("Loop infinito");
// // }

// // let ola_pessoal = "Olá, pessoal!";
// // ola_pessoal = "Olá, pessoal2!";
// // console.log(ola_pessoal);
// // const ola_pessoal = "Olá, pessoal!";
// // // ola_pessoal = "Olá, pessoal2!"; // Isso causará um erro, pois 'const' não permite reatribuição
// // console.log(ola_pessoal);

// // let texto = "Olá, pessoal!"; String
// // let numero = 42; Number
// // let booleano = true; Boolean
// // let nulo = null; Null
// // let indefinido; // Undefined


// function saudacao(nome) {
//     return `Olá, ${nome}!`;
//     }
// console.log(saudacao("João"));

// let lista = ["Maçã", "Banana", "Laranja"];
// console.log(lista[1])

// let pessoa = {
//     nome: "Maria",
//     idade: 30,
//     cidade: "São Paulo"
// };
// console.log(pessoa.idade);

// if (pessoa.idade >= 18) {
//     console.log("É maior de idade");
// } else {
//     console.log("É menor de idade");
// }

// let nota = 85

// if (nota >= 90) {
//     console.log("A");
// } else if (nota >= 80) {
//     console.log("B");
// }   else {
//     console.log("Reprovado");
// }

// if (a != b) {
//     console.log("a é diferente de b");
// } else {
//     console.log("a é igual a b");
// }
// let idade = 15;
// let mensagem = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade";
// console.log(mensagem);

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

// for (let i = 0; i < 1990; i++) {
//     console.log(`Contagem: ${i}`);
// }

// let nomes = ["Pedro", "Maria", "João", "Ana"];

// for (i = 0; i <= 3; i++) {
//     console.log(nomes[i]);
// }

// let numeros = [1, 2, 3, 4];
// numeros.forEach(num => console.log(num))

// while (true) {
//     console.log("penerar alguem")
//     let nome = prompt("Digite seu nome:");
//     if (nome == "sair") { 
//         break; 
//     }
//     else {
//         console.log(`Olá, ${nome}!`);
//     }
// }

let lista = ["Maçã", "Banana", "Laranja"];
console.log(lista[0]);

lista.push("Uva"); // Adiciona "Uva" ao final da lista
lista.pop(); // Remove o último elemento da lista
lista.unshift("Pera"); // Adiciona "Pera" ao início da lista
lista.shift(); // Remove o primeiro elemento da lista

console.log(lista.includes("Banana")); // Verifica se "Banana" está na lista
console.log(lista.indexOf("Laranja")); // Retorna o índice de "Laranja" na lista
console.log(lista.length); // Exibe o tamanho da lista

console.log(lista)