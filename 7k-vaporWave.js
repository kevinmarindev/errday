function vaporcode(string) {
return [...string.toUpperCase().replace(/\s/g, '')].map(item => item + '  ').join('').trim()
}

console.log(vaporcode('this is crazy'))