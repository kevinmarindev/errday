function add(num1, num2) {
  let bigNum = String(Math.max(num1, num2)).split('').reverse().join('')
  let smallNum = String(Math.min(num1, num2)).split('').reverse().join('')
  let arr = []
  for (let i = 0; i < bigNum.length; i++) {
      if(smallNum[i]) arr.push(Number(bigNum[i]) + Number(smallNum[i]))
      else arr.push(Number(bigNum[i]))
  }
  return arr.reverse().join('')
}
console.log(add(1236, 30977))