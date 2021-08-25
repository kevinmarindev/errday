function ensureQuestion(s) {
  if(s.match(/[?]/g)) return s
  else return s + '?'
}

console.log(ensureQuestion('kevin'))
