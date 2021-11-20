function lastDigit(n, d) {
    let givenArr = String(n).split('')
    let number = givenArr.length - d
    if(number >= 0){
  return givenArr.slice(givenArr.length - d).map(item => Number(item))}
  else return givenArr.slice(0).map(item => Number(item))
}
console.log(lastDigit(1343, 5))