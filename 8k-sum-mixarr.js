function sumMix(x){
    return x.map(item => Number(item)).reduce((acc, curr) => { return acc + curr}, 0)
}
console.log(sumMix([1,'2',3, '4', 5]))