/*
Ter mais controle sobre os valores dos produtos vendidos.

Descobrir o maior e o menor valor dos produtos vendidos em um período de tempo, para cada vendedor.

Os valores das vendas que devem ser consideradas podem variar entre 20 e 500 reais e estão agrupados por vendedores.

Além disso, deve-se ignorar as devoluções, que estão indicadas com o valor 0.

A sua função/método deverá receber uma lista vendas agrupadas por vendedores:
[[200, 100], [300]]

e retornar um array onde a primeira posição contém o menor valor e a segunda posição o maior valor [100, 300]

Mas preste atenção! Algum vendedor pode não ter realizado vendas no período.
*/
const vendedores = [[200, 100],[250],[300],[15,13,18],[700,900],[0,1],[800]]

function retornaMenorEMaiorValorDeVendas(tickets) {
  const vendasGeral = []

  for (let vendedor in tickets){
    for (let i = 0; i < tickets[vendedor].length; i++){
      if (tickets[vendedor][i] > 20 && tickets[vendedor][i] < 500){
        vendasGeral.push(tickets[vendedor][i])
      }
    }
  }
  ordenaArray(vendasGeral)

  const ulitmoElemento = vendasGeral.pop()
  const primeiroElemento = vendasGeral.shift()
  const vendasFiltradas = []

  vendasFiltradas.push(primeiroElemento,ulitmoElemento)
  console.log(vendasFiltradas)  
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


retornaMenorEMaiorValorDeVendas(vendedores)