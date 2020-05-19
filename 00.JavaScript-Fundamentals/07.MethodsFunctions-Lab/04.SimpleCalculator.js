function calculator(num1, num2, operator) {

    if (operator === "multiply") {
        let multiply = (a, b) => a * b;
        console.log(multiply(num1, num2));
    } else if (operator === "divide") {
        let divide = (a, b) => a / b;
        console.log(divide(num1, num2));
    } else if (operator === "add") {
        let add = (a, b) => a + b;
        console.log(add(num1, num2));
    } else if (operator === "subtract") {
        let subtract = (a, b) => a - b;
        console.log(subtract(num1, num2));
    }
}


calculator(5, 5, "multiply");
calculator(40, 8, "divide");
calculator(12, 19, "add");
calculator(50, 13, "subtract");