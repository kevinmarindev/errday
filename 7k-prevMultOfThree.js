const prevMultOfThree = n => {
    
    if(n % 3 == 0) return n
    
  let arr = String(n).split('')
  console.log(arr)
  for (let i = arr.length - 1; i >= 0; i--) {
      console.log(i)
    //   if(arr[i] % 3 == 0) arr.pop()
    //   else if(arr[i] % 3 != 0) break
    arr.pop();
    if(Number(arr.join('')) % 3 == 0) break
    

  }
  console.log(arr)
return Number(arr.join('')) ? Number(arr.join(''))  : null
  
}
console.log(prevMultOfThree(1))