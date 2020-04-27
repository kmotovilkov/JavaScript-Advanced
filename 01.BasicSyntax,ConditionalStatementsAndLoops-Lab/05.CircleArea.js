function circleArea(input) {

    let area;
    if (typeof (input) === "number") {
        area = (Math.pow(input, 2) * Math.PI).toFixed(2);
    } else {
        area = `We can not calculate the circle area, because we receive a ${typeof (input)}.`
    }
    console.log(area);
}

circleArea("name");