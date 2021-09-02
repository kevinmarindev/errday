function swapVowelCase(str) {
    let str2 = str.split('')
    for (let i = 0; i < str2.length; i++) {
        if(str2[i].charCodeAt() >= 97) str2[i] = str2[i].replace(/[aeiou]/, str2[i].toUpperCase()) 
        else str2[i] = str2[i].replace(/[AEIOU]/, str2[i].toLowerCase()) 
    }
    return str2.join('')
}
console.log(swapVowelCase('aBaB III'))