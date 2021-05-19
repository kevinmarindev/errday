// function isIsogram(str){
//     console.log(str.length)
// let nstr = str.toLowerCase()
// console.log(nstr)
//   let myset = new Set()
//   for (let i = 0; i <= nstr.length; i++) {
//       myset.add(nstr[i]) 
//   }
//   console.log(myset)
//   if(nstr.length == myset.size - 1){
//       return true
//   }
//   else return false
// }
function isIsogram(str){
  let nstr = str.toLowerCase()
  let myset = new Set()
  for (let i = 0; i <= nstr.length; i++) {
      myset.add(nstr[i]) 
  }
  return nstr.length == (myset.size - 1) ? true : false ;
}

console.log(isIsogram('kevEn'))