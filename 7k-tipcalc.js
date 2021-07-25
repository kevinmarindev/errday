function calculate_total(subtotal, tax, tip) {
    return Number(((subtotal * (tax/100)) + (subtotal * (tip/100)) + subtotal).toFixed(2))
}

console.log(calculate_total(36.97,7,15))