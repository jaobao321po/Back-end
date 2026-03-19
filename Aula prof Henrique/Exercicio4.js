const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularIMC() {
  rl.question('Digite seu peso em KG: ', (peso) => {
    rl.question('Digite sua altura em metros: ', (altura) => {
      peso = parseFloat(peso);
      altura = parseFloat(altura);

      const imc = peso / (altura * altura);

      if (imc < 18.5) {
        console.log("Abaixo do peso");
      } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso ideal (parabéns)");
      } else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Levemente acima do peso");
      } else {
        console.log("Acima do peso");
      }

      rl.close();
    });
  });
}

calcularIMC();
