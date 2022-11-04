function sumByMult (num){
  const filtered = []

  for (let i = 0; i <= num; i++){
    if (i % 3 === 0 || i % 5 === 0){
      filtered.push(i)
    }
  }

  const total = filtered.reduce((prev, current) => prev + current)
  console.log(total)
}

sumByMult(10)