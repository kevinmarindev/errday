function sum(array) {
  return array.reduce((pre, curr) => pre + curr, 0)
}

console.log(sum([1,2,3,4,5]))