function squareDigits(num) {
    let num2 = String(num)
    return Number(Array.from(num2).map(item => item ** 2).join(''))
}

console.log(squareDigits(3212))
