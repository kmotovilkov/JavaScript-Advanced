function magicMatrices(mtrx) {

    let sum = mtrx[0].reduce((a, b) => a + b);
    let sumRows = 0;
    let sumCols = 0;
    let magic = true;

    for (let i = 0; i < mtrx.length; i++) {
        sumRows = mtrx[i].reduce((a, b) => a + b);
        sumCols = mtrx.map((x) => x[i]).reduce((a, b) => a + b);

        if (sumRows !== sumCols || sumCols !== sum || sumRows !== sum) {
            magic = false;
        }
    }
    console.log(magic);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);