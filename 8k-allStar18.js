function strCount(letter, str) {
  let regex = new RegExp(`${str}`, 'g')
  return letter.match(regex) === null ? 0 : letter.match(regex).length
}
console.log(strCount('kevin Marin', ' '))