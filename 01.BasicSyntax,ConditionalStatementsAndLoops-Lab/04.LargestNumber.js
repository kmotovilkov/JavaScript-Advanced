function largestNum(a, b, c) {

    let largestNumber;
    if (a > b && a > c) {
        largestNumber = a;
    } else if (b > a && b > c) {
        largestNumber = b
    } else if (c > a && c > b) {
        largestNumber = c;
    }
    console.log(`The largest number is ${largestNumber}.`);
}

largestNum(5, -3, 16);