function gordon(a){
    let aa = a.split(' ')
    console.log(aa)
    return aa.map(item => {
        return item.replace(/a/gi, '@').replace(/[e]|[i]|[u]|[o]/gi, '*') + '!!!!'
    }).join(' ').toUpperCase()
}

console.log(gordon('i am a chef'))