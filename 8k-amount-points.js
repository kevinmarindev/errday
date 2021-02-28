// let scores = ['1:3', '2:2']
//
// console.log(scores[0].charAt(2), scores[0].charAt(0))

function points(games) {
  let pointss = 0
  games.forEach(item => {
    if(item.charAt(0) > item.charAt(2)){
      pointss += 3
    }
    else if (item.charAt(0) === item.charAt(2)) {
      pointss += 1
    }
  });
  return pointss
}

console.log(points(['1:2', '2:3', '2:1', '2:2']))
