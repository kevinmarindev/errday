function solution(number){
    let arr = [0,0,0]
    for (let i = 1; i < number; i++) {
        if(i % 3 == 0 && i % 5 == 0) arr[2]++, console.log(i)
        if(i % 3 == 0 && i % 5 != 0) arr[0]++, console.log(i)
        if(i % 3 != 0 && i % 5 == 0) arr[1]++, console.log(i)
    }
    return arr
}
console.log(solution(14))