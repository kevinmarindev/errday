function bump(x) {
    let numofBumps = 0
    for (const bump of x) {
        bump == 'n' ? numofBumps++ : null;
    }
    return numofBumps <= 15 ? 'Woohoo!' : 'Car Dead'
}
