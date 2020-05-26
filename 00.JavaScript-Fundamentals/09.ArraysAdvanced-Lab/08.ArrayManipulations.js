function solve(arr) {
    let numArr = arr.shift().split(" ").map(Number);

    for (let i = 0; i < arr.length; i++) {
        let [command, num1, num2] = arr[i].split(" ");
        num1 = Number(num1);
        num2 = Number(num2);

        if (command === "Add") {
            numArr.push(num1);
        } else if (command === "Remove") {
            numArr = numArr.filter(a => a !== num1);
        } else if (command === "RemoveAt") {
            numArr.splice(num1, 1);
        } else if (command === "Insert") {
            numArr.splice(num2, 0, num1);
        }
    }
    console.log(numArr.join(" "));
}


solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);