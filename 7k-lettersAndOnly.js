function removeChars(s) {
    let regex = /[^A-Z]/gi
  return s.split(' ').map(item => item.replace(regex, '')).join(' ')
}

console.log(removeChars("that's a pie$ce o_f p#ie!"))