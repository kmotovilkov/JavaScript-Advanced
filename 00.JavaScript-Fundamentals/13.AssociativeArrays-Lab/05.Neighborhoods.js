function solve(arrInput) {

    let neighborhoodMap = new Map();

    let neighborhoods = arrInput.shift().split(', ');

    for (let n of neighborhoods) {
        neighborhoodMap.set(n, []);
    }

    for (let el of arrInput) {
        let [neight, name] = el.split(' - ');

        if (neighborhoodMap.has(neight)) {
            neighborhoodMap.get(neight).push(name);
        }
    }
    let sorted = [...neighborhoodMap].sort((a, b) => b[1].length - a[1].length);

    for (let [neighborhood, nameArr] of sorted) {
        console.log(`${neighborhood}: ${nameArr.length}`);
        for (let n of nameArr) {
            console.log(`--${n}`);
        }
    }

}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);