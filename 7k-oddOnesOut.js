function oddOnesOut(nums) {
  let obj = new Object();
  let arr = new Array();
  nums.forEach(element => {
      console.log(element)
      if(!obj.hasOwnProperty(element)) obj[element] = 1;
      else obj[element]++
  });
  console.log(obj)
  for (const item of nums) {
      if(obj[String(item)] % 2 == 0) arr.push(item)
  }
  return arr
}
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]))