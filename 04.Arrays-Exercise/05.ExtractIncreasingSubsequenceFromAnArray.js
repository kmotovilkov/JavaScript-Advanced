function extract(arr) {

    let arr1 = arr.slice(0, 1);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr1[arr1.length - 1]) {
            arr1.push(arr[i]);
        }
    }
    console.log(arr1.join("\n"));
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);