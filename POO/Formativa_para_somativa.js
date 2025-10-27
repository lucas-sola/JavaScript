// // const estoque = {
// //             caixa: 50,
// //             palete: 10,
// //             empilhadeira: 2
// //           };

// // function verificarEstoque(produto, quantidade, callback) {
// //     let qtdProduto = estoque[produto]
// //     console.log(`Nós temos apenas ${qtdProduto} desse produto! ou seja..`)
// //     if (callback[produto] < quantidade) {
// //         return console.log(`Estoque insuficiente!`)
// //     } else {
// //         return console.log(`Pedido confirmado!`)
// //     }

// // }


// // verificarEstoque("caixa", 40, estoque)

// ///////////////////////////////////////////////////////////////////

// const estoque = {
//             caixa: 50,
//             palete: 10,
//             empilhadeira: 2
//           };

// function verificarEstoque(produto, quantidade, callback) {
// return callback(produto, quantidade)
// }

// function conferir(produto, qtd) {
//     if (estoque[produto] >= qtd) {
//         return "Pedido aprovado" 
//     } else {
//         return "Pedido Negado, estoque insuficiente"
//     }
// }


// console.log(verificarEstoque('caixa', 30, conferir))


// /////////


// class Produto{
//     constructor(nome, preco, quantidade) {
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }
//     valorTotal() {
//         return `${this.preco * this.quantidade}`
//     }
//     reporEstoque(qtd) {
//         this.quantidade += qtd
//     }
// }

// let Prego = new Produto("Prego", 1, 400);
// console.log(`O valor total deste produto é de: ${Prego.valorTotal()}`)
// Prego.reporEstoque(100);
// console.log(`O valor total deste produto é de: ${Prego.valorTotal()}`)

// // EXERCÍCIO 3 

// // Na área de almoxarifado, cada pedido feito para o fornecedor contém um produto por vez, informado no momento da solicitação. O sistema precisa registrar o número do pedido, o nome do produto solicitado, o preço unitário do produto e a quantidade solicitada.

// // O supervisor explicou que precisa:
// // Calcular o valor total do pedido (preço × quantidade).
// // Emitir um resumo contendo o número do pedido, nome do produto, quantidade e valor total.
// // Modele uma classe Pedido que atenda a essa necessidade, criando atributos e métodos adequados

// class Pedido {
//     constructor(nome, nrPedido, preco, quantidade) {
//         this.nome = nome
//         this.nrPedido = nrPedido 
//         this.preco = preco
//         this.quantidade = quantidade
//     }
//     valorTotalPedido() {
//         return `${this.preco * this.quantidade}`
//     }
//     resumoPedido() {
//         return `Nome do cliente: ${this.nome} Número do pedido: ${this.nrPedido} Preço unitário: ${this.preco} quantidade pedida: ${this.quantidade}`
//     }
// }

// let pedidoCaro = new Pedido("José", 203, 1.99, 200)
// pedidoCaro.resumoPedido()
// console.log(pedidoCaro.valorTotalPedido())

// // EXERCÍCIO 4

// // Crie uma classe Veiculo com atributos:
// // placa
// // capacidade (em kg)
// // Depois crie duas subclasses:
// // Caminhao → adiciona atributo eixos e motorista.
// // Van → adiciona atributo motorista.
// // Cada subclasse deve implementar o método podeTransportar(carga) que verifica se o veículo consegue realizar a viagem:
// // Van suporta até 5.000 kg.
// // Caminhão suporta até 8.000 kg por eixo.
// // Exemplo: um caminhão com 2 eixos pode transportar até 16.000 kg.

// class Veiculo {
//     constructor(placa, capacidade) {
//         this.placa = placa
//         this.capacidade = capacidade
//     }
// }

// class Van extends Veiculo {
//     constructor(placa, capacidade, motorista) {
//         super(placa, capacidade) 
//         this.motorista = motorista
//     }
//     podeTransportar(carga) {
//         if (carga > 5000) {
//             return `Muito pesado! nao vai aguentar!!!`
//         } else {
//             return `Pode fazer a viagem tranquilo(a)!`
//         }
//     }
// }
// class Caminhao extends Veiculo {
//     constructor(placa, capacidade, motorista, eixos) {
//         super(placa, capacidade)
//         this.motorista = motorista
//         this.eixos = eixos
//     }
//     podeTransportar(carga) {
//         if (carga > this.eixos * this.capacidade) {
//             return `Não vai dar pra fazer a viagem, muito pesado!!`
//         } else {
//             return `Pode fazer a viagem tranquilo(a)!`
//         }
//     }
// }

// let caminhaoNovo = new Caminhao("ABC123", 8000, "Jair Cromado", 4)
// console.log(caminhaoNovo.podeTransportar(32000))
// let vanNova = new Van("ABC123", 5000, "Jair Cromado")
// console.log(vanNova.podeTransportar(6000))

// // EXERCÍCIO 5 


// // Crie uma classe Funcionario com os atributos:
// // nome
// // salarioBase
// // E um método calcularSalario().

// // Crie subclasses:
// // OperadorDeEmpilhadeira → recebe adicional de 10% sobre o salário base.
// // GerenteDeLogistica → recebe adicional fixo de R$ 2.000,00.
// // Simule um array com 5 funcionários diferentes e exiba os salários calculados utilizando for, demonstrando o polimorfismo em ação.

// class Funcionario {
//     constructor(nome, salarioBase) {
//         this.nome = nome
//         this.salarioBase = salarioBase
//     }
//     calcularSalario() {}
// }

// class OperadorDeEmpilhadeira extends Funcionario {
//     constructor(nome, salarioBase) {
//         super(nome, salarioBase)
//     }
//     calcularSalario() {
//         return (this.salarioBase * 1.1) 
//     }
// }

// class GerenteDeLogistica extends Funcionario {
//     constructor(nome, salarioBase) {
//         super(nome, salarioBase)
//     }
//     calcularSalario() {
//         return (this.salarioBase + 2000)
//     }
// }


// let gerenteGenerico = new GerenteDeLogistica("Celso", 12400)
// let gerenteMaisGenerico = new GerenteDeLogistica("Marlon", 12000)
// let operadorDeEmpilhadeiraFormadoRecentemente = new OperadorDeEmpilhadeira("Daniel", 5000)
// let funcionarioGenerico = new OperadorDeEmpilhadeira("Sola", 800)
// let gerentePadrao = new GerenteDeLogistica("Mônica", 20000)

// let arrayFuncionarios = [gerenteGenerico, gerenteMaisGenerico, operadorDeEmpilhadeiraFormadoRecentemente, funcionarioGenerico, gerentePadrao]
// arraySalarios = []
// for(let i=0; i < arrayFuncionarios.length; i++) {
//     let salarios = arrayFuncionarios[i].calcularSalario()
//     arraySalarios.push(salarios)
// }
// console.log(arraySalarios[0].toFixed(2))

// // EXERCÍCIO 6

// // Crie uma classe Almoxarifado que armazene um atributo privado #quantidade e o nome de um produto.

// // Implemente os métodos:
// // adicionarProduto(nome, qtd)
// // retirarProduto(nome, qtd) (não permitir retirar mais do que existe)
// // consultarEstoque() (retorna todos os produtos e quantidades).
// // Capacidades técnicas avaliadas: Utilizar o paradigma da programação orientada a objetos.
// // Cria corretamente classes com atributos e métodos.
// // Utiliza objetos para representar entidades reais de forma coerente.
// // Utiliza herança e polimorfismo de forma funcional.

// class Almoxarifado {
//     #quantidade
//     constructor(nome, quantidade) {
//         this.#quantidade = quantidade
//         this.nome = nome
//     }
//     adicionarProduto(qtd) {
//         if (qtd > 0) {
//             this.#quantidade += qtd
//         } 
//     }
//     retirarProduto (qtd) {
//         if (qtd > this.#quantidade) {
//             return `Impossível retirar esta quantidade, maior do que seu estoque!`
//         } else {
//             this.#quantidade -= qtd
//             return `Retirada feita! o estoque agora é de: ${this.#quantidade}`
//         }
//     }
//     consultarEstoque() {
//         return `O item ${this.nome} tem ${this.#quantidade} unidades!`
//     }
// }

// let raquetePingPong = new Almoxarifado("Raquete Ping Pong", 4)
// console.log(raquetePingPong.consultarEstoque())
// raquetePingPong.adicionarProduto(6)
// console.log(raquetePingPong.consultarEstoque())

// raquetePingPong.retirarProduto(4)
// console.log(raquetePingPong.consultarEstoque())

