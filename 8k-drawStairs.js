function drawStairs(n) {
  let str = 'I\n '
  let i = 2
  let space = ' '
  if(n <= 1) return str.trim()
  while (i <= n) str +=  `I\n${space.repeat(i)}`, i++;
  return str.trim()
}

console.log(drawStairs(5))