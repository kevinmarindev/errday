function findSmallestInt(args) {
  let smallest = args[0];
  console.log(smallest)
  let small = 0
  for (const num of args) {
      num < smallest ? small = num : null;
  }
  return `Should return the smallest int ${small}`;
}
console.log(findSmallestInt([5,2,3,-4]))