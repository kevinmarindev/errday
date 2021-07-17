function fixTheMeerkat(arr) {
    let arr2 = [];
  for (let index = 2; index >= 0; index--) {
      arr2.push(arr[index])
  }
  return arr2;
}
console.log(fixTheMeerkat(['tail', 'body', 'head']))