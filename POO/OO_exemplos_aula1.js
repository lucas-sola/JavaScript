// const pessoa = {
//     nome: "João",
//     idade: 30,
//     falar: function() {
//         console.log(`Olá, meu nome é: ${this.nome}`)
//     }
// }


// pessoa.falar();

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        }
    saudacao() {
        return console.log(`Olá, meu nome é: ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa("Maria", 26)
pessoa1.saudacao()

const pessoa2 = new Pessoa("Renato", 22)
pessoa2.saudacao()

const pessoa3 = new Pessoa("Ana", 42)
pessoa3.saudacao()


//-------------------------------------------------------------------------------------------------------------------------------------

class Conta {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    
    }
    depositar(valor){
        this.saldo += valor
        return console.log(`Depósito realizado. Saldo atual: R$${this.saldo}`)
    }

    sacar(valor) {
        this.saldo -= valor
        if (this.saldo < valor){
            console.log("Valor de saque maior do que o valor na conta, por favor, tente novamente com outro valor.")
        } else {
        return console.log(`O saque foi realizado com sucesso. Saldo atual: R$${this.saldo}`)
        }
    }
}


let conta1 = new Conta("Celso", 125000)
conta1.depositar(100)
conta1.sacar(5555555555)