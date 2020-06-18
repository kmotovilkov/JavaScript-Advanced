function cappyJuice(arr) {

    let quantities = {};
    let count = {};

    for (let line of arr) {

        let args = line.split(" => ");
        let fruit = args[0];
        let quantity = Number(args[1]);

        if (!quantities.hasOwnProperty(fruit)) {
            quantities[fruit] = 0;
        }

        quantities[fruit] += quantity;
        if (quantities[fruit] >= 1000) {
            count[fruit] = parseInt(quantities[fruit]/1000);
        }
    }

    for (let key of Object.keys(count)) {
        console.log(`${key} => ${count[key]}`);
    }
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

);