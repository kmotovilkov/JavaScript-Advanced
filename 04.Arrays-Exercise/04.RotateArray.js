function rotateArr(arr) {
    let rotateNum = arr.pop();
    for (let i = 0; i < rotateNum; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }
    console.log(arr.join(" "));
}

rotateArr(['1', '2', '3', '4', '2']);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
