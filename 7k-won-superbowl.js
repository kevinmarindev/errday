// Gaining greater than 10 yds from where you started is a touchdown and you win.
// Yardage of each play will always be a positive number greater than 0.
// There are only four types of plays: "run", "pass", "sack", "turnover".
// Type of plays that will gain yardage are: "run", "pass".
// Type of plays that will lose yardage are: "sack".
// Type of plays that will automatically lose the game are: "turnover".
// When a game ending play occurs the remaining (plays) arrays will be empty.
// If you win return true, if you lose return false.

function didWeWin(plays){
    let count = 0
    plays.forEach(item => {
        if (item[1] === 'pass' || item[1] === 'run') {
            count += item[0]
        }
        else if (item[1] === 'sack') {
            count -= item[0]
        }
        else if(item[1] === 'turnover'){
            count -= 1000000
        }
    });
    return count > 10 ? true : false
  }


 console.log(didWeWin([[8, "pass"],[5, "turnover"],[8, "pass"],[5, "run"]]))


 //   let testt = [[8, "pass"],[5, "sack"],[3, "sack"],[5, "run"]]
//   console.log(testt[1][1])