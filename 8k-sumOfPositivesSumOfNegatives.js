function countPositivesSumNegatives(input) {
    if(input == false) return []
    let arr =  Array.of(0,0)
    // if(arr[0] == false) return []
    // console.log(arr)
    for (const num of input) {
        if(num > 0) arr[0]++
        else if(num < 0) arr[1] += num
    }
    if(arr[0] == false && arr[1] == false) return []
    return arr
}

console.log(countPositivesSumNegatives([null]))