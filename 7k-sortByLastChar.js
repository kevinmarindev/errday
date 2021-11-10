// function last(x){
//    let arr = []
//     let arrOne = x.split(' ')
//     console.log(arrOne)
//     let arrTwo = arrOne.map(item => item[item.length - 1].charCodeAt()).sort()
//     console.log(arrTwo)
//     for (const num of arrTwo) {
//         arrOne.forEach(item => {
//             if(item[item.length - 1].charCodeAt() == num) arr.push(item)
//         })
//     }
//     console.log(arr)
// }
function last(x){
    return x.split(' ').sort((a, b) => a[a.length - 1].charCodeAt() - b[b.length - 1].charCodeAt())
}
console.log(last('man i need a taxi up to ubud'))