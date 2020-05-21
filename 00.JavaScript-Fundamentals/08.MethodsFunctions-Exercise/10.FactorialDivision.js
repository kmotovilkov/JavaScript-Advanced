function factorial(num1, num2) {
    let f1 = 1;
    let f2 = 1;

    for (let i = 1; i <= num1; i++) {
        f1 *= i;
    }
    for (let j = 1; j <= num2; j++) {
        f2 *= j;
    }
    console.log((f1 / f2).toFixed(2));
}

factorial(5,2)
factorial(6,2)