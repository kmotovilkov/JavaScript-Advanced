function cappyJuice(arr) {
    let products = {};
    let result = {};
    for (let line of arr) {
        let [productName, quantity] = line.split(" => ");
        quantity = Number(quantity);
        if (!products.hasOwnProperty(productName)) {
            products[productName] = 0;
        }
        products[productName] += quantity;

        if (products[productName] > 1000) {
            result[productName] = parseInt(products[productName] / 1000);
        }
    }
    for (let product in result) {
        console.log(`${product} => ${result[product]}`);
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