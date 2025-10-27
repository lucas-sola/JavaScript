// // EX1

// // let ex1 = (string) => {
// //     for (let i =0; i < string.length; i++)
// //         if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
// //             console.log(`Opa, temos uma volgal! ela é a vogal ${string[i]}`)
// //         } else {
// //             console.log(`Não temos vogal nessa letra, apenas ${string[i]}`)
// //         }
// // }

// // console.log("Analisando a palavra escolhida...")
// // ex1("abacaxi")

// // EX2

// // let ex2 = (num) => {
// //     if (num < 0) {
// //         return `Dá um número válido ne`
// //     }
// // let inicial1 = 0
// // let inicial2 = 1

// // let resultado = [inicial1]

// // while (inicial2 <= num) {
// //     resultado.push(inicial2)
// //         let proximo = inicial1+inicial2
// //         inicial1 = inicial2
// //         inicial2 = proximo
// //     }
// //     return resultado
// // }

// // let sequencia34 = ex2(34)
// // console.log(sequencia34)

// // EX3

// // Crie uma função que receba um array de números e retorne apenas os números primos.

// // function filtro(lista, callback) {
// //     for(let i = 0; i < lista.length; i++) {
// //         if(callback(lista[i])) {
// //             console.log(lista[i])
// //         }
// //     }
// // }

// // function primo(numero) {
// //     if (2 > numero) {
// //         return false
// //     }
// //     for(let i = 2; i < numero; i++) {
// //         if(numero % i == 0) {
// //             return false
// //         } else {
// //             return true
// //         }
// //     }
// // }

// // filtro([1,2,4,5,7,13,9,76, 7654], primo)

// // EX 4 
// // 4. Escreva uma função que receba uma string e retorne se ela é um palíndromo (mesmo de trás para frente).
// // arrayTeste = []
// // let ex4 = (string) => {
// //     for(let i = 0; i < string.length; i++) {
// //          arrayTeste.push(string[i])
// //     }
// //     if (string == arrayTeste) {

// //     }
// // }

// EX 5

// class Produto {
//     constructor(nome, preco, estoque) {
//         this.nome = nome
//         this.preco = preco
//         this.estoque = estoque
//     }

//     vender(quantidade) {
//         if (quantidade > this.estoque) {
//             console.log(`Estoque insuficiente! Temos apenas ${this.estoque} unidades.`)
//             return false
//         }
//         this.estoque -= quantidade
//         console.log(`Vendido ${quantidade} ${this.nome}(s). Estoque atual: ${this.estoque}`)
//         return true
//     }
// }


// let produto1 = new Produto("Notebook", 3500, 10)
// produto1.vender(3)
// produto1.vender(8)

// // EX 6

// class ContaEnergia {
//     constructor(consumoKwh, valorPorKwh) {
//         this.consumoKwh = consumoKwh
//         this.valorPorKwh = valorPorKwh
//     }

//     calcularTotal() {
//         const total = this.consumoKwh * this.valorPorKwh
//         console.log(`Consumo: ${this.consumoKwh} kWh`)
//         console.log(`Valor por kWh: R\$${this.valorPorKwh.toFixed(2)}`)
//         console.log(`Valor total da conta: R\$${total.toFixed(2)}`)
//         return total
//     }
// }


// let conta = new ContaEnergia(150, 0.85)
// conta.calcularTotal()

// // EX 7 

// class Aluno {
//     constructor(nome, nota1, nota2, nota3) {
//         this.nome = nome;
//         this.notas = [nota1, nota2, nota3];
//     }

//     media() {
//         const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
//         return soma / this.notas.length;
//     }

//     aprovado() {
//         const mediaFinal = this.media()
//         console.log(`Aluno: ${this.nome}`)
//         console.log(`Média: ${mediaFinal.toFixed(2)}`)
//         if (mediaFinal >= 7) {
//             console.log("Situação: APROVADO")
//             return true
//         } else {
//             console.log("Situação: REPROVADO")
//             return false
//         }
//     }
// }


// let aluno1 = new Aluno("João", 8, 7, 9)
// aluno1.aprovado()

// let aluno2 = new Aluno("Maria", 5, 6, 7)
// aluno2.aprovado()

// // EX 8

// class Cinema {
//     constructor(nome, capacidade) {
//         this.nome = nome
//         this.capacidade = capacidade
//         this.ingressosVendidos = 0
//     }

//     venderIngresso(qtd) {
//         const lugaresDisponiveis = this.capacidade - this.ingressosVendidos
        
//         if (qtd > lugaresDisponiveis) {
//             console.log(`Venda não realizada! Apenas ${lugaresDisponiveis} ingressos disponíveis.`)
//             return false
//         }
        
//         this.ingressosVendidos += qtd
//         console.log(`Vendidos ${qtd} ingresso(s) no ${this.nome}`)
//         console.log(`Total de ingressos vendidos: ${this.ingressosVendidos}/${this.capacidade}`)
//         return true
//     }

//     exibirDisponibilidade() {
//         const disponiveis = this.capacidade - this.ingressosVendidos
//         console.log(`${this.nome}: ${disponiveis} lugares disponíveis`)
//     }
// }


// let cinema = new Cinema("CineMax", 100)
// cinema.venderIngresso(30)
// cinema.venderIngresso(50)
// cinema.venderIngresso(25)
// cinema.exibirDisponibilidade()

// // EX 9 

// class Biblioteca {
//     constructor(nome) {
//         this.nome = nome
//         this.livros = []
//     }

//     adicionarLivro(livro) {
//         this.livros.push(livro)
//         console.log(`Livro "${livro}" adicionado à biblioteca ${this.nome}`)
//     }

//     removerLivro(livro) {
//         const index = this.livros.indexOf(livro)
//         if (index !== -1) {
//             this.livros.splice(index, 1)
//             console.log(`Livro "${livro}" removido da biblioteca ${this.nome}`)
//             return true
//         } else {
//             console.log(`Livro "${livro}" não encontrado na biblioteca`)
//             return false
//         }
//     }

//     listarLivros() {
//         console.log(`
// --- Livros na Biblioteca ${this.nome} ---`)
//         if (this.livros.length === 0) {
//             console.log("Nenhum livro cadastrado.")
//         } else {
//             this.livros.forEach((livro, index) => {
//                 console.log(`${index + 1}. ${livro}`)
//             })
//         }
//         console.log("----------------------------------")
//     }
// }


// let biblioteca = new Biblioteca("Biblioteca Municipal")
// biblioteca.adicionarLivro("Dom Quixote")
// biblioteca.adicionarLivro("1984")
// biblioteca.adicionarLivro("O Pequeno Príncipe")
// biblioteca.listarLivros()
// biblioteca.removerLivro("1984")
// biblioteca.listarLivros()


// // // EX 10

// // class Cofrinho {
// //     #moedas
// //     #notas 
// //     constructor(moedas, notas){
// //         this.#moedas = moedas
// //         this.#notas = notas
// //     }
// //     depositar(moedasD, notasD) {
// //         if (moedasD <= 0 || notasD <= 0) {
// //             return `Valor inválido, tente novamente!`
// //         } else {
// //             this.#moedas += moedasD
// //             this.#notas += notasD
// //         }
// //     }
// //     retirar(valor) {
// //         if (valor > this.#moedas || valor > this.#notas || valor > this.#moedas && valor > this.#notas) {
// //             return `Tentativa de saque inválido! saque de valor maior do que tem na conta!`
// //         }
// //     }

// //     saldo() {
// //         return `${this.#moedas} moedas e ${this.#notas} notas. No total, temos ${this.#moedas + this.#notas}` 
// //     }
// // }

// // let porquin = new Cofrinho(100, 5)
// // porquin.depositar(1, 101)
// // console.log(porquin.saldo())

// // EX 11

// // class Banco{
// //     #numero 
// //     #titular
// //     #saldo
// //     constructor(numero, titular, saldo) {
// //         this.#numero = numero
// //         this.#titular = titular
// //         this.#saldo = saldo
// //     }
// //     abrirConta(titular1, saldoInicial) {
// //         this.titular1 = titular1
// //         this.saldoInicial = saldoInicial
// //         if (saldoInicial < 0) {
// //             return `Coloque um valor inicial válido!`
// //         } else {
// //             return `Conta aberta com sucesso!`
// //         }
// //     }
// //     consultarSaldo(numeroconta) {
// //         if (numeroconta == this.#numero) {
// //             return `${this.#saldo}`
// //     } else {
// //         return `Número de conta errado!`
// //     }
// // }
// //     transferir(contaOrigem, contaDestino, valor) {
// //         this.contaOrigem = contaOrigem
// //         this.contaDestino = contaDestino
// //         this.contaOrigem -= valor
// //         this.contaDestino += valor
// //         return `A conta de número ${this.contaOrigem} vai fazer uma transferência de ${valor} para a conta de número ${this.contaDestino}`
// //     }
// // }


// // // EX 12
// // class Pedido {
// //     #nome
// //     #valor
// //     #quantidade
// //     constructor(nome, valor, quantidade) {
// //         this.#nome = nome
// //         this.#valor = valor
// //         this.#quantidade = quantidade
// //     }
// //     adicionarItem(valor) {
// //         this.#valor += valor
// //         return `O valor adicionado foi de ${valor}, o valor total agora é de ${this.#valor}`
// //     }
// //     removerItem(valor) {
// //         if (valor > this.#quantidade) {
// //             return `Tente retornar uma quantidade válida!`
// //         } else {
// //             return this.#quantidade += valor
// //         }
// //     }
// //     calcularTotal() {
// //         return this.#quantidade * this.#valor
// //     }
// // }

// // EX 13

// // class UsuarioSistema {
// //     #login
// //     #senha
// //     constructor(login, senha) {
// //         this.#login = login
// //         this.#senha = senha
// //     }
// //     autenticar(login, senha) {
// //         if(login != this.#login || senha != this.#senha) {
// //             return `Login inválido, tente novamente.`
// //         } else {
// //             return `Login concluído! Bem vindo de volta!`
// //         }
// //     }
// //     alterarSenha(senhaAntiga, senhaNova) {
// //         if(senhaAntiga == this.#senha) {
// //             this.#senha == senhaNova
// //             return `Sua senha foi alterada com sucesso!`
// //         } else {
// //             return `Senha inválida, tente novamente.`
// //         }
// //     }
// // }

// // EX 14
// // class Funcionario {
// //     constructor(nome, salarioBase) {
// //         this.nome = nome
// //         this.salarioBase = salarioBase
// //     }
// //     calcularSalarioLiq() {
// //     }
// // }

// // class FuncionarioCLT extends Funcionario {
// //     constructor (nome, salarioBase) {
// //         super(nome, salarioBase)
// //     }
// //     calcularSalarioLiq() {
// //         let imposto = 0.10
// //         let comissao = 0.05
// //         let taxaTotal = imposto + comissao
// //         this.salarioBase * taxaTotal
// //         return this.salarioBase
// //     }
// // }

// // class FuncionarioPJ extends Funcionario {
// //     constructor (nome, salarioBase) {
// //         super(nome, salarioBase)
// //     }
// //     calcularSalarioLiq() {
// //         return this.salarioBase
// //     }
// // }

// // class Estagiario extends Funcionario {
// //     constructor (nome, salarioBase) {
// //         super(nome, salarioBase)
// //     }
// //     calcularSalarioLiq() {
// //         let taxaTransporte = 0.05
// //         this.salarioBase * taxaTransporte 
// //         return this.salarioBase
// //     }
// // }

// // EX 15
// class Investimento {
//     calcularRendimento(valor, meses) {
//         throw new Error("Método deve ser implementado pela subclasse")
//     }
// }

// class RendaFixa extends Investimento {
//     calcularRendimento(valor, meses) {
//         const taxa = 0.007
//         let valorAtual = valor
//         const historico = [{mes: 0, valor: valorAtual}]
        
//         for (let i = 1; i <= meses; i++) {
//             valorAtual *= (1 + taxa)
//             historico.push({mes: i, valor: valorAtual})
//         }
        
//         return historico
//     }
// }

// class CDB extends Investimento {
//     calcularRendimento(valor, meses) {
//         const taxa = 0.01
//         const imposto = 0.15
//         let valorAtual = valor
//         const historico = [{mes: 0, valor: valorAtual}]
        
//         for (let i = 1; i <= meses; i++) {
//             const rendimentoMes = valorAtual * taxa
//             valorAtual += rendimentoMes * (1 - imposto)
//             historico.push({mes: i, valor: valorAtual})
//         }
        
//         return historico
//     }
// }

// class Acao extends Investimento {
//     calcularRendimento(valor, meses) {
//         let valorAtual = valor
//         const historico = [{mes: 0, valor: valorAtual}]
        
//         for (let i = 1; i <= meses; i++) {
//             const rendimentoAleatorio = (Math.random() * 0.15) - 0.05
//             valorAtual *= (1 + rendimentoAleatorio)
//             historico.push({mes: i, valor: valorAtual})
//         }
        
//         return historico
//     }
// }


// let rf = new RendaFixa()
// console.log("Renda Fixa:")
// console.log(rf.calcularRendimento(1000, 3))

// let cdb = new CDB()
// console.log("CDB:")
// console.log(cdb.calcularRendimento(1000, 3))

// let acao = new Acao()
// console.log("Ação:")
// console.log(acao.calcularRendimento(1000, 3))

// // EX 16

// class AplicacaoFinanceira {
//     simular(valorInicial, meses) {
//         throw new Error("Método simular() deve ser implementado pela subclasse.").
//     }
// }

// class Poupanca extends AplicacaoFinanceira {
//     simular(valorInicial, meses) {
//         const taxa = 0.006.
//         let valorFinal = valorInicial.
//         for (let i = 0; i < meses; i++) {
//             valorFinal *= (1 + taxa).
//         }
//         return valorFinal.
//     }
// }

// class TesouroDireto extends AplicacaoFinanceira {
//     simular(valorInicial, meses) {
//         const taxa = 0.008.
//         const ir = 0.10.
//         let valorFinal = valorInicial.
//         for (let i = 0; i < meses; i++) {
//             valorFinal *= (1 + taxa).
//         }
//         const lucro = valorFinal - valorInicial.
//         valorFinal -= lucro * ir.
//         return valorFinal.
//     }
// }

// class Criptomoeda extends AplicacaoFinanceira {
//     simular(valorInicial, meses) {
//         let valorFinal = valorInicial.
//         for (let i = 0; i < meses; i++) {
//             const variacao = (Math.random() * 0.45) - 0.20. // Variação entre -20% e +25%
//             valorFinal *= (1 + variacao).
//         }
//         return valorFinal.
//     }
// }


// const valorInicial = 1000.
// const periodoMeses = 12.
// const aplicacoes = [
//     { nome: "Poupança", app: new Poupanca() },
//     { nome: "Tesouro Direto", app: new TesouroDireto() },
//     { nome: "Criptomoeda", app: new Criptomoeda() }
// ].

// console.log(`
// Comparação de rendimentos para R\$${valorInicial} em ${periodoMeses} meses:
// `).

// const resultados = aplicacoes.map(aplicacao => {
//     const valorFinal = aplicacao.app.simular(valorInicial, periodoMeses).
//     return {
//         nome: aplicacao.nome,
//         valorFinal: valorFinal
//     }.
// }).

// resultados.forEach(resultado => {
//     console.log(`${resultado.nome}: R\$${resultado.valorFinal.toFixed(2)}`).
// }).

// EX 17

// class AplicacaoFinanceira {
//     simular(valorInicial, meses) {
//         throw new Error("Método simular() deve ser implementado pela subclasse.")
//     }
// }

// class Poupanca extends AplicacaoFinanceira {
//     simular(valorInicial, meses) {
//         const taxa = 0.006
//         let valorFinal = valorInicial
//         for (let i = 0; i < meses; i++) {
//             valorFinal *= (1 + taxa)
//         }
//         return valorFinal
//     }
// }

// class TesouroDireto extends AplicacaoFinanceira {
//     simular(valorInicial, meses) {
//         const taxa = 0.008
//         const ir = 0.10
//         let valorFinal = valorInicial
//         for (let i = 0; i < meses; i++) {
//             valorFinal *= (1 + taxa)
//         }
//         const lucro = valorFinal - valorInicial
//         valorFinal -= lucro * ir
//         return valorFinal
//     }
// }

// class Criptomoeda extends AplicacaoFinanceira {
//     simular(valorInicial, meses) {
//         let valorFinal = valorInicial
//         for (let i = 0; i < meses; i++) {
//             const variacao = (Math.random() * 0.45) - 0.20 // variação de 0.2 a 0.45
//             valorFinal *= (1 + variacao)
//         }
//         return valorFinal
//     }
// }

// // Sistema para comparar aplicações
// const valorInicial = 1000.
// const periodoMeses = 12.
// const aplicacoes = [
//     { nome: "Poupança", app: new Poupanca() },
//     { nome: "Tesouro Direto", app: new TesouroDireto() },
//     { nome: "Criptomoeda", app: new Criptomoeda() }
// ].

// console.log(`
// Comparação de rendimentos para R\$${valorInicial} em ${periodoMeses} meses:
// `)

// const resultados = aplicacoes.map(aplicacao => {
//     const valorFinal = aplicacao.app.simular(valorInicial, periodoMeses)
//     return {
//         nome: aplicacao.nome,
//         valorFinal: valorFinal
//     }
// })

// resultados.forEach(resultado => {
//     console.log(`${resultado.nome}: R\$${resultado.valorFinal.toFixed(2)}`)
// })
