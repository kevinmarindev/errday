function vowelIndices(word){
    let first = word.toLowerCase();
    let second = []
    for (let index = 0; index < first.length; index++) {
        if(first[index] === 'a' || first[index] === 'e' || first[index] === 'i' || first[index] === 'o' || first[index] === 'u' || first[index] === 'y'){
            second.push(index + 1)
        }
    }
    return second
}
    console.log(vowelIndices('yogurt'))

  