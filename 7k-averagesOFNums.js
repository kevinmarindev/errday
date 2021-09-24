function averages(numbers) {
    if(numbers == false) return []
    if(number == null) return []
    if(numbers.length == 1) return []
    let arr = []
    numbers.forEach((item, index) => {
        arr.push((item + numbers[index + 1])/2)
    });
    arr.pop()
    return arr
}
console.log(averages([1,3,5,1,-10]))