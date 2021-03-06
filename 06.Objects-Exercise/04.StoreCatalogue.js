function storeCatalogue(arr) {
    let result = {};
    for (let line of arr) {
        let [name, price] = line.split(" : ");
        price = Number(price);
        let initialLetter = name[0];
        if (!result[initialLetter]) {
            result[initialLetter] = [];
        }
        result[initialLetter].push({name, price});
    }
    let sortedLetter = Object.entries(result)
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (let i = 0; i < sortedLetter.length; i++) {
        let sortedByName = sortedLetter[i][1].sort((a, b) => a.name.localeCompare(b.name));

        console.log(`${sortedLetter[i][0]}`)
        for (let product of sortedByName) {
            console.log(`  ${product.name}: ${product.price} `);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);