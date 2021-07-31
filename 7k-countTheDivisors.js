function getDivisorsCnt(n) {
    let array = []
  for (let i = 1; i <= n; i++) {
      n % i == 0 ? array.push(i) : null
  }
  console.log(array)
return array.length
}

console.log(getDivisorsCnt(30))
