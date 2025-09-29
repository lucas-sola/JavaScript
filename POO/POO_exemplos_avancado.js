// class ContaBancaria {
//     #saldo
//     NumeroConta
//     constructor(saldo, NumeroConta) {
//         this.#saldo = saldo
//         this.NumeroConta = NumeroConta
//     }
//     get getSaldo() {return this.#saldo}
//     set setSaldo(valor) {
//         this.#saldo = valor
//     }
// }

// let conta1 = new ContaBancaria(1250, "R2D2")

// console.log(conta1.NumeroConta)
// conta1.setSaldo = 3000
// console.log(conta1.getSaldo)



class Animal {
    fazerSom() {
        console.log("Emite um som genérico")
    }
    constructor(nome){ 
        this.nome = nome
    }
}
let animal = new Animal

class Cachorro extends Animal {
    fazerSom() {
        console.log("auau")
    }
    constructor(nome) {
        super(nome)
    }
}

let Cachorro1 = new Cachorro("rex")
console.log(`O cachorro 1 tem o nome ${Cachorro1.nome} `)


