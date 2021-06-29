function evenLast(numbers) {
  let first = 0; 
numbers.forEach((item, indx)=> {
    if(indx % 2 == 0){
     first += item   
    }
    else first + 0
})
return first == 0 ? 0 : first * numbers[numbers.length -1]


}
console.log(evenLast([2,3,4,5]))