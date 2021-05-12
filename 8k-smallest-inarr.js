// function findSmallestInt(args) {
//     let smallest = 100000
//     args.forEach((item, indx, arr) => {
//         if(item < smallest) {
//         smallest = item 
        
//     } })
//     return smallest
//   }


function findSmallestInt(args) {
    return Math.min(...args)
  }

console.log(findSmallestInt([2,20,45,4]))


