function removeExclamationMarks(s) {
  return s.split('').filter(char => char != '!').join('')
}
console.log(removeExclamationMarks('kevin!!!'))
