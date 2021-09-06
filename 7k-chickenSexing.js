function correctness(bobsDecisions, expertDecisions) {
    let score = 0;
    for (let i = 0; i < bobsDecisions.length; i++) {
        if(bobsDecisions[i] == expertDecisions[i]) score++
        else if(bobsDecisions[i] == '?' || expertDecisions[i] == '?') score += .5;
    }
    return score;
}
console.log(correctness(['M', '?', 'M'], ['M', 'F', '?']))