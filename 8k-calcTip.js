function calculateTip(amount, rating) {
    let ratt = rating.toLowerCase();
    return ratt == 'terrible' ? 0 : ratt == 'poor' ? Math.ceil((.05 * amount)) : ratt == 'good' ? Math.ceil((.10 * amount)) : ratt == 'great' ? Math.ceil((.15 * amount)) : ratt == 'excellent' ? Math.ceil((.20 * amount)) : 'Rating not recognised'
}

console.log(calculateTip(20, 'Excellent'))
