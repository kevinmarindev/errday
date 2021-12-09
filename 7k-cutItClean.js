var cut = function(len, num) {
    let arr = Array(num)
  let amountToPutInArr = Math.floor(len / num)
  let leftAmount = len - (amountToPutInArr * num)
  arr.fill(amountToPutInArr)
  for (let index = 0; index < leftAmount; index++) {
      arr[index]++
  }
  console.log(arr, leftAmount)
}
console.log(cut(100, 2))