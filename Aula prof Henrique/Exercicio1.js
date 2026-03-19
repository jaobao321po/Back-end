const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor de A: ", (A) => {
  rl.question("Digite o valor de B: ", (B) => {
    rl.question("Digite o valor de C: ", (C) => {
      A = parseFloat(A);
      B = parseFloat(B);
      C = parseFloat(C);

      let soma = A + B;
      console.log(`A soma entre A e B é: ${soma}`);

      if (soma < C) {
        console.log("A soma é menor que C");
      } else {
        console.log("A soma não é menor que C.");
      }

      rl.close(); 
    });
  });
});
