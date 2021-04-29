function getCount(str) {
    var vowelsCount = 0;
    for (let index = 0; index < str.length; index++) {
      if(str[index].includes('a') || str[index].includes('e') || str[index].includes('i') || str[index].includes('o') || str[index].includes('u')){
          vowelsCount += 1
      }}
   return vowelsCount
}
  getCount('Kevin Jacob Marin')