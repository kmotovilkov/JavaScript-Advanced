function storeProvision(arr1, arr2) {

    const products = {};
    arr1.forEach((e, i) => {

        if (i % 2 === 0) {
            const product = arr1[i];
            const quantity = Number(arr1[i + 1]);
            products[product] = quantity;
        }

    });

    for (let i = 0; i < arr2.length; i += 2) {
        const product = arr2[i];
        const quantity = Number(arr2[i + 1]);
        if (products.hasOwnProperty(product)) {
            products[product] += quantity;
        } else {
            products[product] = quantity;
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }

}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);