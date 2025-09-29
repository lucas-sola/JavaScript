// // EXERCÍCIO 1
// // 1. Crie uma classe InstrumentoMusical com o método tocar(). Depois, crie duas subclasses Violao e Piano que herdem de InstrumentoMusical e sobrescrevam o método tocar() exibindo mensagens diferentes.

// // class InstrumentoMusical {
// //     tocar() {
// //         return console.log("to tocando tal instrumento em, que maneirooo")
// //     }
// // }

// // class Piano extends InstrumentoMusical {
// //     tocar() {
// //         return console.log(`olha que maneiro "pipipipi"`)
// //     }
// // }

// // class Violao extends InstrumentoMusical {
// //     tocar() {
// //         return console.log(`Olha que maneiro "BOM BOM BOM BOM`)
// //     }
// // }

// // let piano1 = new Piano
// // piano1.tocar()

// // let violao1 = new Violao
// // violao1.tocar()

// // EXERCÍCIO 2

// //Crie uma classe Funcionario com os atributos nome e salario. Crie uma classe Gerente que herde de Funcionario e adicione o atributo bonus.

// // class Funcionario {
// //     constructor(nome, salario) {
// //         this.nome = nome
// //         this.salario = salario
// //     }
// // }

// // class Gerente extends Funcionario {
// //     constructor(nome, salario, bonus) {
// //         super(nome, salario)
// //         this.bonus = bonus
// //     }
// // }

// // let funcionario1 = new Funcionario("Celso",1818)-
// // console.log(funcionario1.nome)
// // console.log(funcionario1.salario)

// // let gerente1 = new Gerente("Daniel", 2500, 682)
// // console.log(gerente1.nome)
// // console.log(gerente1.salario)


// // EXERCÍCIO 3

// // 3. Implemente uma classe Veiculo com os atributos marca e ano. Depois crie:
// // Carro (com atributo adicional portas)
// // Moto (com atributo adicional cilindradas)

// // class Veiculo {
// //     constructor(marca, ano) {
// //         this.marca = marca
// //         this.ano = ano
// //     }
// // }

// // class Carro extends Veiculo {
// //     constructor(marca, ano, portas) {
// //         super(marca, ano)
// //         this.portas = portas
// //     }
// // }

// // class Moto extends Veiculo {
// //     constructor(marca, ano, cilindradas) {
// //         super(marca, ano)
// //         this.cilindradas = cilindradas
// //     }
// // }

// // let moto = new Moto("VW", 2009, 125)
// // let carro = new Carro("CV", 2016, 4)

// // console.log(moto.marca)
// // console.log(moto.ano)
// // console.log(moto.cilindradas)

// // console.log(carro.marca)
// // console.log(carro.ano)
// // console.log(carro.portas)

// // EXERCÍCIO 4

// // 4. Crie uma classe Funcionario com o método calcularSalario(). Crie duas subclasses:
// // Gerente: salário base + bônus de 30%.
// // Desenvolvedor: salário base + adicional de 20%.

// // class Funcionario {
// //     constructor(salario){
// //         this.salario = salario
// //     }
// //     calcularSalario() {
// //         return this.salario
// //     }
// //     }



// // class Gerente extends Funcionario {
// //     constructor(salario) {
// //         super(salario)
// //     }
// //     calcularSalario() {
// //         let bonus = 1.30 
// //         return this.salario * bonus
// //     }
// // }

// // class Desenvolvedor extends Funcionario {
// //     constructor(salario) {
// //         super(salario)
// //     }
// //     calcularSalario() {
// //         let bonus = 1.20
// //         return this.salario * bonus
// //     }
// // }

// // let gerente = new Gerente(1800)
// // console.log(`O salário final do gerente é de: ${gerente.calcularSalario()}`)

// // let dev = new Desenvolvedor(2000)
// // console.log(`O salário final deste dev é de ${dev.calcularSalario()}`)

// // EXERCÍCIO 5

// // 5. Implemente uma classe base ContaBancaria com atributos titular e saldo, e métodos depositar() e sacar().
// // ContaCorrente deve cobrar uma taxa de R$ 2,00 em cada saque.
// // ContaPoupanca deve render 5% ao mês quando for chamado o método atualizarSaldo().

// class ContaBancaria {
//     constructor(titular, saldo) {
//         this.titular = titular
//         this.saldo = saldo
//     }
//     depositar(valor1) {
//         if (valor1 != 0 && valor1 > 0){
//         this.saldo += valor1
//         console.log(`Parabéns pelo depósito! O seu saldo atual é de: ${this.saldo}`)
//         } else {
//             return `Valor inválido, tente novamente!`
//         }
//     }

//     sacar(valor2) {
//         if (valor2 > 0 && valor2 != 0 && valor2 < this.saldo) {
//             this.saldo -= valor2
//             console.log(`Parabéns pelo saque! Seu saldo atual é de: ${this.saldo}`)
//         } else {
//             return `Valor inválido, tente novamente!`
//         }
//     }
// }

// class ContaCorrente extends ContaBancaria {
//     constructor(titular, saldo) {
//         super(titular, saldo)
//     }
//     sacar(valor1) {
//         let taxa = 2.00
//         if (valor1 < this.saldo && valor1 > 0 && valor1 != 0 && this.saldo > valor1 + taxa) {
//         this.saldo -= taxa
//         this.saldo -= valor1
//         this.saldo
//         console.log(`Parabéns pelo saque! seu saldo agora é de: ${this.saldo}`)
//         } else {
//         return `Valor inválido, tente novamente!`
//     }
//     }
// }

// class ContaPoupanca extends ContaBancaria {
//     constructor(titular, saldo){
//     super(titular, saldo)
// }
//     atualizarSaldo(qntMeses){
//         let juros = 0.05
//         let rendimento = this.saldo * juros
//         this.saldo += rendimento
//         return (`Parabéns! Seu saldo atual é de: ${this.saldo}`)
//     }
// }

// let ContaCorrente1 = new ContaCorrente("Lucas", 1000)
// let ContaPoupanca1 = new ContaPoupanca("Monica", 1000)
// ContaCorrente1.sacar(1000)
// ContaCorrente1.depositar(2)

// console.log(ContaPoupanca1.atualizarSaldo())

// // EXERCÍCIO 6
// // class Produto {
// //     #nome
// //     #preco
// //     constructor(nome, preco) {
// //         this.#nome = nome
// //         this.#preco = preco
// //     }
// //     get getPreco() {
// //         return this.#preco
// //     }
// //     get getNome() {
// //         return this.#nome
// //     }
// //     set setPreco(value) {
// //         if (value < 0) {
// //             console.log("Não foi possível alterar o saldo para esse valor, tente novamente.")
// //         } else {
// //         return this.#preco = preco 
// //         }
// //     }
// //     set setNome(value) {
// //         return this.#nome = value
// //     }
// // }

// // let produto_generico = new Produto("João Pedro", 5210)
// // console.log(produto_generico.getPreco)
// // console.log(produto_generico.getNome)

// // EXERCÍCIO 7
// // 7. Implemente uma classe Carro com atributo privado velocidade. Crie os métodos públicos acelerar() (aumenta +10 km/h) e frear() (diminui -10 km/h, sem permitir valores negativos).

// class Carro {
//     #velocidade 
//     constructor(velocidade) {
//         this.#velocidade = velocidade
//     }

//     acelerar(){
//         this.#velocidade += 10
//     }
//     frear() {
//         if (this.#velocidade == 0 || this.#velocidade < 0) {
//             console.log("O carro já está parado!")
//         } else {
//             console.log("Freando...")
//         }
//         if (this.#velocidade < 10) {
//             while (this.#velocidade == 0) {
//                 this.#velocidade -= 1
//             }
//         }
//         else {
//             return this.#velocidade -= 10
//         }
//     }
//     get getVelocidade() {
//         return this.#velocidade
//     }
// }

// let carro1 = new Carro(70)
// console.log(carro1.getVelocidade)
// carro1.acelerar()
// console.log(carro1.getVelocidade)
// carro1.frear()
// console.log(carro1.getVelocidade)

// // EXERCÍCIO 8

// // 8. Crie uma classe Conta com atributo privado saldo. Garanta que só seja possível modificar o saldo pelos métodos depositar() (apenas valores positivos) e sacar() (apenas se houver saldo suficiente).

// class Conta {
//     #saldo
//     constructor(saldo) {
//         this.#saldo = saldo
//     }
//     depositar(value) {
//         if (value > 0 && value != 0) {
//             this.#saldo += value
//         } else {
//             return 'Coloque um valor válido e tente novamente!'
//         }
//     }
//     sacar(value) {
//         if (value > this.#saldo || value < 0 || value == 0) {
//             console.log('Deu errado seu saque! Tente novamente com um valor válido.')
//         } else {
//             return this.#saldo -= value
//         }
//     }
//     get getSaldo() {
//         return this.#saldo
//     }
//     set setSaldo(value) {
//         return this.#saldo == value
//     }
// }

// let conta1 = new Conta(5000)
// conta1.depositar(200)
// console.log(conta1.getSaldo)
// conta1.sacar(5500)
// console.log(conta1.getSaldo)

// EXERCÍCIO 9

// 9. Implemente uma classe Usuario com atributo privado senha. Crie o método validarSenha(senhaDigitada) que retorna true se a senha estiver correta e false caso contrário.

// class Usuario {
//     #senha
//     constructor(nome, senha) {
//         this.#senha = senha
//         this.nome = nome
//     }
//     validarSenha(senhaDigitada) { 
//         if (senhaDigitada == this.#senha) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// let UsuarioNovo = new Usuario('Mizzukizn', 'Lucasfs0202')
// console.log(UsuarioNovo.validarSenha('Lucasfs0202'))
// EXERCÍCIO 10
// 10. Crie uma classe Retangulo com atributos privados largura e altura. Crie métodos públicos getArea() e getPerimetro() para retornar a área e o perímetro
// class Retangulo {
//     #largura 
//     #altura
//     constructor(largura, altura) {
//         this.#largura = largura
//         this.#altura = altura
//     }
//     get getArea() {
//         return `A área desse retângulo é de: ${this.#altura * this.#largura}`
//     }
//     get getPerimetro() {
//         return `O perimetro desse retângulo é de: ${this.#altura + this.#largura}`
//     }

// }
// let retanguloExemplo = new Retangulo(10, 25)
// console.log(retanguloExemplo.getArea)
// console.log(retanguloExemplo.getPerimetro)

// EXERCÍCIO 11
// 11. Crie uma classe Forma com o método calcularArea(). Crie as classes Quadrado (lado), Retangulo (largura e altura) e Circulo (raio), sobrescrevendo o método para calcular a área corretamente. 

// EXERCÍCIO 11

// class Forma {
//     calcularArea() {
//     }
// }

// class Quadrado extends Forma {
//     constructor(lado) {
//         super()
//         this.lado = lado
//     }

//     calcularArea() {
//         return this.lado * this.lado
//     }
// }

// class Retangulo extends Forma {
//     constructor(largura, altura) {
//         super()
//         this.largura = largura
//         this.altura = altura
//     }

//     calcularArea() {
//         return this.largura * this.altura
//     }
// }

// class Circulo extends Forma {
//     constructor(raio) {
//         super()
//         this.raio = raio
//     }

//     calcularArea() {
//         return Math.PI * this.raio * this.raio;
//     }
// }

// let Quadrado1 = new Quadrado(10);
// console.log(`A área do quadrado é: ${Quadrado1.calcularArea()}`); // Saída: 100

// let Retangulo1 = new Retangulo(10, 5);
// console.log(`A área do retângulo é: ${Retangulo1.calcularArea()}`); // Saída: 50

// let Circulo1 = new Circulo(10);
// console.log(`A área do círculo é: ${Circulo1.calcularArea()}`)
// EXERCÍCIO 12

// 12. Crie uma classe Funcionario com o método trabalhar(). Depois crie:
// Professor: retorna "Ministrando aulas e corrigindo provas".
// Engenheiro: retorna "Desenvolvendo projetos e supervisionando obras".
// Designer: retorna "Criando layouts e materiais gráficos".

// class Funcionario {
//     constructor() {}
//     trabalhar() {
//         return 'estou trabalhando :)'
//     }
// }

// class Professor extends Funcionario {
//     constructor() {
//         super()
//     }
//     trabalhar(){ 
//         return 'Ministrando aulas e corrigindo provas'
//     }
// }

// class Engenheiro extends Funcionario {
//     constructor() {super()}
//     trabalhar(){
//         return 'Desenvolvendo projetos e supervisionando obras'
//     }
// }

// class Designer extends Funcionario {
//     constructor() {super()}
//         trabalhar() {
//         return 'Criando layouts e materiais gráficos'
//     }
// }

// EXERCÍCIO 13

// 13. Implemente um sistema de pagamento com uma classe Pagamento e subclasses CartaoCredito, Boleto e Pix, cada uma sobrescrevendo o método realizarPagamento() exibindo a forma de pagamento utilizada.
// class Pagamento {
//     constructor() {}
//     realizarPagamento() {

//     }
// }
// class CartaoCredito extends Pagamento {
//     constructor() {super()}
//     realizarPagamento() {
//         return 'Foi pago com cartão de crédito!'
//     }
// }

// class Boleto extends Pagamento {
//     constructor() {super()}
//     realizarPagamento() {
//         return 'Foi pago com boleto!'
//     }
// }

// class Pix extends Pagamento {
//     constructor() {super()}
//     realizarPagamento() {
//         return 'Foi pago com pix!'
//     }
// }


// EXERCÍCIO 14
// 14. Crie uma classe Transporte com o método mover(). Crie as subclasses Carro, Bicicleta e Aviao, cada uma sobrescrevendo o método mover() com mensagens específicas (ex: "O carro anda pela estrada"). Depois, crie uma lista de transportes e percorra chamando mover().

// class Transporte {
//     constructor() {

//     }
// }
// class Carro extends Transporte {
//     constructor() {
//         super()
//     }
//     mover() {
//         return 'O carro anda pela estrada!'
//     }
// }

// class Bicicleta extends Transporte {
//     constructor() {
//         super()
//     }
//     mover() {
//         return 'A bicicleta anda pela rua!'
//     }
// }

// class Aviao extends Transporte {
//     constructor() {
//         super()
//     }
//     mover() {
//         return 'O avião anda pelo céu!'
//     }
// }

// let carro1 = new Carro()
// let aviao1 = new Aviao()
// let bicicleta1 = new Bicicleta()

// let array = [carro1, aviao1, bicicleta1]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i].mover())
// }


// EXERCÍCIO 15

// 15. Implemente uma classe Mensagem com o método enviar(). Crie subclasses Email, SMS e WhatsApp que sobrescrevam enviar() exibindo a mensagem de envio.
// class Mensagem {
//     constructor() {
//     }
//     enviar() {
//         return 'mensagem generica para exemplo'
//     }
// }

// class Email extends Mensagem {
//     constructor() {
//         super()
//     }
//     enviar() {
//         return 'mensagem generica para exemplo email'
//     }
// }

// class SMS extends Mensagem {
//     constructor() {
//         super()
//     }
//     enviar() {
//         return 'mensagem generica para exemplo SMS'
//     }
// }

// class WhatsApp extends Mensagem {
//     constructor() {
//         super()
//     }
//     enviar() {
//         return 'mensagem generica para exemplo whastapp'
//     }
// }

