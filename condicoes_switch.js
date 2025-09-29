// EXERCÍCIO 1

let simular = 11

if (simular < 12) {
    console.log("Criança")
}
else if (simular >= 12 && simular < 18) {
    console.log("Adolescente")
}
else if (simular > 17 && simular < 59 ) {
    console.log("Adulto") }
else (simular > 59); {
    console.log("Idoso") }

// EXERCÍCIO 2

let ano = 2025

if (ano / 4 == 0 && ano / 100 != 0 | ano / 400 == 0) {
    console.log("Bissexto")
} 
else {
    console.log("Não é bissexto")
}

// EXERCÍCIO 3 

let numerro1 = 5
let numerro2 = 2
let operacao = "+";
switch (operacao) {
    case "+":
        console.log("Você selecionou soma, o resultado é:", numerro1 + numerro2 );
        break;
    case "-":
        console.log("Você selecionou subtração, o resultado é:", numerro1 - numerro2);
        break;
    case "*":
        console.log("Você selecionou multiplicação, o resultado é:", numerro1 * numerro2);
        break;
    case "/":
        console.log("Você selecionou divisão, o resultado é:", numerro1 / numerro2);
        break;
        default:
            console.log("Seleção inválida, o resultado é:");
}

// EXERCÍCIO 4

let dia = 5;
switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
    console.log("Dia inválido");
        }

// EXERCÍCIO 5

let numeroex = 5;
switch (dia) { 
    case 1:
        console.log("A sua nota foi: F");
        break;
    case 2:
        console.log("A sua nota foi: F");
        break;
    case 3:
        console.log("A sua nota foi: D");
        break;
    case 4:
        console.log("A sua nota foi: D");
        break;
    case 5:
        console.log("A sua nota foi: C");
        break;
    case 6:
        console.log("A sua nota foi: C");
        break;
    case 7:
        console.log("A sua nota foi: B");
        break;
    case 8:
        console.log("A sua nota foi: B");
        break;
    case 9:
        console.log("A sua nota foi: A");
        break;
    case 10:
        console.log("A sua nota foi: A");
        break;
    default:
    console.log("Número inválido");
        }