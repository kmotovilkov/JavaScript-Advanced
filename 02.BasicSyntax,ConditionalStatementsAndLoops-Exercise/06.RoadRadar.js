function roadRadar(arr) {
    let currentSpeed = +arr[0];
    let area = arr[1];

    if (area === "motorway") {
        if (currentSpeed > 130 && currentSpeed <= 150) {
            console.log("speeding");
        } else if (currentSpeed > 150 && currentSpeed <= 170) {
            console.log("excessive speeding");
        } else if (currentSpeed > 170) {
            console.log("reckless driving");
        }
    } else if (area === "interstate") {
        if (currentSpeed > 90 && currentSpeed <= 110) {
            console.log("speeding");
        } else if (currentSpeed > 110 && currentSpeed <= 130) {
            console.log("excessive speeding");
        } else if (currentSpeed > 130) {
            console.log("reckless driving");
        }
    } else if (area === "city") {
        if (currentSpeed > 50 && currentSpeed <= 70) {
            console.log("speeding");
        } else if (currentSpeed > 70 && currentSpeed <= 90) {
            console.log("excessive speeding");
        } else if (currentSpeed > 90) {
            console.log("reckless driving");
        }
    } else if (area === "residential") {
        if (currentSpeed > 20 && currentSpeed <= 40) {
            console.log("speeding");
        } else if (currentSpeed > 40 && currentSpeed <= 60) {
            console.log("excessive speeding");
        } else if (currentSpeed > 60) {
            console.log("reckless driving");
        }
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);