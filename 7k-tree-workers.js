function task(w, n, c) {
    let name = w == 'Monday' ? 'James' : w == 'Tuesday' ? 'John' : w == 'Wednesday' ? 'Robert' : w == 'Thursday' ? 'Michael' : w == 'Friday' ? 'William' : false;
    console.log(name)
    let numnum = n * c
    console.log(numnum)
  return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${numnum} dollars to buy liquid`
}

console.log(task('Tuesday', 5, 3))