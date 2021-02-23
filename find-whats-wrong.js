function findLongest(str) {

  var spl = str.split(" ");
  let longest = 0

  for (let i = 0; i < spl.length; i++){
    if (spl[i].length > longest) {
      longest = spl[i].length

    }}
    console.log(longest)
    console.log(spl[1].length)
    console.log(spl.length)
    console.log(spl)

}
findLongest('this is the house of habukah')
