var greet = function (name) {
    let nameIt = name.toLowerCase().split('')
    nameIt[0] = nameIt[0].toUpperCase();
    return `Hello ${nameIt.join('')}!`
    
};
console.log(greet('kEVIN'))