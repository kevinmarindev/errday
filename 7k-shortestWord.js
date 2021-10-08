function findShort(s){
    let arr = s.split(' ');
    let shortest = arr[0].length;
    arr.forEach(element => {
        element.length < shortest ? shortest = element.length : ''
    });
    return shortest
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps k"))