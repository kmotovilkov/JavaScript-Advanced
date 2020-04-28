function rounding(num, precision) {
    if (precision>15){
        precision=15;
    }
    console.log(+num.toFixed(precision));
}

rounding(3.1415926535897932384626433832795, 16);