function gcd(num1, num2) {

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while (num2 !== 0) {

        let abs = num1 % num2;
        num1 = num2;
        num2 = abs;

    }
    console.log(num1);

}


gcd(15, 5);
gcd(2154, 458);