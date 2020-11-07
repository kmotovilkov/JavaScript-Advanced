function solve(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (let num of arr) {
        sum += num;
        inverseSum += 1 / num;
        concat += num.toString();
    }
    console.log(`${sum}\n${inverseSum}\n${concat}`);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);