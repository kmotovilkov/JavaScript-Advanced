function bombNums(numArr, bombNums) {

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === bombNums[0]) {
            for (let j = 1; j <= bombNums[1]; j++) {
                if (i - j < 0) {
                    break;
                } else {
                    numArr[i - j] = 0;
                }
            }
            for (let k = 1; k <= bombNums[1]; k++) {
                if ((i + k) > numArr.length - 1) {
                    break;
                } else {
                    numArr[i + k] = 0;
                }
            }
            numArr[i] = 0;
        }
    }
    let sum = numArr.reduce((a, b) => a + b);
    console.log(sum);
}


bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]);