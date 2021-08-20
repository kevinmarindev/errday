var splitInParts = function (s, partLength) {
    let s2 = s.split('');
  for (let i = partLength; i <= s2.length; i += partLength + 1) {
      s2.splice(i, 0, ' ')
  }
 return s2.join('').trim()
};

console.log(splitInParts('supercalifragilisticexpialidocious', 3 ))
