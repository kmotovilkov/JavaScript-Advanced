function sumFurstLast(arr) {
    let result = 0;
    if (arr.length > 1) {
         result = +arr.shift() + +arr.pop();
    } else {
         result = arr[0]*2;
    }

    console.log(result);
}

sumFurstLast(['5', '10']);
sumFurstLast(['5']);
sumFurstLast(['20', '30', '40']);