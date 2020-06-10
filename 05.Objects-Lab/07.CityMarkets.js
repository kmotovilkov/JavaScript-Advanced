function cityMarket(input) {
    let cityObj = new Map();

    for (let line of input) {
        let townArgs = line.split(/\s+->\s+/);
        let town = townArgs[0];
        let product = townArgs[1];
        let income = townArgs[2].split(/\s+:\s+/).map(Number).reduce((a, b) => a * b);

        if (!cityObj.has(town)) {
            cityObj.set(town, new Map());
        }
        if (!cityObj.get(town).has(product)) {
            cityObj.get(town).set(product, 0);
        }
        cityObj.get(town).set(product, cityObj.get(town).get(product) + income);
    }

    for (let [town, product] of cityObj) {
        console.log(`Town - ${town}`);

        for (let [product, income] of cityObj.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);