function restaurant(a,b,t){
  let first = a
  let second = b * 2
  let total = 0
  let obj = {
      'one': first,
      'two': second
  };
  let tabels = a + b
  console.log(obj, tabels)
  for (const item of t) {
      if(item === 1 && obj['one'] >= 1 && tabels >= 1) obj['one']--, tabels--
      else if(item === 1 && obj['two'] >= 1 && tabels >= 1) obj['two']--, tabels--
      else if(item === 1 && obj['two'] >= 1) obj['two']--;
      else if(item === 2 && obj['two'] >= 2 && tabels >= 1) obj['two'] -= 2, tabels--;
      else total += item;
      console.log(total, tabels)
      console.log(obj)
  }
  return total
}

console.log(restaurant(21,94,[2,1,2,2,1,2,1,1,1,2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,1,1,2,2,2,2,1,1,1,1,1,1,1,1,2,1,1,2,1,2,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,2,2,1,2,2,1,2,1,2,2,1,2,2,2,2,1,2,1,1,1,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,1,1,1,2,2,2,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,2,1,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2]))