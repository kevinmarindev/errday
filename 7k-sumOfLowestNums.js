function sumTwoSmallestNumbers(numbers) {
  let numOne = Math.min(...numbers)
  let indx = numbers.findIndex(numOne => numOne)
  let arr2 = numbers;
  arr2.splice(indx, 1)
  let numTwo = Math.min(...arr2)
  return numOne + numTwo
}
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))