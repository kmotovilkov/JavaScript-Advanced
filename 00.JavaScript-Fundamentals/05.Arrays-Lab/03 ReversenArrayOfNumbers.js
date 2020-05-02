function reverse(n, arr) {
    let revArr = [];
    let output = "";
    for (let i = 0; i < n; i++) {
        revArr.push(arr[i]);
    }
    for (let j = revArr.length-1; j >= 0; j--) {
        output += revArr[j] +" ";
    }
    console.log(output);

}

reverse(3, [10, 20, 30, 40, 50]);