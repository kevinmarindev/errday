function validatePIN (pin) {
  let regexOne = /^\d\d\d\d$/;
  let regexTwo = /^\d\d\d\d\d\d$/;
  return regexOne.test(pin) || regexTwo.test(pin)
}

console.log(validatePIN('2233444'))