var paintLetterboxes = function(start, end) {
  let arr = [0,0,0,0,0,0,0,0,0,0];
  let arr1 = []
  arr2 = []
  arr3 = []
  for (let i = start; i <= end; i++) {
      arr1.push((String(i)))
  }
  console.log(arr1)
  arr2 = arr1.map(item => item.split(''))
  console.log(arr2)
//   arr1 = arr1.flat().map(item => Number(item));
  arr2.forEach(arr => arr.forEach(item => arr3.push(Number(item))))
  console.log(arr3)
  arr3.forEach(item => arr[item]++)
  return arr
}

console.log(paintLetterboxes(125,132))