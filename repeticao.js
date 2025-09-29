// EXERCÍCIO 1

for (let i=1; i < 11; i++)
    console.log(i)

// // EXERCÍCIO 2

let soma = 0 
for (let i = 0; i < 101; i++)
    soma += i
    console.log(soma)


// // EXERCÍCIO 3

const numero = 9
for (let i = 1; i <= 10; i++) 
  console.log(`${numero} x ${i} = ${numero * i}`);

// // EXERCÍCIO 4 

let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}
// EXERCÍCIO 5

for (x = 0; x < 51; x++) {
    if (x % 2 == 0){ 
        console.log("O número", x, "é par!"); }
    else console.log("O número", x, "é ímpar!")
}

// EXERCÍCIO 6

const numerro =  6
let fatorial = 1

for (let i = numerro; i >= 1; i --){
    fatorial = fatorial * i
    console.log("O fatorial de", numerro, "é aproximadamente", fatorial)
}