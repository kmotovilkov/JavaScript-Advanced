function oddNums(arr) {
    let sumNum = 0
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            output.unshift(arr[i] * 2);
        }
    }
    console.log(output.join(" "));
}

oddNums([10, 15, 20, 25]);
oddNums([3, 0, 10, 4, 7, 3]);