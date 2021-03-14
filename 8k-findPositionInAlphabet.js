function position(letter) {
    let newLetter = letter.toLowerCase()
  let alphabet = ['a', 'b', "c", 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let theNum = alphabet.findIndex(item => item == newLetter) + 1
return `Position of alphabet: ${theNum}`
}

console.log(position('B'))
