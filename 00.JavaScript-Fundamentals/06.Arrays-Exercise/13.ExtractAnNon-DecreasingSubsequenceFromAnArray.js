function solve(arr) {

    let biggestNum = arr[0];
    let outputArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            outputArr.push(arr[i]);
            biggestNum = arr[i];
        }
    }
    console.log(outputArr.join(' '));

}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);