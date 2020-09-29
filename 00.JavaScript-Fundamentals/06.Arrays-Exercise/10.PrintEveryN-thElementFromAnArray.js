function solve(arr) {

    let step = Number(arr.pop());
    let output = [];
    for (let i = 0; i < arr.length; i+=step) {
        output.push(arr[i]);
    }

    console.log(output.join(' '));
}


solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);