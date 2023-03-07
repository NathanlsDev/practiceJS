/*
  recebo uma lista com valores
  ordeno a lista para facilitar encontrar o maior valor

  preciso pegar o maior valor

  preciso saber se esse valor se repete na lista
*/

const candles = [3, 2, 1, 3];

function findHighest(candles) {
  let count = 0;

  candles.sort((a, b) => a - b);
  const highest = candles.at(-1);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === highest) {
      count++;
    }
  }
  console.log(count);
}

findHighest(candles);
