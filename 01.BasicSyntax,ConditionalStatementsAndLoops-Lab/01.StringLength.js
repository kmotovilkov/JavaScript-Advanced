function stringLength(a, b, c) {
    let sum;
    let average;

    sum = a.length + b.length + c.length;
    average = Math.floor(sum / 3);

    console.log(sum);
    console.log(average);
}

stringLength('pasta', '5', '22.3');