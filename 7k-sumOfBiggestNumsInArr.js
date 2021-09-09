function largestPairSum(numbers){
    let nums = numbers
   let num1 = Math.max(...nums) 
   let index = nums.indexOf(num1)
   nums.splice(index, 1)
   let num2 = (num1 > 0) ? Math.max(...nums.filter(item => item <= num1)) : Math.max(...nums.filter(item => item <= num1))
   return num1 + num2
}
console.log(largestPairSum([-100,-29,-24,-19,19]))
