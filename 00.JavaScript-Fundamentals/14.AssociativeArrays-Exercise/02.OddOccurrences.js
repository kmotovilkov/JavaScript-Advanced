function solve(input) {

    let arr = input.split(' ').map(e => e.toLowerCase());
    let map = new Map();
    let output = [];

    for (let el of arr) {
        if (map.has(el)) {
            let current = map.get(el);
            map.set(el, current += 1);
        } else {
            map.set(el, 1);
        }
    }
        for (let el of [...map]) {
            if (el[1]%2!==0){
                output.push(el[0]);
            }
        }
    console.log(output.join(' '));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');