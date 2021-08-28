function triangle(row) {
    if(row.length <= 1) return row
    let newStr = '';
  for (let i = 0; i <= row.length; i++) {
      if(row[i] + row[i + 1] == 'GG') newStr += 'G'
      else if(row[i] + row[i + 1] == 'BB') newStr += 'B'
      else if(row[i] + row[i + 1] == 'RR') newStr += 'R'
      else if(row[i] + row[i + 1] == 'BG' || row[i] + row[i + 1] == 'GB') newStr += 'R'
      else if(row[i] + row[i + 1] == 'RG' || row[i] + row[i + 1] == 'GR') newStr += 'B'
      else if(row[i] + row[i + 1] == 'BR' || row[i] + row[i + 1] == 'RB') newStr += 'G'
  }
   return triangle(newStr)
}

console.log(triangle('G'))
