function mango(quantity, price){
    let firts = quantity * 2/3
    let second = firts.toFixed(0)
    return second * price
}

console.log(mango(3, 3))