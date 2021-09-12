function charFreq(message) {
  let obj = {}
  for (const char of message) {
      if(obj[char]) obj[char]++
      else obj[char] = 1
  }
  return obj
}
charFreq('this is me')