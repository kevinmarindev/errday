const cannonsReady = (gunners) => {
  let f = 0
  let t = 0
    for (const key in gunners) {
    gunners[key] == 'aye' ? t++ : f++ 
}
console.log(f, t)
return f < 1 ? 'Fire!' : 'Shiver me timbers!'
}

console.log(cannonsReady({'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}))

// let eval = {
//     one: true,
//     two: false,
//     three: true,
// };

// console.log(Object.keys(eval).length)

// for (const key in eval) {
    
//     eval[key] ==  ? t++ : f++
// }