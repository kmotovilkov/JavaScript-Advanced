function reverse(arr) {
    let revArr = arr.reverse();
    let output = "";
    for (let i = 0; i < revArr.length ; i++) {
        output += revArr[i] + " ";
    }

    console.log(output);
}

reverse(['a', 'b', 'c', 'd', 'e']);