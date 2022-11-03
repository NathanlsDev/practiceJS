function pairOdd (num){
  for (let i = 1; i <= num; i++){
    if (i % 2 === 0){
      console.log(`${i} is pair`)
    } else {
      console.log(`${i} is odd`)
    }
  }
}
pairOdd(10)