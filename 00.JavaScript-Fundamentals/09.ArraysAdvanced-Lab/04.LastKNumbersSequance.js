function solve(num1, num2) {

    let arr = [1];
    for (let i = 1; i < num1; i++) {
        let index = Math.max(i - num2,0);

        let subArr = arr.slice(index)
        let sum = subArr.reduce((a,b)=>a+b);

        arr.push(sum);
    }
    console.log(arr.join(" "));
}

solve(6, 3);
solve(8, 2);

