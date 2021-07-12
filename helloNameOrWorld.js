function hello(name) {
    if(name.length < 1) return "Hello World!"
    else{
    let name2 = name.toLowerCase()
    name3 = ""
    for (let i = 0; i < name2.length; i++) {
        if(i == 0){
            name3 += name2[0].toUpperCase();
        }
        else{
            name3 += name2[i]
        }
        
    }
return `Hello ${name3}!`}
  
  
}

console.log(hello('kevin'))