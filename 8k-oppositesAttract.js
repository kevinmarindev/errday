function lovefunc(flower1, flower2){
  if(flower1 % 2 == 1 && flower2 % 2 == 0 ) return true
  else if(flower1 % 2 == 0 && flower2 % 2 == 1 ) return true
  else return false 
}

console.log(lovefunc(2, 2))