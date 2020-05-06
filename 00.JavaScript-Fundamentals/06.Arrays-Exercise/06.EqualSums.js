function equalSum(arr) {

    if (arr.length === 1) {
        console.log(0);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let sumL = 0;
        let sumR = 0;
        for (let j = 0; j < i; j++) {
            sumL += arr[j];
        }
        for (let k = i + 1; k < arr.length; k++) {
            sumR += arr[k];
        }
        if (sumL === sumR) {

            console.log(i);
            return;
        }
    }
    console.log("no");

}

equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);