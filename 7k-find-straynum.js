function stray(numbers) {
    let myset = numbers 
  for(let i = 0; i <= numbers.length;  i++){
      if(numbers[i] == myset[0] && numbers[i] != myset[1] ) return numbers[i]
      else if(numbers[i] != myset[0])return numbers[i]
  }
}

'ive made some chsnges ets see whatd happens'