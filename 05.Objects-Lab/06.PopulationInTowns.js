function population(arr) {
    let townObj = new Map();

    for (let i = 0; i < arr.length; i++) {
        let townArr = arr[i].split(/\s+<->\s+/);
        let town = townArr[0];
        let population = Number(townArr[1]);

        if (!townObj.has(town)) {
            townObj.set(town, population)
        }else {
            townObj.set(town, townObj.get(town) + population);
        }
    }

    for (let city of townObj) {
        console.log(`${city[0]} : ${city[1]}`)
    }
}


// population(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// );
population(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);