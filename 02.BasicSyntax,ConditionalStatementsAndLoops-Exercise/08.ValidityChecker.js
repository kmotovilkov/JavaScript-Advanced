function validityChecker(arr) {

    let x1 = +arr[0];
    let y1 = +arr[1];
    let x2 = +arr[2];
    let y2 = +arr[3];


    function distance(x1, y1, x2, y2) {
        let dX = x1 - x2;
        let dY = y1 - y2;
        return Math.sqrt(dX ** 2 + dY ** 2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validityChecker([3, 0, 0, 4])
validityChecker([2, 1, 1, 1])