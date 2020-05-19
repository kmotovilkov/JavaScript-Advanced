function carTaxCalc3(type, kW, age) {
    let totalPrice = 0;
    let baseTax = 0;
    let power = +kW;
    if (type === "motorcycle") {
        totalPrice = calcMotorBaseTax(kW);
    } else {
        baseTax = calcCarBaseTax(power);
        totalPrice = baseTax * coefficient(age);
    }



    console.log(totalPrice.toFixed(2) + " lv.");
}

function calcMotorBaseTax(volume) {
    if (volume > 750) {
        return 125;
    }
    if (volume > 490) {
        return 94;
    }
    if (volume > 350) {
        return 63;
    }
    if (volume > 250) {
        return 44;
    }
    if (volume > 125) {
        return 31;
    } else {
        return 15;
    }

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

function calcCarBaseTax(power) {
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

carTaxCalc3("motorcycle", 450, 10);
carTaxCalc3("car", 90, 7);