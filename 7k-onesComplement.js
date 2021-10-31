function onesComplement(n) {
  return n.split('').map(item => item == '1' ? '0' : '1').join('')
};

console.log(onesComplement('1001'))