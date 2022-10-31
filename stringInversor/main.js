const  string = 'Lógic test'
const emptyArray = []
let result = ''

for (i = 0; i < string.length; i++){
  emptyArray.unshift(string[i])
  result = emptyArray.join('')
}

console.log(result)