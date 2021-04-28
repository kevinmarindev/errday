function showMe(yourID){
    if(/^[A-Z]\w+(-[A-Z]\w+)+$/.test(yourID)){
        return true 
    }
    else if(/^[A-Z]\w+$/.test(yourID)){
        return true 
    }
    else return false 
}
console.log(showMe('Kevin-Marin-Marin'))

