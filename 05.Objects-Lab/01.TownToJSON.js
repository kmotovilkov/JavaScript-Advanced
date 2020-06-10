function townsToJSON(arr) {
    let town = [];
    for (let line of arr.slice(1)) {
        let tokens = line.split(/\s*\|\s*/);

        let townObj = {Town: tokens[1], Latitude: Number((Number(tokens[2])).toFixed(2)), Longitude: Number((Number(tokens[3])).toFixed(2))};
       town.push(townObj);
    }
    console.log(JSON.stringify(town))
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);

