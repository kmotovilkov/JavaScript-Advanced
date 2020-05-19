function carTaxCalc2(kW, age) {
    let totalPrice = 0;
    let power = +kW;
    let baseTax = calc(power);
    totalPrice = baseTax * coefficient(age);
    console.log(totalPrice.toFixed(2) + " lv.");
}

function coefficient(age) {
    let coefficient = 0;
    if (age > 14) {
        coefficient = 2.80;
    } else if (age <= 14 && age >= 5) {
        coefficient = 1.50;
    } else {
        coefficient = 1.00;
    }
    return coefficient;
}

function calc(power) {
    let tax = 0;
    if (power > 110) {
        tax = power * 1.54;
    } else if (power > 74) {
        tax = power * 1.38;
    } else if (power > 55) {
        tax = power * 0.68;
    } else if (power > 37) {
        tax = power * 0.50;
    } else {
        tax = power * 0.43;
    }
    return tax;
}

carTaxCalc2(45, 10);
carTaxCalc2(90, 7);