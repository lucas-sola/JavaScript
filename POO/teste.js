class Carro {
  constructor(marca, modelo, combustivel) {
    this.marca = marca;
    this.modelo = modelo;
    this.combustivel = combustivel;
  }
  abastecer(litros) {
    this.combustivel += litros;
    return console.log(
      `Abastecimento realizado. O tanque agora possui ${this.combustivel} litros de combustível.`
    );
  }
  dirigir(km) {
    const consumo = km / 10;
    if (consumo > this.combustivel) {
        return console.log(`Faltou combustível aí fi, vai dar nao`)
    } else if (consumo == this.combustivel) {
        this.combustivel -= consumo 
        return console.log(`Cuidado, vai dar pra fazer mas ce vai ficar zerado, com +/- ${this.combustivel}L !`)
    } else {
        this.combustivel -= consumo
        return console.log(`Vai dar pra fazer a viagem fi, e vai sobrar uns ${this.combustivel}L! `)
    }
  }
}


const carro1 = new Carro("Chevrolet", "Onix", 10);
carro1.dirigir(10);
//     if (consumo > this.combustivel) {
//       console.log("Combustível insuficiente para realizar a viagem.");
//     } else {
//       this.combustivel -= consumo;
//       return console.log(
//         `Viagem realizada com sucesso! Combustível restante: ${this.combustivel} litros.`
//       );
//     }
//   }
// }