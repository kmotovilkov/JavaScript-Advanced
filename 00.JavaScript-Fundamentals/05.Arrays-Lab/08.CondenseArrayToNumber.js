function condense(arr) {
    let n = arr.length;
    while (n > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] += arr[i + 1];
        }
        n--;
    }
    console.log(arr[0]);

}

condense([2, 10, 3]);
condense([5,0,4,1,2]);
condense([1]);
