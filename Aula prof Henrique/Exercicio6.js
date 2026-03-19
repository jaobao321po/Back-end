const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor do produto: R$", (valor) => {
  valor = parseFloat(valor);

  rl.question("Escolha a forma de pagamento (1: À vista em Dinheiro ou Pix, 2: À vista no cartão de crédito, 3: Parcelado em 2 vezes, 4: Parcelado em 3 vezes ou mais): ", (opcao) => {

    let valorFinal;
    let parcelas = 0;
    let juros = 0;
    
    switch (opcao) {
      case '1':
        valorFinal = valor - (valor * 0.15);
        console.log(`Pagamento à vista em Dinheiro ou Pix: R$ ${valorFinal.toFixed(2)} (Desconto de 15%)`);
        break;

      case '2':
        valorFinal = valor - (valor * 0.10); 
        console.log(`Pagamento à vista no cartão de crédito: R$ ${valorFinal.toFixed(2)} (Desconto de 10%)`);
        break;

      case '3':
        valorFinal = valor;
        console.log(`Pagamento parcelado em 2 vezes: R$ ${valorFinal.toFixed(2)} (Sem juros)`);
        break;

      case '4':
        valorFinal = valor + (valor * 0.10);
        parcelas = 3;
        console.log(`Pagamento parcelado em 3 vezes ou mais: R$ ${valorFinal.toFixed(2)} (Juros de 10%)`);
        break;

      default:
        console.log("Opção inválida!");
        break;
    }

    rl.close();
  });
});
