function moveVowel(input) {
    let matching = input.match(/[aeiou]/gi)
    let str = input.replace(/[aeiou]/ig, '')
    str += matching.join('')
    return str  
}
console.log(moveVowel('kevina'))

