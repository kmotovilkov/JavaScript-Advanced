function coocingByNums(arr) {

    let num = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "chop") {
            num /= 2;
            console.log(num);
        } else if (arr[i] === "dice") {
            num = Math.sqrt(num);
            console.log(num);
        } else if (arr[i] === "spice") {
            num += 1;
            console.log(num);
        } else if (arr[i] === "bake") {
            num *= 3;
            console.log(num);
        } else if (arr[i] === "fillet") {
            num *= 0.8;
            console.log(num.toFixed(1));
        }
    }

}


// coocingByNums(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
coocingByNums(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);