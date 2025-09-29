//1- Classe Produto
// Crie uma classe Produto com nome, preço e quantidade em estoque.
// Adicione um método para calcular o valor total do estoque.

  // EXERCÍCIO 1

  class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
    valorTotalEstoque() {
      return console.log(
        `O valor total de todos os itens de ${this.nome} é de: R$${
          this.preco * this.quantidade
        }, sendo o valor unitário R$${this.preco}`
      )
    }
  }

let produto1 = new Produto("Parafuso", 3, 152);
produto1.valorTotalEstoque(produto1);

// EXERCÍCIO 2
// Crie uma classe Filme com título, diretor e ano de lançamento.
// Adicione um método que exiba uma frase como:
// "O filme Matrix foi lançado em 1999 e dirigido por Wachowski."

class Filme {
  constructor(titulo, diretor, anoLancamento) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.anoLancamento = anoLancamento;
  }
  descricaoFilme() {
    return console.log(
      `O filme ${this.titulo} foi lançado em ${this.anoLancamento} e dirigido por ${this.diretor}.`
    );
  }
}
let filme1 = new Filme("Aquaman", "James Wan", 2018);
filme1.descricaoFilme();

// EXERCÍCIO 3

// 3 - Classe Aluno
// Crie uma classe Aluno com nome, nota1 e nota2.
// Adicione um método que calcule a média e outro que diga se o aluno está aprovado (média ≥ 7).

class Aluno {
  constructor(nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }
  calcularMedia() {
    return (this.nota1 + this.nota2) / 2;
  }
  verificarAprovacao() {
    const media = this.calcularMedia();
    if (media >= 7) {
      return console.log(
        `O aluno ${this.nome} está aprovado com média ${media}.`
      );
    } else {
      return console.log(
        `O aluno ${this.nome} está reprovado com média ${media}.`
      );
    }
  }
}

Aluno1 = new Aluno("Carlos", 8, 6);
Aluno1.verificarAprovacao();

// EXERCÍCIO 4
// 4 - Classe Retângulo
// Crie uma classe Retangulo com base e altura.
// Adicione métodos para calcular a área e o perímetro.

class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  area() {
    return console.log(`A área do retângulo é de: ${this.base * this.altura}`);
  }
  perimetro() {
    return console.log(
      `O perímetnro do retângulo é de: ${(this.base*2) + (this.altura*2)}`
    );
  }
}

const retangulo1 = new Retangulo(5, 10);
retangulo1.area();
retangulo1.perimetro();

// EXERCÍCIO 5
// 5 - Classe Carro
// Criar uma classe que simule o funcionamento de um carro em relação ao consumo de combustível.
// O carro terá:
// marca e modelo → atributos de identificação.
// combustível → quantidade de litros no tanque.
// E dois comportamentos principais:
// abastecer(litros) → aumenta a quantidade de combustível no tanque.
// dirigir(km) → simula o gasto de combustível ao rodar determinada distância(consumo: 1 litro a cada 10 km).

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


const carro1 = new Carro("Chevrolet", "Onix", 150);
carro1.dirigir(100);

