function isLeapYear(year) {
 let t = 0
 let f = 0
    
 year % 4 == 0 ? t++ : f++;
     
     year % 100 == 0 ? f++ : t++;
     year % 400 == 0 ? t++ : f++;
 
 return t > f ? true : false;
}
console.log(isLeapYear(1984));