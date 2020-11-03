function solve(arr) {
    let guests = arr.splice(0, arr.indexOf('PARTY'))
    arr.shift();
    let guestList = arr;
    let guestMap = new Map();

    for (let g of guests) {
        if (!guestList.includes(g)) {
            guestMap.set(g, 1);
        }
    }
    console.log([...guestMap].length);
    let sort = [...guestMap].sort((a, b) => b[0]-a[0]).forEach(e=>{
        console.log(e[0])});

}
solve(['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
);

solve(['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'fPXNHpm1',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ'
    ]
);