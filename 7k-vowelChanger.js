function vowelChange(str, vow) {
    return str.replace(/[aeiou]/g, vow)
}

console.log(vowelChange('kevin you are the best', 'u'))
