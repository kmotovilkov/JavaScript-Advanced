function solve(arrInput) {

    let map = new Map();

    for (let line of arrInput) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (map.has(product)) {
            let currentQuantity = map.get(product);
            map.set(product, currentQuantity += quantity);
        } else {
            map.set(product, quantity);
        }
    }
    for (let [product, quantity] of map) {
        console.log(`${product} -> ${quantity}`);
    }


}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);