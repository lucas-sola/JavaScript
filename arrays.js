// EXERCÍCIO 1

// let lista1 = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"]
// for(i = 0; i < 6; i++); {
//     lista1.forEach(pr => console.log(pr))
// }

let lista1 = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"]
for(i = 0; i <= 4; i++) {
    console.log(lista1[i])
}

// EXERCÍCIO 2

let lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < lista2.length; i++) {
    let numeroAtual = lista2[i];
    if (numeroAtual % 2 == 0 ) {
        console.log(numeroAtual)
    }
}

// EXERCÍCIO 3

// let soma = 0
// let lista3 = [1,2,3,4,5,6,7,8,9,10] 
// for (let i = 0; i < lista3.lenght; i++) {
//     soma = soma + lista3 [i]
// }
// console.log(soma)
let lista3 = [10, 5, 20, 15, 30];

let soma = 0;

for (let i = 0; i < lista3.length; i++) {
  soma += lista3[i]; 
}
console.log("A soma total é:", soma);

// EXERCÍCIO 4

let lista4 = [5, 50, 1, 100, 25];

lista4.sort((a, b) => b - a);

console.log(lista4[0]);

// EXERCÍCIO 5

let lista5 = ["Laranja", "Pera", "Maçã", "Abacate",] 
console.log(lista5.includes("Maçã"))

// EXERCÍCIO 6

let lista6 = [1,2,4,6,6,4,1,26,7,9,86,23,6,8]
console.log(lista6)
lista6.push(15);
console.log(lista6)

// EXERCÍCIO 7

let lista7= [1,2,512,634,3,37,473,,234,67,62,5135]
console.log(lista7)
lista7.pop();
console.log(lista7)

