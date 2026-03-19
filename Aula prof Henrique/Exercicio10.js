const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let frutas = ["Maça", "Banana", "uva"];

frutas.push("Morango");

let meio = Math.floor(frutas.length / 2);
frutas.splice(meio, 0, "laranja");

console.log(frutas);
