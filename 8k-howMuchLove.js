function howMuchILoveYou(nbPetals) {
    let count = nbPetals
    nbPetals >= 7 ? count = nbPetals % 6 : null
    return count == 1 ? 'I love you' : count == 2 ? 'a little' : count == 3 ? 'a lot' : count == 4 ? 'passionately' : count == 5 ? 'madly' : count == 6 || count == 0 ? 'not at all' : null;
}
console.log(howMuchILoveYou(486))

console.log(210 % 6)