function getAverage(marks){
  return Math.floor(marks.reduce((acc, current) => {
      return ((acc + current)) 
  }) / marks.length)
}

console.log(getAverage([1,2,3,4,5]))