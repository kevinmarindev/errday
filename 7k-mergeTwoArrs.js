function mergeArrays(a, b) {
  let c = [];
  if(a.length >= b.length){
      for (let i = 0; i < a.length; i++) {
          console.log(a[i], b[i])
          if(a[i] != undefined || a[i] != null) c.push(a[i])
          if(b[i] != undefined || b[i] != null) c.push(b[i])
      }
  }
  else {
      for (let i = 0; i < b.length; i++) {
          console.log(a[i], b[i])
          if(a[i] != undefined || a[i] != null) c.push(a[i])
          if(b[i] != undefined || b[i] != null) c.push(b[i])
      }
    }
    return c
}

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3]))
