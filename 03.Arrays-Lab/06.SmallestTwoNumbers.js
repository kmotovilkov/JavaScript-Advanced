function smallest2Nums(arr) {

    arr.sort((a, b) => a - b);
    arr = arr.slice(0, 2);

    // console.log(arr[0] + " " + arr[1]);

    console.log(arr.join(" "))
}

smallest2Nums([30, 15, 50, 5]);
smallest2Nums([3, 0, 10, 4, 7, 3]);