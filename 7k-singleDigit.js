function singleDigit(n) {
    if(n <= 9) return n
  let value = n.toString(2).split('').map(item => Number(item))
    .reduce((previous, current) => previous + current, 0) 
  return value <= 9 ? value : singleDigit(value)
}

console.log(singleDigit(5))