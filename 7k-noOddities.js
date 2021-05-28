function noOdds( values ){
    let sett = Array()
  values.forEach(item => item == 0 || item % 2 == 0 || item % 2 == -0 ? sett.push(item): null)
  return sett
}

console.log(noOdds([-37,-44,183,115,57,-105,-91,73,140,-41,183,-117,138,-51,36,17,-193,-1,50,114,114,136,-192,-47,-68,4,196,122,-23,200,-171,107,40,15,-155,190]))

// console.log(-2 % 2)