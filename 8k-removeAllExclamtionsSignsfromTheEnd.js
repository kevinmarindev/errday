function remove (string) {  
    let i = string.length - 1
    let str2 = string
  if(string[i] != '!') return string
  else{
      do str2 = str2.slice(0, -1), i--;
      while (str2[i] == '!')
      return str2
  }
}
console.log(remove('hi!hi!!!'))
