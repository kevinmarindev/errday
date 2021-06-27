function DNAStrand(dna){
  let newDna = [];
  for (const char of dna) {
      char == "A" ? newDna.push('T') : char == 'T' ? newDna.push('A') : char == "C" ? newDna.push('G') : char == 'G' ? newDna.push('C') : '';

    
} return newDna.join('')}

console.log(DNAStrand('ATTGC'))