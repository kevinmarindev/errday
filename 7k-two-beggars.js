function distributionOf(golds){
    let aa = 0,
    bb = 0;
  for (let index = 0; index = golds.length; index++) {
      if(golds[0] > golds[golds.length - 1]){
          aa += golds.shift()
          console.log(golds)   
      }
      else if(golds[0] < golds[golds.length - 1]){
          aa += golds.pop()
          console.log(golds)
      }
      else{
        aa += golds.shift() 
      } 
      for (let e = 0; e = golds.length; e++) {
           if(golds[0] > golds[golds.length - 1]){
          bb += golds.shift()
          console.log(golds)
          break
      }
      else if(golds[0] < golds[golds.length - 1]){
          bb += golds.pop()
          console.log(golds)
          break
      }
      else{
        bb += golds[0]
        golds.shift()
        break
      } }
  }
  return Array.of(aa, bb)
}
distributionOf([3,2,1,5,6])