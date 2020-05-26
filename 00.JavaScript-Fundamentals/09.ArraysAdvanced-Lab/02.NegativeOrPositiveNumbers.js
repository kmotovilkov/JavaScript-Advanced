function negativOrPositive(arr) {
    let outputArr = []

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        current < 0 ? outputArr.unshift(current) : outputArr.push(current);
    }
    console.log(outputArr.join("\n"));
}

negativOrPositive([7, -2, 8, 9]);
negativOrPositive([3, -2, 0, -1]);