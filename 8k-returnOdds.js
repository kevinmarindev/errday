function odds(values){
  return values.filter(item => item % 2 == 1  );
}

console.log(odds([1,2,3,4]))

