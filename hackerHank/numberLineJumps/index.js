function kangaroo(x1, v1, x2, v2){
  const h = x2 - x1

  if (v1 > v2 && h % (v1 - v2) === 0){
    return 'YES'
  }

  return 'NO'

}