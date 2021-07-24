function betterThanAverage(classPoints, yourPoints) {
  let clasAvg = classPoints.reduce((a,b) => a + b, 0) / classPoints.length
  return yourPoints > clasAvg
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 53))