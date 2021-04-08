function isVow(a) {
   return  a.map(item => item == 97 ? item = 'a' : item == 101 ? item = 'e' : item == 105 ? item = 'i' : item == 111 ? item = 'o' : item == 117 ? item = 'u' : item = item)
}
 console.log(isVow([97,101,97]))