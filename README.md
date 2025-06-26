# Exercícios JavaScript - Estruturas, Funções, Arrays e Objetos

Este repositório contém a resolução de uma série de exercícios em JavaScript na formação em desenvolvedor Full Stack Júnior da Codifica.
Organizados em três seções principais: Estruturas de Controle Avançadas, Funções e Recursão, e Arrays e Objetos Complexos.

---

## Seção 1: Estruturas de Controle Avançadas

### 1. Validação de Datas
Função `ehDataValida(dia, mes, ano)` que verifica se a data fornecida é válida, considerando o número correto de dias para cada mês e anos bissextos para fevereiro.

### 2. Jogo de Adivinhação
Script que gera um número aleatório entre 1 e 100 e pede ao usuário para adivinhar. Usa um loop `while` para repetir até o acerto, contando tentativas e indicando se o palpite deve ser maior ou menor.

### 3. Palavras Únicas
Dada uma string, extrai todas as palavras que aparecem apenas uma vez, utilizando estruturas condicionais (`if/else`) e loops `for`.

---

## Seção 2: Funções e Recursão

### 4. Fatorial Recursivo
Implementação da função `fatorial(n)` de forma recursiva, tratando casos em que `n < 0` lançando um erro, e `n === 0` retornando 1.

### 5. Debounce
Função `debounce(fn, delay)` que recebe uma função `fn` e um tempo de delay em milissegundos, retornando uma nova função que só executa `fn` se não for chamada novamente dentro do intervalo especificado.

### 6. Memoization
Função `memoize(fn)` que armazena em cache os resultados anteriores da função `fn` para otimizar chamadas repetidas com os mesmos argumentos, retornando resultados instantâneos.

---

## Seção 3: Arrays e Objetos Complexos

### 7. Mapeamento e Ordenação
Dado um array de objetos `produtos` com propriedades `nome` e `preco`, criar uma função que retorna um array apenas com os nomes, ordenados por preço crescente, utilizando os métodos `map` e `sort`.

### 8. Agrupamento por Propriedade
Dado um array `vendas` contendo objetos com `cliente` e `total`, usar o método `reduce` para gerar um objeto onde cada chave é o nome do cliente e o valor é a soma total das compras desse cliente.

### 9. Conversão Entre Formatos
- `paresParaObjeto(pares)`: recebe um array de pares `[ [chave, valor], ... ]` e retorna o objeto equivalente.
- `objetoParaPares(obj)`: recebe um objeto e retorna um array de pares `[ [chave, valor], ... ]`.

---

## Como usar

Cada exercício está implementado em sua respectiva função ou script, prontos para serem testados diretamente em ambiente JavaScript (Node.js, navegadores, IDEs como VS Code ou IntelliJ IDEA).

---

## Contato

Para dúvidas ou sugestões, entre em contato.

---

# lista-exercicio-02-codifica
