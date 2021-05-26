function maskify(cc) {
    let arr = Array.from(cc);
    for (let i = 0; i <= arr.length - 5; i++) {
        arr[i] = '#'
    }
    return arr.join('')
}

console.log(maskify('kevin'))
