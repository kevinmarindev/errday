// function beggars(values, n){
// let neparr = [0,0,0]
// // let secondarr = [1,2,3,4,5,6,7,8]
// let secondarr = values
// let counter = 2
// for (let index = 0; index < secondarr.length; index++) {
    
//     if(counter > 0){
//     neparr[counter] += secondarr[index]
//     counter--
//     console.log(counter)
//     }
//     else if (counter == 0){
//         neparr[counter] += secondarr[index]
//         counter = 2
//         console.log(counter)
        
//     }
    
// }
// console.log(neparr)
// }
// beggars([1,2,3,4,5,6,7,8])


function beggars(values, n){
let neparr = Array(n).fill(0)
// let f = 0
let counter = n - 1
// while(f < neparr.length){
//     neparr[f] = 0
//     f++
// }
for (let index = 0; index < values.length; index++) {
    
    if(counter > 0){
    neparr[counter] += values[index]
    counter-- }
    else if (counter == 0){
        neparr[counter] += values[index]
        counter = n - 1}
}
console.log(neparr.reverse())
}

beggars([1,2,3,4,5,6,7,8], 2)