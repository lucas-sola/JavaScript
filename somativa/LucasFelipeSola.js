// EX1

// const candidatos = {
// ana: true,
// bruno: false,
// carla: true,
// daniel: false
// }

// function verificarCandidato (nome, callback) {
//     console.log(nome) 
//     return callback(nome)
// }

// function conferir(nome) {
//     if (candidatos[nome] == true ) {
//         return 'Candidato aprovado para a próxima fase.'
//     } else {
//         return 'Candidato reprovado'
//     }
// }

// console.log(verificarCandidato('carla', conferir))

// EX2

// class Colaborador {
//     constructor(nome, cargo, salario) {
//         this.nome = nome
//         this.cargo = cargo
//         this.salario = salario
//     }
//     aumentarSalario(percentual) {
//         this.salario += (this.salario * percentual) / 100
//     }




//     exibirDados() {
//         return `Olá ${this.nome}! Seu salário atual é de: ${this.salario}, operando no cargo de ${this.cargo}!`
//     }
// }

// let Celso = new Colaborador('Celso', 'Professor', 2500)
// console.log(Celso.exibirDados())
// Celso.aumentarSalario(10)
// console.log(Celso.exibirDados()) 




// EX3 


let salarioTotal = null
class FolhaDePagamento {
    constructor(nomeColaborador, cargo, salarioBase, diasTrabalhados) {
        this.nomeColaborador = nomeColaborador
        this.cargo = cargo
        this.salarioBase = salarioBase
        this.diasTrabalhados = diasTrabalhados
    }
    calcularSalarioMensal() {
        salarioTotal = this.salarioBase + (this.salarioBase / 30) * this.diasTrabalhados
        return salarioTotal

    }
    resumoPagamento() {
        return `Olá ${this.nomeColaborador}, atualmente, seu cargo de ${this.cargo} te oferece um salário base de ${this.salarioBase}, somado com seus dias trabalhados (${this.diasTrabalhados}), você obteve um salario mensal de ${salarioTotal}`
    }
}

let Celso = new FolhaDePagamento('Celso', 'Professor', 2500, 15)
Celso.calcularSalarioMensal()

console.log(Celso.resumoPagamento()) 

// EX 4


// class Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase) {
//         this.colaborador = colaborador
//         this.dataInicio = dataInicio
//         this.tipo = tipo
//         this.salarioBase = salarioBase
//     }
//     calcularSalario() {
//         return this.salarioBase
//     }
// }
// salarioTotalCLT = null
// class CLT extends Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase, bonusPercentual) {
//         super(colaborador, dataInicio, tipo, salarioBase)
//         this.bonusPercentual = bonusPercentual
//     }
//     calcularSalario() {
//         if (this.bonusPercentual <= 15) {
//         salarioTotalCLT = this.salarioBase + (this.salarioBase * this.bonusPercentual) / 100 
//         return salarioTotalCLT
//     }
//         else {
//             return 'O bonus têm que ser inferior ou igual a 15%, tente novamente com outro valor.'
//         }
//     }
//     detalhesContrato() {
//         return `Olá ${this.colaborador}! O seu contrato foi iniciado em ${this.dataInicio}, sendo do tipo ${this.tipo}, com o salario base de ${this.salarioBase} e um bonus percentual de no maximo 15%! no seu caso, de ${this.bonusPercentual}%! Seu salario total este mês foi de: ${salarioTotalCLT}`
//     }
// }
// salarioTotalEstagiario = null
// class Estagiario extends Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase, horasSemanais) {
//         super(colaborador, dataInicio, tipo, salarioBase)
//         this.horasSemanais = horasSemanais
//     }
//     calcularSalario() {
//          salarioTotalEstagiario = (this.horasSemanais * 20) + this.salarioBase
//          return salarioTotalEstagiario
//     }
//     detalhesContrato() {
//         return `Olá ${this.colaborador}! O seu contrato foi iniciado em ${this.dataInicio}, sendo do tipo ${this.tipo}, com o salario base de ${this.salarioBase} e um bonus de 20 reais a hora! você teve ${this.horasSemanais} horas semanais esta semana! Seu salário total foi de: ${salarioTotalEstagiario}`
//     }
// }

// let celso1 = new CLT('Celso', '12/09/1923', 'CLT', 2500, 10)
// console.log(celso1.calcularSalario())
// console.log(celso1.detalhesContrato())

// let celso2 = new Estagiario('Celso', '12/09/1289', 'Estagiário', 2500, 50)
// console.log(celso2.calcularSalario())
// console.log(celso2.detalhesContrato())


// EX 5

// class Funcionario {
//     constructor(nome, salarioBase) {
//         this.nome = nome 
//         this.salarioBase = salarioBase
//     }
//     calcularSalario() {

//     }
// }
// let salarioTotalASRH = null
// class AssistenteRH extends Funcionario {
//     constructor(nome, salarioBase) {
//         super(nome, salarioBase)
//     }
//     calcularSalario() {
//      salarioTotalASRH = (this.salarioBase * 5) / 100
//      return salarioTotalASRH += this.salarioBase
//     }
// }

// class AnalistaRH extends Funcionario {
//     constructor(nome, salarioBase) {
//         super(nome, salarioBase)
//     }
//     calcularSalario() {
//      salarioTotalASRH = (this.salarioBase * 15) / 100
//      return salarioTotalASRH += this.salarioBase
//     }
// }
// salarioTotalGRH = null
// class GerenteRH extends Funcionario {
//     constructor(nome, salarioBase) {
//         super(nome, salarioBase)
//     }
//     calcularSalario() {
//         salarioTotalGRH = this.salarioBase + 3000
//         return salarioTotalGRH
//     }
// }

// let Giovana = new GerenteRH('Giovana', 1000)
// let Fernando = new AnalistaRH('Fernando', 1000)
// let Sola = new AssistenteRH('Sola', 1000)
// let Celso = new GerenteRH('Celso', 1000)
// let Felipe = new AssistenteRH('Felipe', 1000)
// let funcionarios = [Giovana, Fernando, Sola, Celso, Felipe]

// arraySalarios = []
// for (let i = 0; i < funcionarios.length; i++) {
//     let salarios = funcionarios[i].calcularSalario()
//     arraySalarios.push(salarios)
// }
// console.log(arraySalarios)

// EX 6

// class BancoDeHoras {
//     #horas
//     colaborador
//     constructor(horas, colaborador) {
//         this.#horas = horas
//         this.colaborador = colaborador
//     }
//     adicionarHoras(qtd) {
//         if (qtd < 0) {
//             return `Valor inválido, tente novamente com outro número!`
//         } else {
//             this.#horas += qtd
//         }
//     }
//     retirarHoras(qtd) {
//         if (qtd > this.#horas || qtd < 0) {
//             return `Valor com maior saldo do que as horas na conta ou valor inválido, tente novamente com outro valor!`
//         } else {
//             this.#horas -= qtd
//         }
//     }
//     consultarHoras() {
//         return this.#horas
//     }
// }

// let Banco = new BancoDeHoras(400, 'Sola')
// Banco.adicionarHoras(100)
// Banco.retirarHoras(200)
// console.log(Banco.consultarHoras())
