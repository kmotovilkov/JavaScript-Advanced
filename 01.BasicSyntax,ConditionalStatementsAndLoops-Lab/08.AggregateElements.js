function aggregate(arr) {
    let sum = 0;
    let sum2 = 0;
    let con = "";
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
        sum2 += 1 / +arr[i]
        con += arr[i];
    }
    console.log(sum);
    console.log(sum2);
    console.log(con);
}


aggregate([1, 2, 3]);