/**
 * 
1
function shuffleMusicas(musicasTocadas) {
2
}
Sua equipe está trabalhando em um app de streaming de músicas e uma das funcionalidades é criar um embaralhador de músicas. Uma pesquisa feita pela equipe de UX (experiência do usuário) mostrou que essa é uma das funcionalidades mais importantes para os usuários e por isso foi priorizada a criação de um experimento para testar a melhor solução.

A ideia é criar vários embaralhadores diferentes e realizar um teste com partes dos usuários (chamado de teste A/B), onde cada grupo de usuários selecionado recebe uma versão e através de pesquisas e métricas de utilização saberemos qual terá a maior aceitação.

Sua tarefa será desenvolver um desses embaralhadores. Você deve criar uma função que receberá uma lista de pesos que representa as músicas mais ouvidas pelo usuário. Sua função deve retornar uma lista organizada intercalando as músicas mais ouvidas com as músicas menos ouvidas. Por exemplo:

Na situação onde a lista de pesos é: [2, 10, 5, 3] sua função deverá retornar [10, 2, 5, 3]
 */

const musicasTocadas = [2, 10, 5, 3]

function shuffleMusicas(musicasTocadas){
  ordenaArray(musicasTocadas)
  let misturado = []

  let primeiraMusica
  let ultimaMusica 

  for (let musica in musicasTocadas){    
    while (musicasTocadas[musica] >= 0){
      if(musica !== 0 && musica !== 1){
        ultimaMusica = musicasTocadas.pop()
        primeiraMusica = musicasTocadas.shift()
  
        misturado.push(ultimaMusica, primeiraMusica)
      }
    }
  }  
  misturado = misturado.filter((musica) => { return musica !== undefined })
  console.log(misturado)
  return misturado
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

shuffleMusicas(musicasTocadas)