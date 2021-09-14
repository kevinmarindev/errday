function descendingOrder(n) {
    let n1 = n.toString()
  let arr1 = Array.from(n1).map(item => Number(item))
  return Number(arr1.sort((a, b) => b - a).join(''))
}
console.log(descendingOrder(147591))