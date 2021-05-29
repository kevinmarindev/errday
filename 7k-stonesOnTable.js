function solve(stones) {
  let count = 0;
  for (let i = 1; i <= stones.length; i++) {
        stones[i] == stones[i - 1] ? count++ : null
  }
  return count
}
console.log(solve('RRGGBB'))