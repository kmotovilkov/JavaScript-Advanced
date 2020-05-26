function negPosNums(arr) {
    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
           arr1.push(arr[i]);
        } else {
            arr1.unshift(arr[i]);
        }
    }
    console.log(arr1);
}

negPosNums([7, -2, 8, 9]);
negPosNums([3, -2, 0, -1]);