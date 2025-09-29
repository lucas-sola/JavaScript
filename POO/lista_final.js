// EX1

// let ex1 = (string) => {
//     for (let i =0; i < string.length; i++)
//         if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
//             console.log(`Opa, temos uma volgal! ela é a vogal ${string[i]}`)
//         } else {
//             console.log(`Não temos vogal nessa letra, apenas ${string[i]}`)
//         }
// }

// console.log("Analisando a palavra escolhida...")
// ex1("abacaxi")

// EX2

// let ex2 = (num) => {
//     if (num < 0) {
//         return `Dá um número válido ne`
//     }
// let inicial1 = 0
// let inicial2 = 1

// let resultado = [inicial1]

// while (inicial2 <= num) {
//     resultado.push(inicial2)
//         let proximo = inicial1+inicial2
//         inicial1 = inicial2
//         inicial2 = proximo
//     }
//     return resultado
// }

// let sequencia34 = ex2(34)
// console.log(sequencia34)

// EX3

// Crie uma função que receba um array de números e retorne apenas os números primos.

// function filtro(lista, callback) {
//     for(let i = 0; i < lista.length; i++) {
//         if(callback(lista[i])) {
//             console.log(lista[i])
//         }
//     }
// }

// function primo(numero) {
//     if (2 > numero) {
//         return false
//     }
//     for(let i = 2; i < numero; i++) {
//         if(numero % i == 0) {
//             return false
//         } else {
//             return true
//         }
//     }
// }

// filtro([1,2,4,5,7,13,9,76, 7654], primo)

// EX 4 
// 4. Escreva uma função que receba uma string e retorne se ela é um palíndromo (mesmo de trás para frente).
// arrayTeste = []
// let ex4 = (string) => {
//     for(let i = 0; i < string.length; i++) {
//          arrayTeste.push(string[i])
//     }
//     if (string == arrayTeste) {

//     }
// }
// // EX 10

// class Cofrinho {
//     #moedas
//     #notas 
//     constructor(moedas, notas){
//         this.#moedas = moedas
//         this.#notas = notas
//     }
//     depositar(moedasD, notasD) {
//         if (moedasD <= 0 || notasD <= 0) {
//             return `Valor inválido, tente novamente!`
//         } else {
//             this.#moedas += moedasD
//             this.#notas += notasD
//         }
//     }
//     retirar(valor) {
//         if (valor > this.#moedas || valor > this.#notas || valor > this.#moedas && valor > this.#notas) {
//             return `Tentativa de saque inválido! saque de valor maior do que tem na conta!`
//         }
//     }

//     saldo() {
//         return `${this.#moedas} moedas e ${this.#notas} notas. No total, temos ${this.#moedas + this.#notas}` 
//     }
// }

// let porquin = new Cofrinho(100, 5)
// porquin.depositar(1, 101)
// console.log(porquin.saldo())

// EX 11

// class Banco{
//     #numero 
//     #titular
//     #saldo
//     constructor(numero, titular, saldo) {
//         this.#numero = numero
//         this.#titular = titular
//         this.#saldo = saldo
//     }
//     abrirConta(titular1, saldoInicial) {
//         this.titular1 = titular1
//         this.saldoInicial = saldoInicial
//         if (saldoInicial < 0) {
//             return `Coloque um valor inicial válido!`
//         } else {
//             return `Conta aberta com sucesso!`
//         }
//     }
//     consultarSaldo(numeroconta) {
//         if (numeroconta == this.#numero) {
//             return `${this.#saldo}`
//     } else {
//         return `Número de conta errado!`
//     }
// }
//     transferir(contaOrigem, contaDestino, valor) {
//         this.contaOrigem = contaOrigem
//         this.contaDestino = contaDestino
//         this.contaOrigem -= valor
//         this.contaDestino += valor
//         return `A conta de número ${this.contaOrigem} vai fazer uma transferência de ${valor} para a conta de número ${this.contaDestino}`
//     }
// }


// // EX 12
// class Pedido {
//     #nome
//     #valor
//     #quantidade
//     constructor(nome, valor, quantidade) {
//         this.#nome = nome
//         this.#valor = valor
//         this.#quantidade = quantidade
//     }
//     adicionarItem(valor) {
//         this.#valor += valor
//         return `O valor adicionado foi de ${valor}, o valor total agora é de ${this.#valor}`
//     }
//     removerItem(valor) {
//         if (valor > this.#quantidade) {
//             return `Tente retornar uma quantidade válida!`
//         } else {
//             return this.#quantidade += valor
//         }
//     }
//     calcularTotal() {
//         return this.#quantidade * this.#valor
//     }
// }

// EX 13

// class UsuarioSistema {
//     #login
//     #senha
//     constructor(login, senha) {
//         this.#login = login
//         this.#senha = senha
//     }
//     autenticar(login, senha) {
//         if(login != this.#login || senha != this.#senha) {
//             return `Login inválido, tente novamente.`
//         } else {
//             return `Login concluído! Bem vindo de volta!`
//         }
//     }
//     alterarSenha(senhaAntiga, senhaNova) {
//         if(senhaAntiga == this.#senha) {
//             this.#senha == senhaNova
//             return `Sua senha foi alterada com sucesso!`
//         } else {
//             return `Senha inválida, tente novamente.`
//         }
//     }
// }

// EX 14

