function alphabetWar(fight){
    let l = 0;
    let r = 0;
    for (const char of fight) {
        char == 'w' ? l += 4 : char == 'p' ? l += 3 : char == "b" ? l += 2 : char == 's' ? l += 1 : l += 0;
    }
    for (const char of fight) {
        char == 'm' ? r += 4 : char == 'q' ? r += 3 : char == "d" ? r += 2 : char == 'z' ? r += 1 : r += 0;
    }
    console.table(l, r)
   return l > r ? 'Left side wins!' : r > l ? 'Right side wins!' : "Let's fight again!"

}

console.log(alphabetWar('wpdz'))

//left
//  w - 4
//  p - 3
//  b - 2
//  s - 1

//right 
//  m - 4
//  q - 3
//  d - 2
//  z - 1