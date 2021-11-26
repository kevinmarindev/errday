function countRedBeads(n){
    return n <= 2 ? 0 : (n * 2) - 2
}

console.log(countRedBeads(3))