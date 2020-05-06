function arrRotation(arr, n) {
    let first = "";
    let output = "";
    for (let i = 0; i < n; i++) {
        first += arr.splice(0, 1);
        arr.splice(arr.length, 0, +first);
        first = "";
    }
    for (let a of arr) {
        output += a + " ";
    }

    console.log(output);
}

arrRotation([51, 47, 32, 61, 21], 2);
arrRotation([32, 21, 61, 1], 4);