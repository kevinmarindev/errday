function divCon(x) {
    let nums = 0, strnums = 0
    for (const char of x) {
        if(typeof char == 'number') nums += char
        else strnums += Number(char)
    }
    return nums - strnums
}

console.log(divCon([9, 3, '7', '3']))
