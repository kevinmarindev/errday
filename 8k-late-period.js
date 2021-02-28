function periodIsLate(last, today, cycleLength){
  let first = (today - last) / 86400000
  if (first > cycleLength) {
    return true
  }
  else {
    return false;
  }
}

console.log(periodIsLate(new Date(2020, 2, 1), new Date(2020, 2, 24), 26))
