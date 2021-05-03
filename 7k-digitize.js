function digitize(n) {
    return n.toString().split('').map(item => {
        return Number(item)
    })
}

console.log(digitize(23443))