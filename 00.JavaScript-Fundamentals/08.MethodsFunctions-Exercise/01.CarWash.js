function carWash(arr) {
    let cleaned = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === "soap") {
            cleaned += 10;
        } else if (command === "water") {
            cleaned += cleaned * 0.2;
        } else if (command === "vacuum cleaner") {
            cleaned += cleaned * 0.25;
        } else if (command === "mud") {
            cleaned -= cleaned * 0.1;
        }
    }

    console.log(`The car is ${cleaned.toFixed(2)}% clean.`);
}

    carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);