function waterbombs(fire, w) {
    if(fire.length < w) return 0
  let regex = new RegExp(`x{1,${w}}`, 'gi') 
let arr = fire.match(regex)
  return arr.length
}
console.log(waterbombs('xxYxx', 3))

