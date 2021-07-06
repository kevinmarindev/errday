function isDivideBy(number, a, b) {
  return number % a == 0 && number % b == 0;
}
console.log(isDivideBy(-12, 2, -6))