let arr = [
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]


function matrix(array) {
    let arr2 = array;
    for (let i = 0; i < arr2.length; i++) {
    if(arr2[i][i] < 0){
        arr2[i].splice(i, 1, 0)
    }
    else{
        arr2[i].splice(i, 1, 1)
    }}
    return arr2 
}

console.log(matrix([
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]))