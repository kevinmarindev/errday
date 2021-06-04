function paperwork(n, m) {
  return m < 0 || n < 0 ? 0 : n * m 
}
console.log(paperwork(5, 5))