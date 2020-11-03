function solve(arr) {

    let parking = new Map();

    // for (let car of arr) {
    //     let [direction, carNumber] = car.split(', ');
    //     console.log(direction);
    //     parking.set(carNumber, direction);
    // }
    // for (let a of parking) {
    //     if (a[1] == 'OUT') {
    //         parking.delete(a[0]);
    //     }
    // }
    // let sort = [...parking].sort((a, b) =>a[0].localeCompare(b[0]));
    // if (sort.length == 0) {
    //     console.log('Parking Lot is Empty');
    // } else {
    //     for (let [number] of sort) {
    //         console.log(number);
    //     }
    // }

    for (let car of arr) {
        let carArr = car.split(', ');
        let direction = carArr.shift();
        let carNum = carArr.join(' ');

        if (direction == 'IN') {
            parking.set(carNum, 1);
        } else if (direction == 'OUT') {
            parking.delete(carNum);
        }
    }

    let sort = [...parking].sort((a, b) => a[0].localeCompare(b[0]));
    if (sort.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (let [number] of sort) {
            console.log(number);
        }
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);
