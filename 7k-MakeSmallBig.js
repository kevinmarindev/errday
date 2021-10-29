function smallWordHelper(sentence){
    return sentence.split(' ').map(item => item.length <= 3 ? item.toUpperCase() : item.replace(/[aeiou]/gi, '') ).join(' ')
}

console.log(smallWordHelper('The quick brown fox jumps over the lazy dog'))
