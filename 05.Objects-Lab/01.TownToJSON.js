function townsToJSON(arr) {
    let data = arr.map(row => row.split("|").filter(x => x).map(x => x.trim()));
    let propName = data.shift();
    let towns = [];
    for (let el of data) {
        let obj = {
            [propName[0]]: el[0],
            [propName[1]]: Number(Number(el[1]).toFixed(2)),
            [propName[2]]: Number(Number(el[2]).toFixed(2))
        };
        towns.push(obj);
    }
    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);

