function reverseWords(str) {
  let arr = str.split(" ");
  return arr
    .map((item) => {
      return [...item].reverse().join("");
    })
    .join(" ");
}
console.log(reverseWords("code this kevin"));
