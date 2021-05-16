function solution(string){
    let nuevostr = string
    for (let index = 1; index < string.length; index++) {
          if(/[A-Z]/.test(string[index])){
              let matchone = string[index]
              console.log(matchone)
              let match = " " + string[index].toLowerCase()
              console.log(match)
              console.log(nuevostr)
              nuevostr = nuevostr.replaceAll(matchone, match)
              console.log(nuevostr)
          }
          else continue
    }
  return nuevostr
}
solution('SeeSmallSeeWeek')


// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));

// }