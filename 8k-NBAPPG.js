// function pointsPer48(ppg, mpg) {
//   if(ppg === 0 || mpg === 0){
//     return 0
//   }
//   else{
//     return Number((ppg / mpg * 48).toFixed(1))
//   }
// }
// pointsPer48(12,0)
//

// function pointsPer48(ppg, mpg) {
//   return ppg === 0 || mpg === 0 ? 0 : Number((ppg / mpg * 48).toFixed(1))
// }
// pointsPer48(25, 0)
//
// let spl = "the car is red"
// console.log(spl.length)
// let spt = spl.split(" ")
// console.log(spt.length)
// console.log(spt[0].length)

function findLongest(str) {

  var spl = str.split(" ");
  let longest = 0

  for (let i = 0; i < spl.length; i++){
    if (spl[i].length > longest) {
      longest = spl[i].length

    }}
    console.log(longest)
    console.log(spl[1].length)
    console.log(spl.length)
    console.log(spl)

}
findLongest('this is the house of habukah')
