var maxRedigit = function (num) {
  if(num <=  101 || num >= 1000) return null
  else return Number(String(num).split('').map(item => Number(item)).sort((a, b) => b - a).join(''))
};
console.log(maxRedigit(102))