function validSpacing(s) {
 let count = 0;
    for (const char of s) {
      char == ' ' ? count ++ : null
  }
return s == ' '  || count > 1 ? false : true
}

console.log(validSpacing(''))


//correct solution below
function validSpacing(s) {
  return s.trim() == s && !s.includes("  ");
}
