function freqSeq(str, sep) {
    let obj = {};
    let str2 = ''
    for (const char of str) {
        if(obj.hasOwnProperty(char))obj[char]++;
        else obj[char] = 1
    }
    for (const char of str) {
        if(obj.hasOwnProperty(char)) str2 += obj[char]
    }
    return str2.split('').join(sep)
}

console.log(freqSeq('hello world', '-'))