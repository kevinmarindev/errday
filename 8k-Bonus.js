function bonusTime(salary, bonus) {
    let result = "\u00A3"
result += bonus ? salary * 10 : salary
return result
}
bonusTime(2, false)