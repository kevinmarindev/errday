function reverseBits (n) {
  return parseInt(Array.from(n.toString(2)).reverse().join(''), 2)
}

