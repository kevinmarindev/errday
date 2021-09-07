//shoul've used global method eval on arr to calculate the final value

function calculate(str) {
let str2 = str;
let number;;
str2 = Array.from(str2.replace(/plus/gi, '+').replace(/minus/gi, '-'))
let arr = str2.map((item, idx) => {
    return Number(item) ? Number(item) :  item
})
console.log(arr)
number = arr[0]
for (let i = 0; i <= arr.length + 1; i++) {
    if(arr[i] == '+') number += arr[i + 1]
    else if(arr[i] == '-') number -= arr[i + 1]
    console.log(number)
}
return String(number)
}
console.log(calculate("1minus2minus3minus4"))