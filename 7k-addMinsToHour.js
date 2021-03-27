function changeTime(input, delta) {
  let [hours, minutes] = input.split(':');
  return new Date(2016, 0, 1, hours, Number(minutes) + delta).toString().slice(16,21);
}

console.log(changeTime('10:00', 1))



// let str = '8:14'
// let arr = str.split(':');
// let arr2 = arr.map(item => Number(item))
// let [num1, num2] = arr2
