function compress(sentence) {
    let arr = sentence.toLowerCase().split(' ')
    let arr2 = []
    let arr3 = []
    arr.forEach(item => {
        if(!arr2.includes(item)) arr2.push(item), arr3.push(arr2.indexOf(item))
        else arr3.push(arr.indexOf(item))
        
    })
    return arr3
}

console.log(compress('The number 0 is such a strange number Strangely it has zero meaning'))

//012345617891011