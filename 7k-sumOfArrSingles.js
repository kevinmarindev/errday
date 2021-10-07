function repeats(arr) {
    let obj = {};
    let total = 0;
    for (const item of arr) {
        if(obj.hasOwnProperty(item)) obj[item]++
        else obj[item] = 1
    }
    for (const key in obj) {
        if(obj[key] == 1) total += Number(key)
    }
    return total
}
console.log(repeats([4,5,7,5,4,8]))