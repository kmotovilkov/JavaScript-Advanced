function solve() {

    let screen = document.getElementById('expressionOutput');
    let output = document.getElementById('resultOutput');
    let stringExp = '';
    let operator = false;
    document
        .querySelector("#calculator")
        .addEventListener('click', (button) => {
            const operators = ['/', '*', '-', '+'];
            const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const regEx = /^\d+(\.\d+)? [*/+-] \d+(\.\d+)?$/g;
            let btn = button.target.value;
            if (btn === 'Clear') {
                screen.innerHTML = '';
                output.innerHTML = '';
                stringExp = '';
                operator = false;
            }
            if (output.innerHTML !== '') {
                return '';
            }
            if (nums.includes(btn) || (btn === '.' && stringExp !== '')) {
                stringExp += btn;
                screen.innerHTML = stringExp;
            } else if (operators.includes(btn) && !operator && !stringExp.endsWith('.')) {
                stringExp += ` ${btn} `;
                screen.innerHTML = stringExp;
                operator = true;
            } else if (btn === '=') {
                if (regEx.test(stringExp)) {
                    onClick();
                } else {
                    output.innerHTML = NaN;
                }
            }

            function onClick() {
                let [a, operant, b] = stringExp.split(' ');
                a = Number(a);
                b = Number(b);
                if (operant === '+') {
                    output.innerHTML = a + b;
                } else if (operant === '-') {
                    output.innerHTML = a - b;
                } else if (operant === '/') {
                    output.innerHTML = a / b;
                } else if (operant === '*') {
                    output.innerHTML = a * b;
                }
            }
        });
}