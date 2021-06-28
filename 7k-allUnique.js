function hasUniqueChars(str) {
    console.log(str.length)
let setty = new Set
      for (let i = 0; i < str.length; i++) {
      setty.add(str[i])
  }
 return setty.size == str.length ? true : false
}
console.log(hasUniqueChars('++-'))