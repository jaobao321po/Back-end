const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (numero) => {
    numero = parseFloat(numero);

    if (numero > 0) {
        console.log("O número é positivo.");
    } else {
        console.log("O número é negativo ou zero.");
    }

    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }

    rl.close();
});