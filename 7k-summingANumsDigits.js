function sumDigits(number) {
    let num = String(Math.abs(number))
    console.log(num)
    return num.split('').map(item => Number(item)).reduce((prev, current) =>prev + current, 0)
}
console.log(sumDigits(99))