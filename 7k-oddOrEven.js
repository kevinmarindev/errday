function oddOrEven(array) {
let total = array.reduce((acc, current) => acc + current, 0)
console.log(total)
if(array.length == 0 || total == 0 || total % 2 == 0) return 'even'
else if(total % 2 == 1) return 'odd'
}

console.log(oddOrEven([0,1,-4]))