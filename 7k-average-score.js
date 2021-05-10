let arr = [1,2,3,4]
console.log(arr.reduce((accu, current) => {
    let final = 0
    final += accu + current 
    return final 
})

)

function average(scores) {
    return Math.round(scores.reduce((accu, curr) => {
        return accu + curr 
    }, 0) / scores.length)
}
console.log(average([1,2,3,4]))