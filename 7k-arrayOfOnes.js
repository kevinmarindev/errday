function onesCounter(input) {
    let input2 = [...input, 0]
    let flag = true
    let num = 0
    let arr = []
    for (const digit of input2) {
        digit ? flag = true : flag = false
        digit ? num++ : null
        if(flag == false && num >= 1) arr.push(num), num = 0
    }
return arr
}

console.log(onesCounter([1,0,0,1,1,1,0,1,0,1,1,1,1]))
