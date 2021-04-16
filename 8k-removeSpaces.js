function noSpace(x) {
    return x.trim().split('').filter(item => item != " ")
}
console.log(noSpace(' he  llo '))