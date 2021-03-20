function calculator(a, b, sign) {
    return sign == '+' ? a + b : sign == '-' ? a - b : sign == '*' ? a * b : sign == '/' ? (a / b) : 'unknown value'
}

console.log(calculator(2,2,'/'))
