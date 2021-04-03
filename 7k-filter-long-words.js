// Write a function filterLongWords that takes a string sentence and an integer n.

// Return a list of all words that are longer than n.

function filterLongWords(sentence, n) {
    let arrr = []
    sentence.split(' ').forEach(item => {
        if (item.length > n) {
            arrr.push(item)
        }
    })
    return arrr
}

console.log(filterLongWords('ok what is wrong with this crap', 4))


