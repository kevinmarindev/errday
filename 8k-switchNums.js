function switchItUp(number){
    let day = "";
   switch (number) {
  case 0:
    day = "Zero";
    break;
  case 1:
    day = "One";
    break;
  case 2:
     day = "Two";
    break;
  case 3:
    day = "Three";
    break;
  case 4:
    day = "Four";
    break;
  case 5:
    day = "Five";
    break;
  case 6:
    day = "Six";
    break;
    case 7:
    day = "Seven";
    break;
  case 8:
    day = "Eight";
    break;
  case 9:
    day = "Nine";
    break;
}
return day;
}

console.log(switchItUp(0))