function longest(s1, s2) {
  let unique = new Set();
  for (const char of s1) {
      unique.add(char)
  }
  for (const char of s2) {
      unique.add(char)
  }
  return Array.from(unique).sort().join('')
  
}

console.log(longest('bc', 'debzfxra'))