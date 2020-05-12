function diagonalSum(mtrx) {
    let result1 = 0;
    let result2 = 0;

    for (let i = 0; i < mtrx.length; i++) {
        result1 += +mtrx[i][i];
        result2 += +mtrx[i][mtrx.length - 1 - i];
    }
    console.log(result1 + " " + result2);
}

diagonalSum([[20, 40], [10, 60]]);
diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);