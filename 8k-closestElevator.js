function elevator(left, right, call) {
// if(left == rigth) return 'Right'
  let left1 = Math.abs(left - call)
  let right1 = Math.abs(right - call)
  return left1 < right1 ? 'Left' : 'Right'
}
console.log(elevator(0,2,1))