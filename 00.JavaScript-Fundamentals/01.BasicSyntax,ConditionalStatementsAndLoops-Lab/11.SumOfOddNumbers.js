function printOddNum(count) {
    let sum = 0;
    for (let i = 1; i <= count * 2; i += 2) {
        sum += i;
        console.log(i);
    }
    console.log("Sum: " + sum);
}

printOddNum(5);