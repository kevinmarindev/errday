function lastSurvivor(letters, coords) {
    let newlet = Array.from(letters)
    console.log(newlet)
    coords.forEach(element => {
        newlet.splice(element, 1)
    });
    console.log(newlet)
    return (newlet.join(''))
}

console.log(lastSurvivor('abc', [1,1]))