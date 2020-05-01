function spiceMustFlow(num) {
    let spiceMined = 0;
    let dayOperated = 0;

    while (num >= 100) {
        spiceMined += num-26;
        num -= 10;
        dayOperated++;
    }
    if (spiceMined !== 0) {
        spiceMined -= 26;
    }
    console.log(dayOperated);
    console.log(spiceMined);

}

spiceMustFlow(111);
