function median(array) {
    let arr = array.sort((a, b) => a - b)
    console.log(arr)
    if(array.length % 2 == 0) return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
    else return arr[Math.floor(arr.length / 2)]
}
console.log(median([1,2,23,10,4]))