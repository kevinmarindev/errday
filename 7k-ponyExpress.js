function riders(stations) {
    let riders = 1;
    let oneRider = 100;
    for (const miles of stations) {
        if(miles < oneRider) oneRider -= miles;
        else oneRider = 100, oneRider -= miles, riders++;
    }
    return riders
}
console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]))
