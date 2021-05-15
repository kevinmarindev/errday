function printerError(s) {
    let err = 0
    for (let i = 0; i < s.length; i++) {
        if(/[n-z]/.test(s[i])){
            console.log(s[i])
            err += 1
        }}
        return String(err + '/' + s.length)
    }


console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))