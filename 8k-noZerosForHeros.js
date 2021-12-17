function noBoringZeros(n) {
  if(n == 0) return 0
  let number = String(n).replace(/0/gi, ' ').trimEnd()
  return Number(number.replace(/ /gi, 0))
}
console.log(noBoringZeros(100500))