function alternateCase(s) {
    let ss = ""
    for (const char of s) {
        char == char.toUpperCase() ? ss += char.toLowerCase() : ss += char.toUpperCase();
    }
  return ss
}

console.log(alternateCase('KevIn'));


