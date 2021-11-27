function range(startNum, endNum) {
  let arr = [];
  for (let i = startNum + 1; i < endNum; i++) {
    arr.push(i);
  }
  return startNum == endNum ? [] : arr;
}

console.log(range(2, 9));
