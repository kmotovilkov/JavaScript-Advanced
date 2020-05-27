function sorting(arr) {
    let outputArr = [];
    arr.sort((a, b) => b - a);
    while (arr.length>0){
        outputArr.push(arr.shift(),arr.pop());
    }
    console.log(outputArr.join(" "));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);