function time2Walk(steps, footprint, studentSpeed) {

    let totalLenght = steps * footprint;
    let rest = Math.floor(totalLenght / 500);
    let totalTime = (totalLenght / studentSpeed) / 1000 * 60;
    let timeSeconds = Math.ceil((rest + totalTime) * 60);
    let result = new Date(null, null, null, null, null, timeSeconds,);

    console.log(result.toTimeString().split(" ")[0]);

}

time2Walk(4000, 0.60, 5);
time2Walk(2564, 0.70, 5.5);