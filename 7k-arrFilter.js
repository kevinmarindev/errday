function getEvenNumbers(numbersArray){
  return numbersArray.filter(item => item == 0 ? true : item % 2 == 0 ? true : null)
}

console.log(getEvenNumbers([0,13,15]))