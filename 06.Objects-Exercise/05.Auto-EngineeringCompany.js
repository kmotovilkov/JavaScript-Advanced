function autoEngineering(arr) {
    let result = {};
    for (let line of arr) {
        let [carBrand, carModel, producedCars] = line.split(" | ");
        producedCars = Number(producedCars);
        if (!result[carBrand]) {
            result[carBrand] = [];
        }
        result[carBrand].push({carModel, producedCars});
    }
    for (let cars of Object.entries(result)) {
        console.log(cars[0]);
        for (let modelCountObj of cars[1]) {
            console.log(`###${modelCountObj.carModel} -> ${modelCountObj.producedCars}`);
        }
    }
}


autoEngineering(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);