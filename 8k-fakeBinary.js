function fakeBin(x) {
    let str = [];
     for (const char of x) {
        char < 5 ? str.push('0') : str.push('1');
    }
    return str.join('')
}

console.log(fakeBin('123456789'))