function typeAndSum(a1, a2, a3) {
    let sum = a1 + a2 + a3;

    if (sum % 1 === 0) {
        sum += " - Integer";
    } else {
        sum += " - Float"
    }
    console.log(sum);
}

typeAndSum(9, 100, 1.1);