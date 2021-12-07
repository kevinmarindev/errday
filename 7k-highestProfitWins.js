function minMax(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return [min, max]
}

console.log(minMax([1]))
