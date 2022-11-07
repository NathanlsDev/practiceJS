primeNumbers(100)

function primeNumbers (limit){
  for (let number = 2; number <= limit; number++){
    if (numberPrime(number)) { console.log(number) }
  }
}

function numberPrime (number){
  for (let splitter = 2; splitter < number; splitter++){
    if (number % splitter === 0) { return false }
  }
  return true
}