function solution(num) {
    return (num1) => {
        return num + num1;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
