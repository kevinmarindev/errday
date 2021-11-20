function inAscOrder(arr) {
  let theReturn = arr.some((item, idx, arr)=> item > arr[idx + 1])
  return theReturn ? false : true
}
console.log(inAscOrder([1,2,3,4,5,1]))