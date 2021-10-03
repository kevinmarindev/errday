var FilterString = function(value) {
  let arr = []
  for (const char of value) {
      if(parseInt(char)) arr.push(Number(char))
  }
  return Number(arr.join(''))
}
console.log(FilterString('a1b2c3'))
