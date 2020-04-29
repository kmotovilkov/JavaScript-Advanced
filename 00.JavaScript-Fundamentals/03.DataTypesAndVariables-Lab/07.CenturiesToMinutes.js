function centuries(num) {
    let years = num * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let output = ` ${num} centuries = ${years} years = ${days} days = ${hours} hours = ${hours * 60} minutes`
    console.log(output);
}

centuries(1);