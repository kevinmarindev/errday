function removeChar(str) {
    let str2 = str.split('');
  if(str2.length > 2) return str2.filter((item, idx) => idx != 0 && idx != str2.length - 1).join('')
  else return ''
}

console.log(removeChar('kevin'))
