function fuelMany(distance, passengers, price) {
    let fuel = (distance / 100) * 7;
    fuel += passengers * 0.1;
    let allPrice = fuel * price;
    console.log(`Needed money for that trip is ${allPrice}lv.`);

}

fuelMany(260, 9, 2.49);