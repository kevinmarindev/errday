function find_average(array) {
  return array.length == 0 ? 0 :
  array.reduce((a,b) => a + b, 0) / array.length
  
}

console.log(find_average([1,2,3,4]))