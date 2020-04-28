function printAndSum(start, end) {
    let sum = 0;
    let s = "";
    for (let i = start; i <= end; i++) {
        s += i + " ";
        sum += i;
    }
    console.log(s);
    console.log("Sum: " + sum);
}

printAndSum(50, 60);