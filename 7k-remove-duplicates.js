function solve(arr){
    let narr = []
    for (let i = arr.length - 1; i >= 0; i--){
         if(!narr.includes(arr[i])){
             narr.unshift(arr[i])
         }}
    return narr
}

solve([1,2,1,2,1,2,3])