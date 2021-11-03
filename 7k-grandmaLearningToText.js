function textin(s){
    let sOne =  s.replace(/too|two/gi, '2')
    return sOne.replace(/to/gi, '2')
}
console.log(textin('see you tomorrow'))