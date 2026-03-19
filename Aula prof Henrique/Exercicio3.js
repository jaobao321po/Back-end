const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor do salário mínimo: R$ ", (salario_minimo) => {
    rl.question("Digite o valor do seu salário: R$ ", (salario_usuario) => {
        salario_minimo = parseFloat(salario_minimo);
        salario_usuario = parseFloat(salario_usuario);

        const quantidade_salarios_minimos = salario_usuario / salario_minimo;

        console.log(`O usuário ganha ${quantidade_salarios_minimos.toFixed(2)} salários mínimos.`);

        rl.close(); 
    });
});
