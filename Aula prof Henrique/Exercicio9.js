const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor do salário bruto: ", (bruto) => {
  rl.question("Digite o percentual de desconto do INSS: ", (percentual) => {
    
    let salarioBruto = parseFloat(bruto);
    let inss = parseFloat(percentual);
    
    let valorDesconto = salarioBruto * (inss / 100);
    let salarioLiquido = salarioBruto - valorDesconto;

    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
    
    rl.close();
  });
});
