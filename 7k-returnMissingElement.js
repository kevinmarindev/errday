function getMissingElement(superImportantArray) {
  for (let i = 0; i <= superImportantArray.length; i++) {
      if(!superImportantArray.includes(i)) return i
  }
}
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]))