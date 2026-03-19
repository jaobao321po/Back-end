const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

carro.cor = "Prata";
carro.ano = 2024;

console.log(carro);
