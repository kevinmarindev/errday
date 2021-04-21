// [0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9


//returns the test score
function scoreTest(str, right, omit, wrong){
    let total = 0
    str.map(item => {
        if(item === 0){
            total += right
        }
        else if(item === 1 && omit >= 0){
            total += omit 
        }
        else if(item === 1 && omit < 0){
            total += omit 
        }
        else if(item === 2){
            total -= wrong
        }
      })
     return total 
  }

  console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2))
