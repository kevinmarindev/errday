function incrementer(nums) { 
  let arr = nums.map((item, indx)=> String(item + (indx + 1)));
console.log(arr)
 for (let i = 0; i < arr.length; i++) {
     if(arr[i].length >= 2) arr[i] = arr[i][arr[i].length - 1]
     arr[i] = Number(arr[i])
 }
return arr
}

console.log(incrementer([3,6,9,8,9]))