function printEveryNEl(arr) {
    let n = +arr.pop();
    for (let i = 0; i < arr.length; i += n) {
        console.log(arr[i]);
    }
}

printEveryNEl(['5', '20', '31', '4', '20', '2']);
printEveryNEl(['dsa', 'asd', 'test', 'tset', '2']);
printEveryNEl(['1', '2', '3', '4', '5', '6']);