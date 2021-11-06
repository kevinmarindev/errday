function makeString(s){ 
  return s.split(' ').map(item => item[0]).join('')
}

console.log(makeString('K E V I N'))
