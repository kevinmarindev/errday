function abbrevName(name) {
  let upper = name.toUpperCase()
  name2 = upper.split(' ')
  firtsletter = name2[0][0]
  secondLettr = name2[1][0];
  return `${firtsletter}.${secondLettr}`
}

console.log(abbrevName('kevin marin'))


