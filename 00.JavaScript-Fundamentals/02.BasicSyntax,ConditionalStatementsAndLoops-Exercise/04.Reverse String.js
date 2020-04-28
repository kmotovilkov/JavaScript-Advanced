function revStr(input) {
    let output = "";
    input = input.toString();
    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }
    console.log(output);
}


revStr("SoftUni");