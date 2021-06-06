function separateTypes(input) {
let theReturn = {};

input.forEach((item)=>{
    console.log(typeof item)
    if(!theReturn[typeof item]){
        theReturn[typeof item] = []
    }
    if(theReturn[typeof item]){
         typeof item === 'number' ? theReturn.number.push(item) : typeof item === 'string' ? theReturn.string.push(item) : typeof item === 'boolean' ? theReturn.boolean.push(item) :
    null;
    }
    else null
})

return theReturn


// function separateTypes(input) {
//   return input.reduce((types, value) => {
//     const valueType = typeof value
//     const type = types[valueType]
//     types[valueType] = type ? [...type, value] : [value]
//     return types
//   }, {})
// }

// let arr = ['k', 'e', 'v']

// let tt = arr.reduce((accumulator, current) => {
//     return accumulator + current 
// }, {})

// console.log(tt)


}

console.log(separateTypes(['a', 1, 2, 'b', false]))