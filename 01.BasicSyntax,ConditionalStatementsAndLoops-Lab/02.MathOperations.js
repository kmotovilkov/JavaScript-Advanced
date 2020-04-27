function mathOps(n1, n2, operator) {

    let output;

    if (operator === "+") {
        output = n1 + n2;
    } else if (operator === "-") {
        output = n1 - n2;
    } else if (operator === "*") {
        output = n1 * n2;

    } else if (operator === "/") {
        output = n1 / n2;

    } else if (operator === "%") {
        output = n1 % n2;

    } else if (operator === "**") {
        output = n1 ** n2;
    }
    console.log(output);
}


mathOps(3, 5.5, '*');