var makeEveryLetterAfterXCaps = function (str, letter) {
  let finalStr = str.split('')
for (let i = 0; i < finalStr.length -1; i++) {
    if (finalStr[i] == letter) finalStr[i + 1] = finalStr[i + 1].toUpperCase()
}
  return finalStr.join('')
}
console.log(makeEveryLetterAfterXCaps('where are they now', ' '))

