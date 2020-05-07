function fruit(fruit, weight, kgPrice) {

    console.log(`I need $${(kgPrice * (weight * 0.001)).toFixed(2)} to buy ${(weight * 0.001).toFixed(2)} kilograms ${fruit}.`);

}


fruit('orange', 2500, 1.80);