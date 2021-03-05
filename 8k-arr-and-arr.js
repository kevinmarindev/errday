function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((sum, current)=> sum + current, 0) +
  arr2.reduce((sum,current)=> sum + current, 0); //something went wrong
}
