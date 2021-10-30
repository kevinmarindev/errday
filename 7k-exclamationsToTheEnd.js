function remove(s){
    if(!s.includes('!')) return s
  let count = s.match(/[!]/g).length
  let ss = s.replace(/[!]/g, '')
  for (let i = 0; i < count; i++) {
      ss += '!'
      
  }
  
return ss
}

console.log(remove("!Hi Hi!! Hi"))