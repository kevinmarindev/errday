function switcheroo(x){
    let finalStr = x.replaceAll('a', 'B').replaceAll('b', 'a').toLowerCase()
    return finalStr
}

console.log(switcheroo('babacaa'))