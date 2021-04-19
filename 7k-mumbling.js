// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function accum(s){
//     let newar = Array(s)
//     let newarrtwo = []
//     let finalarray = []
//     for (let index = 0; index < s.length; index++) {
//         newarrtwo.push(newar[0][index].toUpperCase())
//     }
//     newarrtwo.forEach((item, idx) =>{           
//        for (let i = 0; i < idx; i++) {
//             newarrtwo[idx] += item.toLowerCase()
//         }
//     })
//     newarrtwo.map(it=>{
//         finalarray.push(it)
//     })
//     let ss = finalarray.join('-')
    
//     return ss
    
// }

function accum(s) {
    return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
  }
console.log(accum('abcd'))

// let copyyy = ['d', 'y', 'w']

// let trace = copyyy.map(item => item.toUpperCase())
// console.log(trace)

 



// function sike(car){
//     car.forEach((item, index)=> {
//          car[index] = 'ok' + item 
//     })
//     console.log(car)
// }

// sike(['y', 'k'])