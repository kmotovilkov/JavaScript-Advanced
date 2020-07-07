function towns(arr) {
    arr.forEach(line => {
        let args = line.split(' | ');
        const towns = {
            town: args[0],
            latitude: Number(args[1]).toFixed(2),
            longitude: Number(args[2]).toFixed(2)
        };

        console.log(towns);
    });
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);