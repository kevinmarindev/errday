function nthChar(words){
    return words.map((item, indx) => item[indx]).join('')
}

console.log(nthChar(['yoda', 'best', 'has']))