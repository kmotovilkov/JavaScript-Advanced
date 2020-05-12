function biggestEl(mtrx) {

    // console.log(Math.max(...mtrx.flat(1)));

    let result = mtrx[0][0];

    for (let i = 0; i < mtrx.length; i++) {
        for (let j = 0; j < mtrx[i].length; j++) {
            if (mtrx[i][j] > result) {
                result = mtrx[i][j];
            }
        }
    }
    console.log(result);
}

biggestEl([[20, 50, 10], [8, 33, 145]]);
biggestEl([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);