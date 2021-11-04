// function common(a,b,c){
//  let obj = {}
//  let arr = [...a,...b,...c]
//  let count = 0;
//  for (const num of arr) {
//      if(obj.hasOwnProperty(num)) obj[num]++
//      else obj[num] = 1;
//  }
//  console.log(arr, obj)
//  for (const num in obj) {
     
//      console.log(num, obj[num])
//      if(obj[num] == 3) console.log(num), count += Number(num)
//      else if(obj[num] % 3 == 0) console.log(num), count += (obj[num] / 3) * num
//      console.log(count)
//  }
//  return count
 
// }
function common(a,b,c){
    let count = 0;
    // for (let i = 0; i < a.length; i++) {
    //     if(a.includes(a[i]) && b.includes(a[i]) && c.includes(a[i])) count += a[i]
    // }
    for (const num of a) {
        if(a.includes(num) && b.includes(num) && c.includes(num)) count += num
    }
    return count
}
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]))