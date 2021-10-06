function highAndLow(numbers){
    let high, low;
  let arr = numbers.split(' ').map(item => Number(item))
  high = Math.max(...arr)
  low = Math.min(...arr)
  return `${high} ${low}`
}

console.log(highAndLow('1 2 3 4 5'))