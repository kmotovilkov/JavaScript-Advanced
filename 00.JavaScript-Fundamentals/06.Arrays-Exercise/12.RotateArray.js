function solve(arr) {
    let rotation = Number(arr.pop());

    if (!isNaN(rotation)) {
        for (let i = 0; i < rotation; i++) {
            let lastEl = arr.pop();
            arr.unshift(lastEl);
        }
        console.log(arr.join(' '));
    } else {
        console.log('Empty');
    }
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
solve(['remove', 'remove', 'remove']);