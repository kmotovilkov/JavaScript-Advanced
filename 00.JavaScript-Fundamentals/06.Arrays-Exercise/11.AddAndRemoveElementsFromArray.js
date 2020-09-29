function solve(inputArr) {
    let arr = [];
    let num = 1;
    for (let command of inputArr) {

        if (command === 'add') {
            arr.push(num);
            num++;
        } else if (command === 'remove') {
            arr.push(num);
            arr.pop();
            arr.pop();
            num++;
        }
    }
    if (arr.length === 0) {
        console.log('Empty')
    }else {
        console.log(arr.join(' '));
    }

}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);