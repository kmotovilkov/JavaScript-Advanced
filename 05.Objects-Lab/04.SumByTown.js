function sumByTown(arr) {

    let sum = {};
    for (let i = 0; i < arr.length; i += 2) {
        let town=arr[i];
        let money=Number(arr[i+1]);

        if (!sum.hasOwnProperty(town)){
            sum[town]=money;
        }else {
            sum[town] += money;
        }

    }
    console.log(JSON.stringify(sum));
}

sumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
);