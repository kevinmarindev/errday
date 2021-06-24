function uefaEuro2016(teams, scores){
  return scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` : scores[1] > scores[0] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!` : scores[0] == scores[1] ? `At match ${teams[0]} - ${teams[1]}, teams played draw` : console.error('you did something wrong');
}

console.log(uefaEuro2016(['por', 'ger'], [2,1]))