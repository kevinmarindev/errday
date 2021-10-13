function removeSmallest(numbers) {
    let numbers2 = numbers
  let min = Math.min(...numbers2);
  let indx = numbers2.findIndex(item => item == min);
numbers2.splice(indx, 1)
return numbers2
}

console.log(removeSmallest([1,2,3,4,5]))
