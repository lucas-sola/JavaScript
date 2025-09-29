
// Funções assíncronas

// Crie uma função assíncrona que aguarde 2 segundos e depois exiba no console: .
// Crie uma função assíncrona que receba um número, aguarde 1 segundo e depois retorne o dobro desse número.
// Crie uma função assíncrona que simule a consulta de um usuário em um sistema e exiba a mensagem: após 3 segundos.

// setTimeout(() => {console.log("Executado após 3 segundos!")}, 3000)

function descrescente(a) {
    if (a < 1){
        return
    }
    console.log(a)
    descrescente(a-1)
}
descrescente(10)

// ASSINCRONAS 1

console.log("Iniciando o programa...");
setTimeout(() => {console.log("Esta mensagem foi exibida após 3 segundos!"); }, 3000);
console.log("O programa já terminou de executar suas tarefas síncronas.");

// QUESTO 2

const numero = 15;
console.log(`Agendando o cálculo para o número ${numero}...`);

setTimeout(() => {
  const resultado = numero * 2;
  console.log(`O resultado é ${resultado}.`);
}, 1000);

// QUESTAO 3


const idUsuario = 123;
console.log(`Simulando consulta para o usuário ${idUsuario}...`);

setTimeout(() => {
  console.log(`Usuário ${idUsuario} encontrado!`);
}, 3000);