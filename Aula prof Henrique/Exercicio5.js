const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o nome do aluno: ", (nome) => {
  rl.question("Digite a primeira nota: ", (nota1) => {
    rl.question("Digite a segunda nota: ", (nota2) => {
      rl.question("Digite a terceira nota: ", (nota3) => {
        rl.question("Digite a quarta nota: ", (nota4) => {
          nota1 = parseFloat(nota1);
          nota2 = parseFloat(nota2);
          nota3 = parseFloat(nota3);
          nota4 = parseFloat(nota4);

          let media = (nota1 + nota2 + nota3 + nota4) / 4;
          let status = media >= 6 ? "Aprovado" : "Reprovado";

          console.log(`Aluno: ${nome}`);
          console.log(`Média final: ${media.toFixed(2)}`);
          console.log(`Status: ${status}`);

          rl.close();
        });
      });
    });
  });
});
