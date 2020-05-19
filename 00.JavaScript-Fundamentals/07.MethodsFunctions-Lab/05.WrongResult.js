function wrongResult(num1, num2, num3) {
    let result = "";

    if (num1 === 0 || num2 === 0 || num3 === 0) {
        result = "Positive";
    } else if (num1 > 0 && num2 > 0 && num3 > 0) {
        result = "Positive";
    } else if (num1 > 0 && num2 > 0 && num3 < 0) {
        result = "Negative";
    } else if (num1 > 0 && num2 < 0 && num3 > 0) {
        result = 'Negative';
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        result = 'Positive';
    } else if (num1 < 0 && num2 > 0 && num3 > 0) {
        result = 'Negative';
    } else if (num1 < 0 && num2 > 0 && num3 < 0) {
        result = 'Positive';
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
        result = 'Positive';
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        result = 'Negative';
    }
    console.log(result);
}

wrongResult(5, 12, -15);
wrongResult(-6, -12, 14);
wrongResult(-1, -2, -3);
wrongResult(-1, 0, 1);

