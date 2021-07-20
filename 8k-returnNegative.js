function makeNegative(num) {
  return num == 0 ? 0 : num < 0 ? num : num > 0 ? Number(`-${num}`) : null;
}

console.log(makeNegative(0))