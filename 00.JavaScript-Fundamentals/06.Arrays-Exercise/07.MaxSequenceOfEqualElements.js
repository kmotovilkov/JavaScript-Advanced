function maxEqualEl(arr) {

    let maxNum = 1;
    let output = " ";
    let count = 1;
    let maxCount = 1;
    let pos = 0;

    while (pos < arr.length - 1) {

        if (arr[pos] === arr[pos + 1]) {
            count++;

            if (count > maxCount) {
                maxCount = count;
                maxNum = arr[pos];
            }
        } else {
            count = 1;
        }
        pos++;
        if (maxCount === 1) {
           maxNum = arr[0];
        }
    }
    for (let i = 0; i < maxCount; i++) {
        output += maxNum + " ";
    }
    console.log(output.slice(0,-1));
}

maxEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);