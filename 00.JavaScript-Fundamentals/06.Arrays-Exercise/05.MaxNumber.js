function maxNums(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            output += arr[i] + " ";
        }
    }
    console.log(output);
}


maxNums([14, 24, 3, 19, 15, 17]);
maxNums([41, 41, 34, 20]);
maxNums([27, 19, 42, 2, 13, 45, 48]);