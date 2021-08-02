function sortVowels(s) {
let str = '';
  if(typeof s == 'string'){
      let s2 = s.toLowerCase();
      for (let i = 0; i < s.length; i++) {
          if(s2[i] == 'a' || s2[i] == 'e' || s2[i] == 'i' || s2[i] == 'o' || s2[i] == 'u'){
              str += `|${s[i]}\n`
          }
          else str += `${s[i]}|\n`
          
      }
  }
  else return ''
  return str
}

console.log(sortVowels(null))
