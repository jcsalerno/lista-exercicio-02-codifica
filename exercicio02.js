const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

console.log("Adivinhe o número entre 1 e 100");

function perguntar() {
  rl.question("Digite seu palpite: ", (input) => {
    const palpite = parseInt(input, 10);
    tentativas++;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      console.log("Digite um número válido entre 1 e 100.");
      return perguntar();
    }

    if (palpite < numeroSecreto) {
      console.log("Mais alto!");
      perguntar();
    } else if (palpite > numeroSecreto) {
      console.log("Mais baixo!");
      perguntar();
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
      rl.close();
    }
  });
}

perguntar();
