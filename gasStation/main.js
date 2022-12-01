/**
Deve indicar ao condutor o posto mais distante possível dentro do limite atual de combustível.
E caso não exista posto de gasolina, retornar -1

você terá as seguintes informações:
consumo médio de combustível,
quantidade de combustível restante no veículo,
e um array contendo distâncias dos postos de gasolinas.

Exemplo:
Combustível (em litros): 2
Consumo médio (km/l): 8
Postos de Gasolina (km): [2, 15, 22, 10.2]
 */

const combustivel = 2 // litros
const consumo = 8 //8 km por litro
const postosDeGasolina = [2, 15, 22, 10.2,] // distancias

function ultimaParada(combustivel,consumo,postosDeGasolina){
  ordenaArray(postosDeGasolina)

  const alcance = combustivel*consumo
  const distancia = []

  for (let i = 0; i < postosDeGasolina.length; i++){
    if (alcance >= postosDeGasolina[i]){
      distancia.push(postosDeGasolina[i])
    } else {
      if (alcance < postosDeGasolina[[i].length -1]){
        console.log(-1)
        return -1
      }
    }
  }
  console.log(distancia.at(-1))
  return distancia.at(-1)
}

function ordenaArray (array){
  let desordenado = true
  while (desordenado) {
    desordenado = false
    for (let i = 0; i < array.length; i++){
      if (array[i] > array[i + 1]){
        const guardaPosicao = array[i]
        array[i] = array[i + 1]
        array[i + 1] = guardaPosicao
        desordenado = true
      }
    }
  }
}

ultimaParada(combustivel,consumo,postosDeGasolina)