function smallEnough(a, limit){
    let biggest = Math.max(...a)
    return biggest <= limit ? true : false
}

