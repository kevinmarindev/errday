const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump
};

console.log(zeroFuel(100, 50, 1))