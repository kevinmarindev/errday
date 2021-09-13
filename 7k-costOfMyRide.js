function insurance(age, size, numofdays) {
    if(numofdays < 0) return 0
    else{
  let total = 0
  age < 25 ? total += 10 * numofdays : null
  size == 'economy' ? total += 0 : size == 'medium' ? total += 10 * numofdays : total += 15 * numofdays;
  return total < 0 ? 0 : total + (numofdays * 50)
    }
}

console.log(insurance(42, 'my custom car', 7))
