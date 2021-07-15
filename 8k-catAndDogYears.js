var humanYearsCatYearsDogYears = function (humanYears) {
  if(humanYears < 1) return [0,0,0]
    let human = humanYears
  cat = 15
  dog = 15
  if (human >= 2) cat += 9, dog += 9;
  if( human >= 3){
    for (let i = 2; i < human; i++) {
        cat += 4, dog += 5;
    }
}
return Array(human, cat, dog)
};

console.log(humanYearsCatYearsDogYears(10))
