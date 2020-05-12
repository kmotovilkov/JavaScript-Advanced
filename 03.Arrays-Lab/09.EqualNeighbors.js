function equalNeighbors(mtrx) {
    let equalCount = 0;

    function equals(a, b) {
        return a.filter((el, index) => b[index] === el).length;
    }

    for (let i = 0; i < mtrx.length - 1; i++) {
        equalCount += equals(mtrx[i], mtrx[i + 1]);

    }


    console.log(equalCount);
}

equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);
equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);

equalNeighbors([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);