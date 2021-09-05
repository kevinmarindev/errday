function calcType(a, b, res) {
  let operation;
  switch (res) {
    case a - b:
      operation = "subtraction";
      break;
    case a + b:
      operation = "addition";
      break;
    case a * b:
      operation = "multiplication";
      break;
    case a / b:
      operation = "division";
      break;
  }
  return operation;
}
console.log(calcType(9, 5, 1.8));
