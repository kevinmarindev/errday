function binaryCleaner(arr) {
    let finalArr = [[],[]]
    arr.forEach((item, index) => {
        item < 2 ? finalArr[0].push(item) : finalArr[1].push(index)
    });
    return finalArr
}
console.log(binaryCleaner([1]))