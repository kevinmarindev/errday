function diffBig2(arr) {
    let arrOne = arr
    let max = Math.max(...arr);
    let index = arr.findIndex(item => item == max)
    arrOne.splice(index, 1)
    console.log(max, arrOne)
    let nextMax = Math.max(...arrOne)
    console.log(nextMax)
    return max - nextMax
}

console.log(diffBig2([8,8,3]))