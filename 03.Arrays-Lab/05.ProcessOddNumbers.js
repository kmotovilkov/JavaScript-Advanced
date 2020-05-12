function processOddNums(arr) {

    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr1.unshift(+arr[i] * 2);
        }
    }
    console.log(arr1.join(" "));
}

processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);