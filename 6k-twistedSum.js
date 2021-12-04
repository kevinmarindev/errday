function twistedSum(n) {
let theRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
let arr = theRange(1,n,1)
let arr2 = arr.map(item => item >= 10 ? String(item).split('').map(item => Number(item)).reduce((prev, curr) => prev + curr, 0) : item)
return arr2.reduce((prev, curr) => prev + curr, 0)

}
console.log(twistedSum(12))