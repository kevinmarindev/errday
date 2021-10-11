function cookingTime(eggs) {
  let rounds = Math.ceil(eggs / 8)
  return rounds * 5 
}
console.log(cookingTime(10))