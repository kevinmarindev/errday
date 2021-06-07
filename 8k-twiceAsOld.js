function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld ? Math.abs((sonYearsOld * 2) - dadYearsOld) : null
}

console.log(twiceAsOld(29, 0))