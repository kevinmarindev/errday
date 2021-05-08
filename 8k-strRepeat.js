function repeatStr (n, s) {
    let str = s
  for (let i = 0; i < n -1  ; i++) {
      str += s
  }
  return str
}

console.log(repeatStr(5, 'k'))