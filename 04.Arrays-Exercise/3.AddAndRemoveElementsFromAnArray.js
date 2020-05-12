function addAndRemove(arr) {
    let num = 1;
    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            arr1.push(num);
        } else {
            arr1.pop();
        }
        num++;
    }
    console.log(arr1.length !== 0 ? arr1.join("\n") : "Empty")
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);