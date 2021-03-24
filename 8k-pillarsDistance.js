function pillars(num_pill, dist, width) {
  return num_pill >= 2 ? (((num_pill -1) * dist) * 100) + (width * (num_pill - 2)) : 0
}

console.log(pillars(11,15,30))