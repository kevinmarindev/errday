function findMultiples(integer, limit) {
  let arr = []
  let i = 1
  let stop = 0
  while(stop < limit) arr.push(integer * i), stop = integer * i, i++
  return arr.filter(item => item <= limit)
}
console.log(findMultiples(5,7))