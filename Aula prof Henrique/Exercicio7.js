const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Digite o Ano em que você nasceu: ", (anoNascimento) => {
const anoAtual = new Date().getFullYear();
const idadeAnos = anoAtual - parseInt(anoNascimento);
const idadeMeses = idadeAnos *12;
const idadeDias =  idadeAnos * 365;

console.log(`Você tem ${idadeAnos} anos, ou equivalente a ${idadeMeses} meses e ${idadeDias} Dias de vida.`)

rl.close();
}); 
