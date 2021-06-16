function nextId(ids) {
   let y = 0
   while(ids.includes(y)) y++;
   return y
}
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]))