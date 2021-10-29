// function consecutiveOnes(nums) {
//    let arr = []
//    let count = 0;
//    for (const num of nums) {
//        if(num == 1) count++
//        if(num == 0 && count >= 1) arr.push(count), count = 0;
//    }
//    count >= 1 ? arr.push(count) : arr.push(0)
// return Math.max(...arr)
// }
// return nums.includes(1) ? String(Math.max(...nums.join('').match(/1+/g))).split('').map(item => Number(item)).reduce((prev, curr)=> prev + curr, 0) : 0

function consecutiveOnes(nums){
    return nums.includes(1) ? Math.max(...nums.join('').match(/1+/g).map(item => item.length)) : 0
}
console.log(consecutiveOnes([0,0,1]))