function invert(array) {
   return array.map(item => {
      if(item > 0 ) return item - (item * 2)
      else if(item < 0) return  item + (item * -2)
      else if (item == 0 ) return -0 
      else return item 
});
}
console.log(invert([]))