const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
const numerosUnicos = [];
const quantidadeDesejada = 5;

while (numerosUnicos.length < quantidadeDesejada) {
    let numero = Math.floor(Math.random() * 101 ); {
        numerosUnicos.push(numero);
    }
}
console.log("os 5 valores aleatorios unicos são:");
console.log(numerosUnicos);
