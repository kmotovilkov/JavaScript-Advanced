function kNums(n, k) {
    let arr = [1];

    function sumLastK(arr, k) {
        k = arr.length > k ? k : arr.length;

        let sum = 0;
        for (let j = 1; j <= k; j++) {
            sum += arr[arr.length - j];
        }
        return sum;
    }

    for (let i = 1; i < n; i++) {
        arr[i] = sumLastK(arr, k);
    }
    console.log(arr.join(" "));
}

kNums(6, 3);
kNums(8, 2);