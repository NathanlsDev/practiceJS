function invertString (param){
  const  string = param
  const emptyArray = []
  let result = ''
  
  for (i = 0; i < string.length; i++){
    emptyArray.unshift(string[i])
    result = emptyArray.join('')
  }
  console.log(result)
}

invertString('Lógic Test')