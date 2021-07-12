function numberToPower(number, power){
  if(power == 0){
      return 1
  }
  else{
  
    let total = number;
  for (let index = 1; index < power; index++) {
      total += total * number - total
  }
  return total
}
}
console.log(numberToPower(3,4))