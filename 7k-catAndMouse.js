function catMouse(x){
    let count = 0;
    let arr = Array.from(x);
    arr.forEach(item => item == '.' ? count++ : count + 0)
    return count <= 3 ? 'Caught' : 'Escaped'
}
