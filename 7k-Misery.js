function paul(x){
    let count = 0
    x.forEach((item, index) => {
       item == 'kata' ? count += 5 : item == 'Petes kata' ? count += 10 : item == 'life' ? count += 0 : item == 'eating' ? count += 1 : null;
    });
    return count < 40 ? 'Super happy!' : count < 70 ? 'Happy!' : count < 100 ? 'Sad!' : count > 100 ? 'Miserable!' : null; 
}
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']))