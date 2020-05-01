function binToDec(num) {
    let decimal = 0;
    num = num.split("").reverse().join("");
    for (let i = 0; i < num.length; i++) {
        decimal += +num[i] * Math.pow(2, i);
    }
    console.log(decimal);
}

binToDec("00001001");
binToDec("11110000");


