function evenNumbers(array, number) {
    let num = number;
    let arr2 = [];
    for (let i = array.length; num > 0; i--) {
        if(array[i] % 2 == 0) arr2.unshift(array[i]), num--;
    }
    return arr2
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))