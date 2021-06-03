function bald(x){
let count = 0
 let arr = [];
for(let i = 0; i < x.length; i++){
     x[i] == '/' ? count++ : null
}
// for (let i = 0; i < x.length; i++) {
//     x[i] == '/' ? arr.push(xx.replace(/[/]/g, '-'), count == 0 ? 'Clean!' : count == 1 ? 'Unicorn!' : count == 2 ? 'Homer!' : count >= 3 ? 'Careless!' : count > 5 ? 'Hobo!' : null) : null
    
// }
arr.push(x.replace(/[/]/g, '-'), count == 0 ? 'Clean!' : count == 1 ? 'Unicorn!' : count == 2 ? 'Homer!' : count >= 3 && count <= 5 ? 'Careless!' : count > 5 ? 'Hobo!' : null) 
return arr
}

console.log(bald('---//-'))

// arr.push(x.replace('/', '-'), count == 0 ? 'Clean!' : count == 1 ? 'Unicorn!' : count == 2 ? 'Homer!' : count >= 3 ? 'Careless!' : count > 5 ? 'Hobo!' : null): null;

// for(let charcar of x) charcar == '/' ? count++ : null 
// console.log(count)